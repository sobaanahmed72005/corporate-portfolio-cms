import { factories } from '@strapi/strapi';

// This content type is write-only from the public API — signups are
// created automatically via POST, and no client should ever be able to
// list, read, update, or delete subscriber records through the REST API.
// Restricting routes here is a code-level backstop: it doesn't depend on
// the Public role's permissions staying correctly configured in the admin
// panel (DB state, not version-controlled) to keep the subscriber list
// from being exposed if "find" is ever accidentally toggled on there.
export default factories.createCoreRouter('api::newsletter-subscriber.newsletter-subscriber', {
  only: ['create'],
});
