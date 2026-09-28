import type { Core } from '@strapi/strapi';
import {
  companyInfo,
  productCategories,
  services,
  blogPosts,
  testimonials,
  offices,
  reasons,
  portfolioCategories,
  stats,
  clientLogos,
  heroSlides,
} from './seed-data';

/**
 * Seeds initial content into Strapi collections if the database is unpopulated.
 * In production, it auto-detects existing entries to skip redundant queries and achieve
 * fast cold starts (~1.5s).
 */
export async function runDatabaseSeed(strapi: Core.Strapi): Promise<void> {
    if (process.env.SKIP_BOOTSTRAP_SEED === 'true') {
      strapi.log.info('[seed] SKIP_BOOTSTRAP_SEED is true, skipping database seed and backfill checks');
      return;
    }

    const seedIfEmpty = async (
      uid:
        | 'api::product-category.product-category'
        | 'api::stat.stat'
        | 'api::client-logo.client-logo'
        | 'api::service.service'
        | 'api::blog-post.blog-post'
        | 'api::testimonial.testimonial'
        | 'api::office.office'
        | 'api::reason.reason'
        | 'api::hero-slide.hero-slide',
      data: Record<string, unknown>[],
      label: string,
    ) => {
      const existing = await strapi.documents(uid).count({});
      if (existing > 0) {
        strapi.log.info(`[seed] ${label}: ${existing} already present, skipping`);
        return;
      }
      let created = 0;
      for (const entry of data) {
        try {
          await strapi.documents(uid).create({ data: entry, status: 'published' });
          created++;
        } catch (err) {
          strapi.log.warn(`[seed] ${label}: failed to create entry: ${(err as Error).message}`);
        }
      }
      strapi.log.info(`[seed] ${label}: seeded ${created}/${data.length} records`);
    };

    // Ensure hero slides collection is seeded even if product categories were already initialized
    await seedIfEmpty('api::hero-slide.hero-slide', heroSlides, 'hero slides');

    // In production, once the database is already seeded, skip the heavy 20+ migration & backfill queries
    // to achieve near-instant cold starts (~1.5s instead of ~10s).
    if (process.env.NODE_ENV === 'production') {
      const seeded = await strapi.documents('api::product-category.product-category').count({});
      if (seeded > 0) {
        strapi.log.info(
          `[seed] Production database already initialized (${seeded} product categories found). Skipping startup seeder & backfill migrations.`,
        );
        return;
      }
    }
    // Existing rows predate iconColor (it replaced the old named `gradient`
    // field) — backfill using the same colors those names used to map to,
    // so nothing visually changes until the user picks a new color.
    const backfillIconColorBySlug = async (
      uid:
        | 'api::product-category.product-category'
        | 'api::service.service'
        | 'api::portfolio-category.portfolio-category'
        | 'api::office.office',
      slugToColor: Record<string, string>,
      label: string,
    ) => {
      const entries = await strapi.documents(uid).findMany({});
      let backfilled = 0;
      for (const entry of entries) {
        const slug = (entry as { slug?: string }).slug;
        const iconColor = (entry as { iconColor?: string }).iconColor;
        if (!iconColor && slug && slugToColor[slug]) {
          try {
            await strapi.documents(uid).update({
              documentId: entry.documentId,
              data: { iconColor: slugToColor[slug] },
              status: 'published',
            });
            backfilled++;
          } catch (err) {
            // Don't let one entry with pre-existing bad data (e.g. an
            // orphaned draft missing another required field) crash the
            // whole boot — log it and keep going.
            strapi.log.warn(`[seed] ${label}: failed to backfill iconColor on ${slug}: ${(err as Error).message}`);
          }
        }
      }
      if (backfilled > 0) {
        strapi.log.info(`[seed] ${label}: backfilled iconColor on ${backfilled} existing entries`);
      }
    };

    // Testimonials predate iconColor (it replaced the old named `gradient`
    // field) and have no slug, so backfill by name instead.
    const backfillTestimonialIconColorByName = async (nameToColor: Record<string, string>) => {
      const entries = await strapi.documents('api::testimonial.testimonial').findMany({});
      let backfilled = 0;
      for (const entry of entries) {
        const name = (entry as { name?: string }).name;
        const iconColor = (entry as { iconColor?: string }).iconColor;
        if (!iconColor && name && nameToColor[name]) {
          try {
            await strapi.documents('api::testimonial.testimonial').update({
              documentId: entry.documentId,
              data: { iconColor: nameToColor[name] },
              status: 'published',
            });
            backfilled++;
          } catch (err) {
            strapi.log.warn(`[seed] testimonials: failed to backfill iconColor on ${name}: ${(err as Error).message}`);
          }
        }
      }
      if (backfilled > 0) {
        strapi.log.info(`[seed] testimonials: backfilled iconColor on ${backfilled} existing entries`);
      }
    };

    // product-category first (product relations point back to it by slug).
    const existingCategories = await strapi.documents('api::product-category.product-category').count({});
    if (existingCategories === 0) {
      let categoriesCreated = 0;
      for (const category of productCategories) {
        const { products, ...categoryData } = category;
        try {
          const created = await strapi
            .documents('api::product-category.product-category')
            .create({ data: categoryData, status: 'published' });
          categoriesCreated++;

          for (const product of products) {
            try {
              await strapi.documents('api::product.product').create({
                data: { ...product, category: created.documentId },
                status: 'published',
              });
            } catch (err) {
              strapi.log.warn(`[seed] product categories: failed to create product "${product.slug}": ${(err as Error).message}`);
            }
          }
        } catch (err) {
          strapi.log.warn(`[seed] product categories: failed to create category "${category.slug}": ${(err as Error).message}`);
        }
      }
      strapi.log.info(`[seed] product categories + products: created ${categoriesCreated}/${productCategories.length} categories`);
    } else {
      strapi.log.info(`[seed] product categories: ${existingCategories} already present, skipping`);
      await backfillIconColorBySlug(
        'api::product-category.product-category',
        {
          'mobile-accessories': '#3B82F6',
          'cctv-security': '#F43F5E',
          'solar-panels': '#F97316',
          networking: '#8B5CF6',
          'laptop-hardware': '#0EA5E9',
          'multimedia-projectors': '#EC4899',
        },
        'product categories',
      );
    }

    await seedIfEmpty('api::service.service', services, 'services');
    await backfillIconColorBySlug(
      'api::service.service',
      {
        'cctv-installation': '#F43F5E',
        'solar-installation': '#F97316',
        'networking-setup': '#8B5CF6',
        'bulk-corporate-supply': '#10B981',
        'maintenance-support': '#06B6D4',
      },
      'services',
    );
    await seedIfEmpty('api::blog-post.blog-post', blogPosts, 'blog posts');
    await seedIfEmpty('api::testimonial.testimonial', testimonials, 'testimonials');
    await backfillTestimonialIconColorByName({
      'Ahmed R.': '#F43F5E',
      'Sana K.': '#F97316',
      'Bilal M.': '#8B5CF6',
      'Fatima N.': '#10B981',
      'Usman T.': '#3B82F6',
      'Hira S.': '#06B6D4',
    });
    await seedIfEmpty('api::office.office', offices, 'offices');
    await backfillIconColorBySlug(
      'api::office.office',
      { headquarters: '#3B82F6', 'branch-2': '#3B82F6' },
      'offices',
    );
    // New field — existing office entries created before displayOrder
    // existed have no value for it. Backfill by name so "Head Office" sorts
    // before "Branch Office" without the user needing to touch it.
    {
      const nameToOrder: Record<string, number> = { 'Head Office': 1, 'Branch Office': 2 };
      const officeEntries = await strapi.documents('api::office.office').findMany({});
      let backfilled = 0;
      for (const entry of officeEntries) {
        const name = (entry as { name?: string }).name;
        const displayOrder = (entry as { displayOrder?: number }).displayOrder;
        if (!displayOrder && name && nameToOrder[name]) {
          try {
            await strapi.documents('api::office.office').update({
              documentId: entry.documentId,
              data: { displayOrder: nameToOrder[name] },
              status: 'published',
            });
            backfilled++;
          } catch (err) {
            strapi.log.warn(`[seed] offices: failed to backfill displayOrder on ${name}: ${(err as Error).message}`);
          }
        }
      }
      if (backfilled > 0) {
        strapi.log.info(`[seed] offices: backfilled displayOrder on ${backfilled} existing entries`);
      }
    }
    await seedIfEmpty('api::reason.reason', reasons, 'why-choose-us reasons');

    // portfolio-category first (project relations point back to it).
    const existingPortfolioCategories = await strapi
      .documents('api::portfolio-category.portfolio-category')
      .count({});
    if (existingPortfolioCategories === 0) {
      let portfolioCategoriesCreated = 0;
      for (const category of portfolioCategories) {
        const { projects, ...categoryData } = category;
        try {
          const created = await strapi
            .documents('api::portfolio-category.portfolio-category')
            .create({ data: categoryData, status: 'published' });
          portfolioCategoriesCreated++;

          for (const project of projects) {
            try {
              await strapi.documents('api::project.project').create({
                data: { ...project, category: created.documentId },
                status: 'published',
              });
            } catch (err) {
              strapi.log.warn(`[seed] portfolio categories: failed to create project "${project.slug}": ${(err as Error).message}`);
            }
          }
        } catch (err) {
          strapi.log.warn(`[seed] portfolio categories: failed to create category "${category.slug}": ${(err as Error).message}`);
        }
      }
      strapi.log.info(`[seed] portfolio categories + projects: created ${portfolioCategoriesCreated}/${portfolioCategories.length} categories`);
    } else {
      strapi.log.info(`[seed] portfolio categories: ${existingPortfolioCategories} already present, skipping`);
      await backfillIconColorBySlug(
        'api::portfolio-category.portfolio-category',
        {
          'cctv-installations': '#F43F5E',
          'solar-installations': '#F97316',
          'networking-projects': '#8B5CF6',
          'bulk-corporate-supply': '#10B981',
        },
        'portfolio categories',
      );
    }

    await seedIfEmpty('api::stat.stat', stats, 'stats');
    await seedIfEmpty('api::client-logo.client-logo', clientLogos, 'client logos');
    await seedIfEmpty('api::hero-slide.hero-slide' as any, heroSlides, 'hero slides');

    // Single type — seed the one entry with today's actual live look, so
    // nothing changes visually until the user edits it themselves.
    const existingTheme = await strapi.documents('api::theme-setting.theme-setting').findFirst();
    if (!existingTheme) {
      await strapi.documents('api::theme-setting.theme-setting').create({
        data: {
          brandColor: '#0324FF',
          accentColor: '#FFA31A',
          headerColor: '#000000',
          footerColor: '#000000',
          pageBackgroundColor: '#000000',
          cardColor: '#000000',
          buttonColor: '#0324FF',
          navHighlightColor: '#0324FF',
          headerTextColor: '#F7F7F7',
          footerTextColor: '#F7F7F7',
          pageTextColor: '#F7F7F7',
          cardTextColor: '#F7F7F7',
          sectionColor: '#F8FAFC',
          sectionTextColor: '#0F172A',
          contentCardColor: '#FFFFFF',
          contentCardTextColor: '#0F172A',
          fontPairing: 'Single Family — Poppins',
          radiusStyle: 'Soft (current default)',
          shadowStyle: 'Subtle (current default)',
          showTrustedByLogos: true,
          showEventsSection: false,
        },
        status: 'published',
      });
      strapi.log.info('[seed] theme setting: created');
    } else {
      // Record predates fontPairing/radiusStyle/shadowStyle, the header/
      // footer/pageBackground/card/button/navHighlight color split (which
      // replaced the old single inkColor field), the header/footer/page/
      // card TEXT color split (previously auto-derived from the background,
      // now independently pickable), and section/contentCard (the light
      // banner sections and white cards on inner pages like About/Contact/
      // Products, previously hardcoded slate/white with no Strapi control
      // at all) — backfill so the (required) fields aren't left null.
      // header/footer/page/card background default to inkColor's last known
      // live value (#000000, unchanged throughout this project) since that
      // field no longer exists to read from; the dark-zone text-color
      // fields default to #F7F7F7, the exact shade that was being
      // auto-derived from #000000 before that split; button/navHighlight
      // default to the record's own current brandColor; section/contentCard
      // default to the exact hex the hardcoded slate-50/slate-900/white
      // Tailwind classes they replace already rendered as, so nothing
      // visually changes until the user edits a field.
      const backfill: Record<string, string | boolean> = {};
      if (!existingTheme.fontPairing) backfill.fontPairing = 'Modern Sans (Outfit + Rubik)';
      if (!existingTheme.radiusStyle) backfill.radiusStyle = 'Soft (current default)';
      if (!existingTheme.shadowStyle) backfill.shadowStyle = 'Subtle (current default)';
      if (!existingTheme.headerColor) backfill.headerColor = '#000000';
      if (!existingTheme.footerColor) backfill.footerColor = '#000000';
      if (!existingTheme.pageBackgroundColor) backfill.pageBackgroundColor = '#000000';
      if (!existingTheme.cardColor) backfill.cardColor = '#000000';
      if (!existingTheme.buttonColor) backfill.buttonColor = existingTheme.brandColor || '#0324FF';
      if (!existingTheme.navHighlightColor) backfill.navHighlightColor = existingTheme.brandColor || '#0324FF';
      if (!existingTheme.headerTextColor) backfill.headerTextColor = '#F7F7F7';
      if (!existingTheme.footerTextColor) backfill.footerTextColor = '#F7F7F7';
      if (!existingTheme.pageTextColor) backfill.pageTextColor = '#F7F7F7';
      if (!existingTheme.cardTextColor) backfill.cardTextColor = '#F7F7F7';
      if (!existingTheme.sectionColor) backfill.sectionColor = '#F8FAFC';
      if (!existingTheme.sectionTextColor) backfill.sectionTextColor = '#0F172A';
      if (!existingTheme.contentCardColor) backfill.contentCardColor = '#FFFFFF';
      if (!existingTheme.contentCardTextColor) backfill.contentCardTextColor = '#0F172A';
      if (existingTheme.showTrustedByLogos === undefined || existingTheme.showTrustedByLogos === null) {
        backfill.showTrustedByLogos = true;
      }
      if (existingTheme.showEventsSection === undefined || existingTheme.showEventsSection === null) {
        backfill.showEventsSection = false;
      }
      if (Object.keys(backfill).length > 0) {
        await strapi.documents('api::theme-setting.theme-setting').update({
          documentId: existingTheme.documentId,
          data: backfill,
          status: 'published',
        });
        strapi.log.info('[seed] theme setting: backfilled new fields on existing record');
      } else {
        strapi.log.info('[seed] theme setting: already present, skipping');
      }
    }

    // Single type — seed the one entry with the same placeholder values
    // lib/data/company.ts used to hold, so nothing changes visually until
    // the user edits it themselves from the admin panel.
    const existingCompanyInfo = await strapi.documents('api::company-info.company-info').findFirst();
    if (!existingCompanyInfo) {
      await strapi.documents('api::company-info.company-info').create({
        data: companyInfo,
        status: 'published',
      });
      strapi.log.info('[seed] company info: created');
    } else {
      strapi.log.info('[seed] company info: already present, skipping');
    }
}
