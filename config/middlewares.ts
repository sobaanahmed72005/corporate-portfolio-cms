import type { Core } from '@strapi/strapi';

// Comma-separated list of origins allowed to call this API with credentials
// (e.g. "https://itsolutions.pk,https://www.itsolutions.pk"). Without this
// set, Strapi's default CORS middleware allows any origin — fine for local
// dev, not for a real deployment. Set CORS_ALLOWED_ORIGINS in production.
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS
  ? process.env.CORS_ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : ['http://localhost:3000'];

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'global::rate-limit',
  {
    name: 'strapi::cors',
    config: {
      origin: allowedOrigins,
    },
  },
  { name: 'strapi::poweredBy', config: { poweredBy: '' } },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
