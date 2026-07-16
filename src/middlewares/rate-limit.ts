import type { Core } from '@strapi/strapi';

// Small in-memory fixed-window rate limiter for auth-related endpoints
// (admin login, public register/forgot-password/etc) — these have no
// throttling by default, so a brute-force or account-enumeration attempt
// can run unthrottled. No external dependency is needed at this project's
// single-instance scale; if this ever runs across multiple server
// instances, swap the in-memory Map for a shared store (e.g. Redis) so
// counts stay consistent across instances.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const RATE_LIMITED_PATHS = [
  '/admin/login',
  '/api/auth/local',
  '/api/auth/local/register',
  '/api/auth/forgot-password',
  '/api/auth/reset-password',
  '/api/auth/send-email-confirmation',
];

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

// Sweep expired buckets periodically so memory doesn't grow unbounded from
// one-off/abandoned IPs.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}, 5 * 60_000).unref();

const isRateLimitedPath = (path: string) => RATE_LIMITED_PATHS.some((p) => path === p);

export default (_config: unknown, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    if (!isRateLimitedPath(ctx.path)) {
      return next();
    }

    const ip = ctx.request.ip || 'unknown';
    const key = `${ip}:${ctx.path}`;
    const now = Date.now();
    const bucket = buckets.get(key);

    if (!bucket || now > bucket.resetAt) {
      buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
      return next();
    }

    if (bucket.count >= MAX_REQUESTS) {
      strapi.log.warn(`[rate-limit] blocked ${ip} on ${ctx.path} (${bucket.count} requests in window)`);
      ctx.status = 429;
      ctx.body = {
        error: {
          status: 429,
          name: 'TooManyRequestsError',
          message: 'Too many attempts. Please wait a minute and try again.',
        },
      };
      return;
    }

    bucket.count += 1;
    return next();
  };
};
