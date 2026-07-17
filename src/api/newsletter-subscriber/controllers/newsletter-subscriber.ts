import { factories } from '@strapi/strapi';

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
      } catch {
        // Swallow unique-constraint errors silently — never reveal whether
        // an email is already subscribed (prevents enumeration).
      }

      // Always return the same generic success response regardless of
      // whether the email was new or already existed.
      ctx.status = 200;
      ctx.body = { data: { message: 'Subscribed successfully' } };
    },
  }),
);