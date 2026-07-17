import { factories } from '@strapi/strapi';

// Strapi's unique-field validator throws with this word in the message
// (see @strapi/core's entity-validator: "This attribute must be unique").
// Used to tell an expected duplicate-signup rejection apart from a genuinely
// unexpected failure, without depending on Strapi's internal error classes.
const UNIQUE_CONSTRAINT_HINT = /unique/i;

export default factories.createCoreController(
  'api::newsletter-subscriber.newsletter-subscriber',
  ({ strapi }) => ({
    async create(ctx) {
      const { email } = (ctx.request.body as { data?: { email?: string } })?.data ?? {};

      if (!email || typeof email !== 'string') {
        return ctx.badRequest('Email is required');
      }

      let alreadySubscribed = false;

      try {
        await strapi.documents('api::newsletter-subscriber.newsletter-subscriber').create({
          data: { email },
        });
      } catch (error) {
        // A duplicate signup hits the unique constraint on `email` —
        // expected, not a real failure. Anything else (validation failure,
        // DB outage, etc.) is unexpected and gets logged so it doesn't
        // vanish silently.
        const message = error instanceof Error ? error.message : String(error);
        if (UNIQUE_CONSTRAINT_HINT.test(message)) {
          alreadySubscribed = true;
        } else {
          strapi.log.error(`[newsletter-subscriber] create failed unexpectedly: ${message}`);
        }
      }

      // The HTTP status is always 200 regardless of outcome — this route is
      // only ever called by the backend's create-only token, never a public
      // client, but keeping the status uniform is cheap insurance against
      // email enumeration if that ever changes. `alreadySubscribed` in the
      // body carries the real outcome for that trusted caller's own logging
      // (see corporate-portfolio-backend's storeSubscriber) without varying
      // anything an untrusted party could observe.
      ctx.status = 200;
      ctx.body = { data: { message: 'Subscribed successfully', alreadySubscribed } };
    },
  }),
);