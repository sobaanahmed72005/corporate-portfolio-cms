// Restores product/service/reason/portfolio media from the local backup at
// ../../backups/media (see manifest.json there) back into the CMS — for use
// if uploads are ever lost (e.g. a storage provider misconfiguration wiping
// the upload.config back to local-disk). Re-uploads through the configured
// provider (R2, per config/plugins.ts) and re-links each record by the
// documentId recorded in the manifest at backup time.
//
// Usage: node scripts/restore-media-backup.js
//
// Requires DATABASE_URL pointed at the target environment (see .env).
const { createStrapi, compileStrapi } = require('@strapi/strapi');
const fs = require('fs');
const path = require('path');

const BACKUP_ROOT = path.join(__dirname, '..', '..', 'backups', 'media');

const COLLECTIONS = {
  products: { uid: 'api::product.product', field: 'image' },
  services: { uid: 'api::service.service', field: 'image' },
  reasons: { uid: 'api::reason.reason', field: 'image' },
};

async function uploadFile(app, filePath, mimetype) {
  const buf = fs.readFileSync(filePath);
  const uploaded = await app.plugin('upload').service('upload').upload({
    data: {},
    files: {
      filepath: filePath,
      originalFilename: path.basename(filePath),
      newFilename: path.basename(filePath),
      mimetype,
      size: buf.length,
    },
  });
  return Array.isArray(uploaded) ? uploaded[0] : uploaded;
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.mp4') return 'video/mp4';
  return 'image/jpeg';
}

async function main() {
  const manifestPath = path.join(BACKUP_ROOT, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('No manifest found at', manifestPath, '— run the backup first.');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'error';

  try {
    for (const [key, { uid, field }] of Object.entries(COLLECTIONS)) {
      const entries = manifest[key] || [];
      for (const entry of entries) {
        const filePath = path.join(BACKUP_ROOT, key, entry.file);
        if (!fs.existsSync(filePath)) {
          console.log(`  SKIP ${key}/${entry.slug}: backup file missing (${entry.file})`);
          continue;
        }
        const media = await uploadFile(app, filePath, mimeFor(filePath));
        await app.documents(uid).update({ documentId: entry.documentId, data: { [field]: media.id } });
        await app.documents(uid).publish({ documentId: entry.documentId });
        console.log(`  ${key}/${entry.slug} -> media ${media.id}`);
      }
    }

    for (const entry of manifest.portfolio || []) {
      const data = {};
      if (entry.imageFile) {
        const filePath = path.join(BACKUP_ROOT, 'portfolio', entry.imageFile);
        if (fs.existsSync(filePath)) {
          const media = await uploadFile(app, filePath, mimeFor(filePath));
          data.image = media.id;
          console.log(`  portfolio/${entry.slug} thumb -> media ${media.id}`);
        }
      }
      if (entry.videoFile) {
        const filePath = path.join(BACKUP_ROOT, 'portfolio', entry.videoFile);
        if (fs.existsSync(filePath)) {
          const media = await uploadFile(app, filePath, mimeFor(filePath));
          data.video = media.id;
          console.log(`  portfolio/${entry.slug} video -> media ${media.id}`);
        }
      }
      if (Object.keys(data).length > 0) {
        await app.documents('api::project.project').update({ documentId: entry.documentId, data });
        await app.documents('api::project.project').publish({ documentId: entry.documentId });
      }
    }

    console.log('\nRestore complete.');
  } finally {
    await app.destroy();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
