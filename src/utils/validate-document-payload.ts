/**
 * Validates the `data` payload of a `strapi.documents().create()` /
 * `.update()` call before it's allowed to proceed. This is the one piece
 * of genuinely custom security/data-integrity logic in this CMS — the
 * `global::color` custom field only swaps in a color-swatch picker in the
 * admin UI, nothing stops a value that isn't a real hex color (or a
 * malformed URL) from being saved through the API. Public role has zero
 * write access to anything using these fields (see the bootstrap-time
 * Public-role check in src/index.ts), so this is only reachable by a
 * trusted admin already, but it's cheap insurance against a typo silently
 * breaking site styling or storing something unexpected.
 *
 * Pulled out of src/index.ts's `strapi.documents.use()` middleware into its
 * own module so it can be unit tested without booting Strapi.
 */

export const HEX_COLOR_RE = /^#[0-9A-Fa-f]{6}$/;

// Anchored at both ends and restricted to non-whitespace characters after
// the scheme — `.` alone doesn't match `\n`, so the original
// `/^https?:\/\/.+/` (no `$` anchor) let a value like
// "https://ok.com\nsome-payload" through unchanged, since the regex only
// needs to match a prefix of the string. Rejecting any whitespace
// (including newlines) inside the URL closes that off while still
// accepting every legitimately-formatted URL currently seeded in
// src/index.ts (e.g. "https://store.example.com", "https://facebook.com/").
export const HTTPS_URL_RE = /^https?:\/\/[^\s]+$/;

export const MAX_FEATURES_COUNT = 20;
export const MAX_FEATURE_LENGTH = 200;

/**
 * Throws an `Error` with a descriptive message on the first invalid field
 * it finds. Returns nothing (undefined) when the payload is valid or
 * absent — mirrors the original inline implementation so callers can keep
 * treating "no throw" as "safe to proceed".
 */
export function validateDocumentPayload(data: Record<string, unknown> | undefined | null): void {
  if (!data) return;

  for (const [key, value] of Object.entries(data)) {
    // Validate hex color fields
    if (/Color$/.test(key) && typeof value === 'string' && !HEX_COLOR_RE.test(value)) {
      throw new Error(`${key} must be a hex color like #1E40AF (got ${JSON.stringify(value)})`);
    }
    // Validate URL fields
    if (/Url$/.test(key) && typeof value === 'string' && value !== '' && !HTTPS_URL_RE.test(value)) {
      throw new Error(`${key} must start with http:// or https:// (got ${JSON.stringify(value)})`);
    }
  }

  // Validate service.features is a flat array of strings
  if ('features' in data && data.features !== undefined) {
    const features = data.features;
    if (!Array.isArray(features)) {
      throw new Error('features must be an array of strings');
    }
    if (features.length > MAX_FEATURES_COUNT) {
      throw new Error(`features cannot have more than ${MAX_FEATURES_COUNT} items`);
    }
    for (const item of features) {
      if (typeof item !== 'string') {
        throw new Error('Every item in features must be a string');
      }
      if (item.length > MAX_FEATURE_LENGTH) {
        throw new Error(`Each feature must be at most ${MAX_FEATURE_LENGTH} characters`);
      }
    }
  }
}
