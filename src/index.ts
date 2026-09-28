import type { Core } from '@strapi/strapi';
import { validateDocumentPayload } from './utils/validate-document-payload';
import { runDatabaseSeed } from './bootstrap/seeder';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Fail fast in production if critical env vars are missing
    if (process.env.NODE_ENV === 'production') {
      const required = ['APP_KEYS', 'ADMIN_JWT_SECRET', 'API_TOKEN_SALT', 'JWT_SECRET'];
      // DATABASE_PASSWORD only matters for mysql/postgres, and only when a
      // full DATABASE_URL connection string (which already embeds the
      // password) isn't provided — see config/database.ts. Requiring it
      // unconditionally would crash a production boot on this project's own
      // default sqlite setup, or force a redundant var when DATABASE_URL is
      // already set (the common case on Railway).
      const dbClient = process.env.DATABASE_CLIENT || 'sqlite';
      if (dbClient !== 'sqlite' && !process.env.DATABASE_URL) {
        required.push('DATABASE_PASSWORD');
      }
      const missing = required.filter((key) => !process.env[key]);
      if (missing.length > 0) {
        throw new Error(`[startup] Missing required environment variables for production: ${missing.join(', ')}`);
      }
    }

    strapi.customFields.register({
      name: 'color',
      type: 'string',
      inputSize: { default: 4, isResizable: true },
    });
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // The `global::color` custom field only swaps in a color-swatch picker
    // in the admin UI — nothing stops a value that isn't a real hex color
    // from being saved through the API. Public role has zero write access
    // to anything using this field (verified in the audit, and now also
    // enforced at boot below), so this is only reachable by a trusted admin
    // already, but it's cheap insurance against a typo silently breaking
    // site styling. Runs globally rather than being repeated across every
    // schema.json that uses the field. Validation itself lives in
    // src/utils/validate-document-payload.ts so it can be unit tested
    // without booting Strapi.
    strapi.documents.use(async (ctx, next) => {
      if (ctx.action === 'create' || ctx.action === 'update') {
        const data = (ctx.params as { data?: Record<string, unknown> })?.data;
        validateDocumentPayload(data);
      }
      return next();
    });

    // Public role should never have find/findOne/create/update/delete
    // permissions on any content-type — every legitimate caller in this
    // stack authenticates with a scoped API token instead (see
    // corporate-portfolio-frontend's STRAPI_API_TOKEN for reads and
    // corporate-portfolio-backend's STRAPI_NEWSLETTER_TOKEN for the
    // newsletter signup write; the newsletter-subscriber route above is
    // create-only and reached via that token, never the Public role).
    // Those permissions otherwise only live in the database (set via the
    // admin UI's Settings > Roles screen), with nothing version-controlled
    // guaranteeing they stay locked down — a single accidental toggle in
    // the admin panel would silently expose reads (or worse, writes) on
    // every content-type. This checks the Public role's actual permissions
    // on every boot and removes any content-type CRUD permission it finds
    // enabled, logging loudly so the removal is visible in the server
    // logs rather than silently reversing an intentional (if unexpected)
    // change.
    const UNSAFE_PUBLIC_ACTION_RE = /^api::[^.]+\.[^.]+\.(find|findOne|create|update|delete)$/;
    try {
      const publicRole = await strapi.db
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });
      if (publicRole) {
        const publicPermissions = await strapi.db
          .query('plugin::users-permissions.permission')
          .findMany({ where: { role: publicRole.id } });
        const unsafePermissions = publicPermissions.filter((permission: { action: string }) =>
          UNSAFE_PUBLIC_ACTION_RE.test(permission.action),
        );
        if (unsafePermissions.length > 0) {
          strapi.log.warn(
            `[security] Public role had ${unsafePermissions.length} content-type permission(s) enabled — this should never happen since all legitimate API access goes through scoped tokens. Disabling: ${unsafePermissions
              .map((p: { action: string }) => p.action)
              .join(', ')}`,
          );
          await Promise.all(
            unsafePermissions.map((permission: { id: number }) =>
              strapi.db.query('plugin::users-permissions.permission').delete({ where: { id: permission.id } }),
            ),
          );
        }
      } else {
        strapi.log.warn('[security] Could not find the Public role to verify its permissions at boot.');
      }
    } catch (err) {
      // Never let this check crash the boot — the goal is loud visibility
      // into a misconfiguration, not a new way to take the site down.
      strapi.log.warn(`[security] Public role permission check failed: ${(err as Error).message}`);
    }

    // Run modular database seeder (seeds initial records if empty, auto-skips in production once populated)
    await runDatabaseSeed(strapi);
  },
};
