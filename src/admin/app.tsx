import type { ComponentType } from 'react';
import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'da',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  register(app: StrapiApp) {
    // Matches the `global::color` custom field registered server-side in
    // src/index.ts — gives theme-setting's color fields a real color-swatch
    // picker (native browser color picker) instead of a plain text box.
    app.customFields.register({
      name: 'color',
      type: 'string',
      intlLabel: {
        id: 'color-picker.label',
        defaultMessage: 'Color',
      },
      intlDescription: {
        id: 'color-picker.description',
        defaultMessage: 'Pick a color visually — no hex code needed',
      },
      components: {
        // The Input component takes strongly-typed props (name, onChange, etc.)
        // that are narrower than Strapi's own loose `ComponentType`, hence the cast.
        Input: async () => {
          const { default: Input } = await import('./extensions/color-picker/Input');
          return { default: Input as unknown as ComponentType };
        },
      },
    });
  },
  bootstrap() {},
};