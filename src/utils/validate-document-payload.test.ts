import { describe, expect, it } from 'vitest';
import { validateDocumentPayload, HEX_COLOR_RE, HTTPS_URL_RE } from './validate-document-payload';

describe('validateDocumentPayload', () => {
  it('does nothing for undefined/null/empty data', () => {
    expect(() => validateDocumentPayload(undefined)).not.toThrow();
    expect(() => validateDocumentPayload(null)).not.toThrow();
    expect(() => validateDocumentPayload({})).not.toThrow();
  });

  it('ignores fields that do not end in Color or Url', () => {
    expect(() => validateDocumentPayload({ name: 'not a color or url' })).not.toThrow();
  });

  describe('*Color fields', () => {
    it('accepts a valid 6-digit hex color', () => {
      expect(() => validateDocumentPayload({ iconColor: '#1E40AF' })).not.toThrow();
      expect(() => validateDocumentPayload({ iconColor: '#000000' })).not.toThrow();
      expect(() => validateDocumentPayload({ iconColor: '#FFFFFF' })).not.toThrow();
      expect(() => validateDocumentPayload({ iconColor: '#abcdef' })).not.toThrow();
    });

    it('rejects a hex color that is too short', () => {
      expect(() => validateDocumentPayload({ iconColor: '#FFF' })).toThrow(/must be a hex color/);
    });

    it('rejects a hex color that is too long', () => {
      expect(() => validateDocumentPayload({ iconColor: '#1E40AFFF' })).toThrow(/must be a hex color/);
    });

    it('rejects non-hex characters', () => {
      expect(() => validateDocumentPayload({ iconColor: '#GGGGGG' })).toThrow(/must be a hex color/);
    });

    it('rejects a color missing the leading #', () => {
      expect(() => validateDocumentPayload({ iconColor: '1E40AF' })).toThrow(/must be a hex color/);
    });

    it('rejects an empty string (unlike Url fields, empty is not exempted)', () => {
      expect(() => validateDocumentPayload({ iconColor: '' })).toThrow(/must be a hex color/);
    });

    it('ignores non-string values (e.g. relation IDs) on a *Color-named key', () => {
      expect(() => validateDocumentPayload({ iconColor: null })).not.toThrow();
      expect(() => validateDocumentPayload({ iconColor: 42 })).not.toThrow();
    });
  });

  describe('*Url fields', () => {
    it('accepts a valid https:// URL', () => {
      expect(() => validateDocumentPayload({ storeUrl: 'https://store.example.com' })).not.toThrow();
    });

    it('accepts a valid http:// URL', () => {
      expect(() => validateDocumentPayload({ storeUrl: 'http://store.example.com' })).not.toThrow();
    });

    it('accepts an empty string (Url fields are optional)', () => {
      expect(() => validateDocumentPayload({ storeUrl: '' })).not.toThrow();
    });

    it('accepts every URL currently seeded in src/index.ts', () => {
      const seededUrls = [
        'https://store.example.com',
        'https://facebook.com/',
        'https://instagram.com/',
        'https://linkedin.com/',
      ];
      for (const url of seededUrls) {
        expect(() => validateDocumentPayload({ someUrl: url })).not.toThrow();
      }
    });

    it('rejects a javascript: URI', () => {
      expect(() => validateDocumentPayload({ storeUrl: 'javascript:alert(1)' })).toThrow(
        /must start with http:\/\/ or https:\/\//,
      );
    });

    it('rejects a data: URI', () => {
      expect(() =>
        validateDocumentPayload({ storeUrl: 'data:text/html,<script>alert(1)</script>' }),
      ).toThrow(/must start with http:\/\/ or https:\/\//);
    });

    it('rejects a protocol-relative URL', () => {
      expect(() => validateDocumentPayload({ storeUrl: '//evil.example.com' })).toThrow(
        /must start with http:\/\/ or https:\/\//,
      );
    });

    it('rejects a bare domain with no scheme', () => {
      expect(() => validateDocumentPayload({ storeUrl: 'example.com' })).toThrow(
        /must start with http:\/\/ or https:\/\//,
      );
    });

    // Regression test for the missing-$-anchor bug: the original regex
    // (/^https?:\/\/.+/) had no end anchor, so a trailing newline plus
    // arbitrary payload after a valid-looking prefix still matched, since
    // `.` doesn't match `\n` but the regex only needs to match a prefix of
    // the string, not the whole thing.
    it('rejects a newline-injection payload appended after a valid-looking URL prefix', () => {
      expect(() =>
        validateDocumentPayload({ storeUrl: 'https://ok.com\nsome-payload' }),
      ).toThrow(/must start with http:\/\/ or https:\/\//);
    });

    it('rejects a URL containing embedded whitespace', () => {
      expect(() => validateDocumentPayload({ storeUrl: 'https://ok.com/ evil' })).toThrow(
        /must start with http:\/\/ or https:\/\//,
      );
    });

    it('ignores non-string values on a *Url-named key', () => {
      expect(() => validateDocumentPayload({ storeUrl: null })).not.toThrow();
    });
  });

  describe('features field', () => {
    it('accepts a flat array of strings within the length limits', () => {
      expect(() => validateDocumentPayload({ features: ['One', 'Two', 'Three'] })).not.toThrow();
    });

    it('accepts an empty features array', () => {
      expect(() => validateDocumentPayload({ features: [] })).not.toThrow();
    });

    it('rejects a non-array features value', () => {
      expect(() => validateDocumentPayload({ features: 'not an array' })).toThrow(
        /features must be an array of strings/,
      );
    });

    it('rejects more than 20 features', () => {
      const tooMany = Array.from({ length: 21 }, (_, i) => `Feature ${i}`);
      expect(() => validateDocumentPayload({ features: tooMany })).toThrow(
        /cannot have more than 20 items/,
      );
    });

    it('accepts exactly 20 features', () => {
      const exactlyMax = Array.from({ length: 20 }, (_, i) => `Feature ${i}`);
      expect(() => validateDocumentPayload({ features: exactlyMax })).not.toThrow();
    });

    it('rejects a non-string item in the array', () => {
      expect(() => validateDocumentPayload({ features: ['ok', 42] })).toThrow(
        /Every item in features must be a string/,
      );
    });

    it('rejects a feature string longer than 200 characters', () => {
      expect(() => validateDocumentPayload({ features: ['x'.repeat(201)] })).toThrow(
        /at most 200 characters/,
      );
    });

    it('accepts a feature string of exactly 200 characters', () => {
      expect(() => validateDocumentPayload({ features: ['x'.repeat(200)] })).not.toThrow();
    });
  });

  describe('multiple fields together', () => {
    it('validates all Color/Url/features fields on a single payload', () => {
      expect(() =>
        validateDocumentPayload({
          iconColor: '#1E40AF',
          storeUrl: 'https://example.com',
          features: ['a', 'b'],
        }),
      ).not.toThrow();
    });

    it('throws on the first invalid field encountered', () => {
      expect(() =>
        validateDocumentPayload({
          iconColor: 'not-a-color',
          storeUrl: 'https://example.com',
        }),
      ).toThrow(/must be a hex color/);
    });
  });
});

describe('HEX_COLOR_RE', () => {
  it('matches only well-formed 6-digit hex colors', () => {
    expect(HEX_COLOR_RE.test('#1E40AF')).toBe(true);
    expect(HEX_COLOR_RE.test('#fff')).toBe(false);
    expect(HEX_COLOR_RE.test('1E40AF')).toBe(false);
  });
});

describe('HTTPS_URL_RE', () => {
  it('is anchored at both ends and rejects embedded whitespace/newlines', () => {
    expect(HTTPS_URL_RE.test('https://example.com')).toBe(true);
    expect(HTTPS_URL_RE.test('https://example.com\nmalicious')).toBe(false);
    expect(HTTPS_URL_RE.test('https://example.com/path with spaces')).toBe(false);
  });
});
