import type { Core } from '@strapi/strapi';
import type { Context, Next } from 'koa';

// In-memory fixed-window rate limiter for auth-related endpoints and general
// API throttling. No external dependency is needed at this project's
// single-instance scale; if this ever runs across multiple server instances,
// swap the in-memory Map for a shared store (e.g. Redis).
const AUTH_WINDOW_MS = 60_000;
const AUTH_MAX_REQUESTS = 5;
const API_WINDOW_MS = 60_000;
const API_MAX_REQUESTS = 100;

const AUTH_RATE_LIMITED_PATHS = [
  '/admin/login',
  '/api/auth/local',
  '/api/auth/local/register',
  '/api/auth/forgot-password',
  '/api/auth/reset-password',
  '/api/auth/send-email-confirmation',
];

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}, 5 * 60_000).unref();

function checkLimit(key: string, maxRequests: number, windowMs: number): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false, retryAfter: 0 };
  }

  if (bucket.count >= maxRequests) {
    const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
    return { limited: true, retryAfter };
  }

  bucket.count += 1;
  return { limited: false, retryAfter: 0 };
}

export default (_config: unknown, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: Context, next: Next) => {
    const ip = ctx.request.ip || 'unknown';

    // Strict limit on auth paths
    if (AUTH_RATE_LIMITED_PATHS.some((p) => ctx.path === p)) {
      const key = `auth:${ip}:${ctx.path}`;
      const { limited, retryAfter } = checkLimit(key, AUTH_MAX_REQUESTS, AUTH_WINDOW_MS);

      if (limited) {
        strapi.log.warn(`[rate-limit] blocked ${ip} on ${ctx.path} (auth brute-force)`);
        ctx.status = 429;
        ctx.set('Retry-After', String(retryAfter));
        ctx.body = {
          error: {
            status: 429,
            name: 'TooManyRequestsError',
            message: 'Too many attempts. Please wait a minute and try again.',
          },
        };
        return;
      }
      return next();
    }

    // General API throttle (generous limit for normal usage)
    if (ctx.path.startsWith('/api/')) {
      const key = `api:${ip}`;
      const { limited, retryAfter } = checkLimit(key, API_MAX_REQUESTS, API_WINDOW_MS);

      if (limited) {
        strapi.log.warn(`[rate-limit] blocked ${ip} — general API limit exceeded`);
        ctx.status = 429;
        ctx.set('Retry-After', String(retryAfter));
        ctx.body = {
          error: {
            status: 429,
            name: 'TooManyRequestsError',
            message: 'Too many requests. Please slow down.',
          },
        };
        return;
      }
    }

    return next();
  };
};