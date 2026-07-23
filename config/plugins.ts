import type { Core } from '@strapi/strapi';

const allowedMediaTypes = [
  'image/*',
  'video/*',
  'audio/*',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.*',
  'text/plain',
  'text/csv',
];

const deniedExecutableTypes = [
  'application/vnd.microsoft.portable-executable',
  'application/x-msdownload',
  'application/x-msdos-program',
  'application/x-executable',
  'application/x-dosexec',
  'application/x-sh',
  'text/x-shellscript',
  'application/x-mach-binary',
];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    config: {
      jwtManagement: 'refresh',
      sessions: {
        httpOnly: true,
      },
    },
  },
  upload: {
    config: {
      // Strapi's own default is ~1GB — far more than any product photo,
      // logo, or PDF this site needs, and an easy way to accidentally fill
      // disk. 20MB comfortably covers real media, including large PDFs.
      sizeLimit: 20 * 1024 * 1024,
      security: {
        allowedTypes: allowedMediaTypes,
        deniedTypes: deniedExecutableTypes,
      },
      // Local-disk storage (the default) lives on Railway's container
      // filesystem, which is wiped on every deploy — every uploaded photo
      // and video disappeared the moment this app was next redeployed for
      // an unrelated reason. Cloudflare R2 (S3-compatible) keeps uploads on
      // storage that outlives the app container entirely.
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
          endpoint: env('R2_ENDPOINT'),
          region: 'auto',
          forcePathStyle: true,
          params: {
            Bucket: env('R2_BUCKET'),
          },
        },
        // R2's S3 API endpoint (used above for reads/writes) is a
        // different host than the public URL files are actually served
        // from — without this, Strapi would save file URLs pointing at
        // the (non-public) S3 API endpoint instead of the public bucket.
        baseUrl: env('R2_PUBLIC_URL'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;
