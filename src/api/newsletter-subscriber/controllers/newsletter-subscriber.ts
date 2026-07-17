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

      try {
        await strapi.documents('api::newsletter-subscriber.newsletter-subscriber').create({
          data: { email },
        });
      } catch (error) {
        // A duplicate signup hits the unique constraint on `email` —
        // expected, not a real failure, and never surfaced differently to
        // the client (prevents enumerating which emails are already
        // subscribed). Anything else (validation failure, DB outage, etc.)
        // is unexpected and gets logged so it doesn't vanish silently, even
        // though the client still gets the same generic response either way.
        const message = error instanceof Error ? error.message : String(error);
        if (!UNIQUE_CONSTRAINT_HINT.test(message)) {
          strapi.log.error(`[newsletter-subscriber] create failed unexpectedly: ${message}`);
        }
      }

      // Always return the same generic success response regardless of
      // whether the email was new, already existed, or an unexpected error
      // occurred — see the comment above for why.
      ctx.status = 200;
      ctx.body = { data: { message: 'Subscribed successfully' } };
    },
  }),
);