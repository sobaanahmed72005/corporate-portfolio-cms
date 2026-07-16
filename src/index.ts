import type { Core } from '@strapi/strapi';

/**
 * Seed data mirroring corporate-portfolio-frontend's lib/data/*.ts at the
 * time this CMS was stood up, so the site shows the same content once the
 * frontend switches from static imports to fetching from here. Edit content
 * from the admin panel afterward — this only runs when a content type is
 * empty, so it won't overwrite anything you've changed.
 */

const productCategories = [
  {
    slug: 'mobile-accessories',
    name: 'Mobile Accessories',
    shortName: 'Mobile Accessories',
    description: 'Chargers, cables, power banks, and protective accessories for smartphones.',
    icon: 'smartphone',
    iconColor: '#3B82F6',
    products: [
      {
        slug: 'gan-fast-wall-charger',
        name: 'GaN Fast Wall Chargers',
        description: 'Compact USB-C PD chargers (20W–65W) for phones.',
        icon: 'plug',
      },
      {
        slug: 'car-chargers',
        name: 'Car Chargers',
        description: 'Dual-port car chargers with fast charging support.',
        icon: 'car',
      },
      {
        slug: 'power-banks',
        name: 'Power Banks',
        description: 'High-capacity portable power banks for on-the-go charging.',
        icon: 'battery-charging',
      },
      {
        slug: 'phone-cases-screen-protectors',
        name: 'Phone Cases & Screen Protectors',
        description: 'Protective cases and tempered-glass screen protectors for popular phone models.',
        icon: 'smartphone',
      },
    ],
  },
  {
    slug: 'laptop-accessories',
    name: 'Laptop Accessories',
    shortName: 'Laptop Accessories',
    description: 'Chargers, docking stations, bags, and peripherals to get more out of your laptop.',
    icon: 'laptop',
    iconColor: '#06B6D4',
    products: [
      {
        slug: 'laptop-chargers-power-adapters',
        name: 'Laptop Chargers & Power Adapters',
        description: 'Replacement and universal power adapters for popular laptop brands.',
        icon: 'plug',
      },
      {
        slug: 'usb-c-hubs-docking-stations',
        name: 'USB-C Hubs & Docking Stations',
        description: "Multi-port hubs and docking stations to expand your laptop's connectivity.",
        icon: 'cable',
      },
      {
        slug: 'laptop-bags-sleeves',
        name: 'Laptop Bags & Sleeves',
        description: 'Padded sleeves and carry bags sized for common laptop screen sizes.',
        icon: 'briefcase',
      },
      {
        slug: 'wireless-mice-keyboards',
        name: 'Wireless Mice & Keyboards',
        description: 'Compact wireless mice and keyboards for a proper desk setup on the go.',
        icon: 'mouse',
      },
    ],
  },
  {
    slug: 'cctv-security',
    name: 'CCTV & Security Cameras',
    shortName: 'CCTV & Security',
    description:
      'Indoor and outdoor security cameras with recording systems for homes and businesses.',
    icon: 'video',
    iconColor: '#F43F5E',
    products: [
      {
        slug: 'indoor-dome-cameras',
        name: 'Indoor Dome Cameras',
        description: 'Discreet dome cameras for offices, shops, and homes.',
        icon: 'camera',
      },
      {
        slug: 'outdoor-bullet-cameras',
        name: 'Outdoor Bullet Cameras',
        description: 'Weatherproof bullet cameras with night vision.',
        icon: 'video',
      },
      {
        slug: 'wireless-ip-cameras',
        name: 'Wireless / WiFi IP Cameras',
        description: 'Easy-install WiFi cameras with mobile app monitoring.',
        icon: 'wifi',
      },
      {
        slug: 'nvr-dvr-systems',
        name: 'NVR / DVR Recording Systems',
        description: 'Multi-channel recorders for storing and reviewing footage.',
        icon: 'hard-drive',
      },
    ],
  },
  {
    slug: 'solar-panels',
    name: 'Solar Panels & Solar Solutions',
    shortName: 'Solar Solutions',
    description:
      'Solar panels, inverters, and batteries for reliable, cost-saving power backup.',
    icon: 'sun',
    iconColor: '#F97316',
    products: [
      {
        slug: 'monocrystalline-panels',
        name: 'Monocrystalline Solar Panels',
        description: 'High-efficiency panels for homes, offices, and industrial use.',
        icon: 'sun',
      },
      {
        slug: 'solar-inverters',
        name: 'Solar Inverters',
        description: 'On-grid and hybrid inverters matched to your load requirements.',
        icon: 'zap',
      },
      {
        slug: 'solar-batteries',
        name: 'Solar Batteries',
        description: 'Deep-cycle batteries for extended backup during outages.',
        icon: 'battery',
      },
      {
        slug: 'solar-kits',
        name: 'Complete Solar Kits',
        description: 'Bundled home/office kits with panels, inverter, and battery.',
        icon: 'package',
      },
    ],
  },
  {
    slug: 'networking',
    name: 'Networking Devices',
    shortName: 'Networking',
    description: 'Routers, switches, and cabling equipment to keep your network fast and reliable.',
    icon: 'router',
    iconColor: '#8B5CF6',
    products: [
      {
        slug: 'routers-access-points',
        name: 'Routers & Wireless Access Points',
        description: 'Dual-band routers and access points for wide WiFi coverage.',
        icon: 'router',
      },
      {
        slug: 'network-switches',
        name: 'Network Switches',
        description: 'Managed and unmanaged switches for wired office networks.',
        icon: 'network',
      },
      {
        slug: 'structured-cabling',
        name: 'Structured Cabling & Patch Panels',
        description: 'Cat5e/Cat6 cabling and patch panels for structured networks.',
        icon: 'cable',
      },
      {
        slug: 'range-extenders',
        name: 'Range Extenders',
        description: 'WiFi extenders and repeaters to eliminate dead zones.',
        icon: 'signal',
      },
    ],
  },
];

const services = [
  {
    slug: 'cctv-installation',
    name: 'CCTV Installation & Setup',
    description:
      'End-to-end camera installation for homes and businesses, from site survey to mobile app configuration.',
    features: [
      'Site survey and camera placement planning',
      'Cabling, mounting, and recorder setup',
      'Mobile app and remote viewing configuration',
      'Post-installation support',
    ],
    icon: 'camera',
    iconColor: '#F43F5E',
  },
  {
    slug: 'solar-installation',
    name: 'Solar Panel Installation',
    description: 'Complete solar setup for homes and offices, sized to your load and backup needs.',
    features: [
      'Load assessment and system sizing',
      'Panel, inverter, and battery installation',
      'Grid-tie and hybrid system setup',
      'Maintenance and troubleshooting',
    ],
    icon: 'sun',
    iconColor: '#F97316',
  },
  {
    slug: 'networking-setup',
    name: 'Networking & Structured Cabling',
    description: 'Reliable wired and wireless network setup for offices, retail spaces, and homes.',
    features: [
      'Router, switch, and access point configuration',
      'Structured cabling for new or existing spaces',
      'WiFi coverage optimization',
      'Network troubleshooting and support',
    ],
    icon: 'network',
    iconColor: '#8B5CF6',
  },
  {
    slug: 'bulk-corporate-supply',
    name: 'Bulk & Corporate Supply',
    description: 'Bulk sourcing of IT accessories and equipment for corporate and institutional clients.',
    features: [
      'Volume pricing for bulk orders',
      'Consistent stock sourcing',
      'Delivery coordination',
      'Dedicated support for corporate accounts',
    ],
    icon: 'package',
    iconColor: '#10B981',
  },
  {
    slug: 'maintenance-support',
    name: 'Maintenance & Technical Support',
    description: 'Ongoing maintenance and troubleshooting for previously installed systems.',
    features: [
      'Scheduled maintenance visits',
      'Fault diagnosis and repair',
      'System upgrades',
      'Priority support for existing customers',
    ],
    icon: 'wrench',
    iconColor: '#06B6D4',
  },
];

const blogPosts = [
  {
    slug: 'signs-your-business-needs-a-cctv-upgrade',
    title: '5 Signs Your Business Needs a CCTV Upgrade',
    category: 'Security',
    date: 'June 10, 2026',
    author: 'IT Solutions Team',
    excerpt:
      "Grainy footage and blind spots aren't just inconvenient — they're a liability. Here's how to tell it's time to upgrade your camera system.",
    body: [
      "A lot of businesses only think about their CCTV system after something goes wrong — a break-in, a dispute over a delivery, or a customer complaint with no footage to back it up. By then, the gap in coverage has already cost you. Here are five signs it's time for an upgrade before that happens.",
      "First, if your footage is too grainy to identify a face or a license plate, your cameras are past their useful life. Older analog cameras and low-resolution IP cameras simply don't hold up to scrutiny when footage actually matters.",
      'Second, blind spots. As a business grows — a new storage room, an extra entrance, an expanded parking area — camera coverage often does not grow with it. A proper site survey catches these gaps before they become a problem.',
      "Third, no remote access. If you can only view footage by physically walking to a recorder, you're missing one of the biggest benefits of modern systems: checking in on any location from your phone, anywhere.",
      "Fourth, storage that fills up too fast. Short retention windows mean that by the time you realize you need footage from two weeks ago, it's already been overwritten. Modern NVR systems with adequate storage solve this.",
      "Fifth, no night vision or weatherproofing on outdoor cameras. Most incidents worth catching on camera happen after dark or in bad weather — cameras that can't handle either aren't doing their job.",
      'If any of these sound familiar, a site survey is the right next step. We assess your current setup, identify gaps, and recommend a system sized to your actual risk — not an oversized quote you do not need.',
    ].join('\n\n'),
  },
  {
    slug: 'how-much-can-solar-really-save-you',
    title: 'How Much Can Solar Really Save You in Pakistan?',
    category: 'Solar Energy',
    date: 'May 22, 2026',
    author: 'IT Solutions Team',
    excerpt:
      "Between rising electricity bills and frequent load-shedding, solar is no longer a luxury upgrade. Here's how the math actually works.",
    body: [
      'The two biggest reasons homes and businesses in Pakistan are moving to solar are rising per-unit electricity costs and load-shedding that disrupts work and daily life. Solar addresses both at once — but the savings depend heavily on how the system is sized.',
      "An oversized system wastes money on capacity you don't use; an undersized one leaves you still dependent on the grid during peak load. The right approach starts with a load assessment: what do you actually run, and when? A household running a few fans, lights, and a fridge has very different needs than one also running AC units and a water pump.",
      "Grid-tied systems are typically the lowest-cost entry point and reduce your monthly bill by offsetting daytime grid consumption, but they don't help during outages unless paired with a battery. Hybrid systems add battery backup, so you keep power during load-shedding, at a higher upfront cost.",
      'Payback periods vary, but most properly sized residential systems in Pakistan pay for themselves well within a few years through reduced bills alone — before even factoring in the value of uninterrupted power during outages.',
      "The mistake we see most often is a system bought off a generic package size rather than an actual load calculation. That's why every installation starts with sizing the system to your real usage, not a one-size-fits-all kit.",
    ].join('\n\n'),
  },
  {
    slug: 'cat5e-vs-cat6-which-cabling-does-your-office-need',
    title: 'Cat5e vs Cat6: Which Cabling Does Your Office Need?',
    category: 'Networking',
    date: 'April 30, 2026',
    author: 'IT Solutions Team',
    excerpt:
      'Structured cabling outlasts almost everything else in your office. Choosing the wrong standard means re-doing the walls in a few years.',
    body: [
      "Structured cabling is one of the few things in an office that's expensive and disruptive to redo — it's behind walls, under floors, and inside ceilings. Getting the standard right the first time matters more than most other IT decisions.",
      'Cat5e supports gigabit speeds over shorter distances and is the cheaper option, still adequate for smaller offices with modest bandwidth needs — mostly web browsing, email, and light file sharing.',
      'Cat6 supports higher bandwidth over longer runs and handles 10-gigabit speeds at shorter distances, with better resistance to interference. For offices doing more — video conferencing across many rooms, larger file transfers, VoIP phones, or planning to grow headcount — Cat6 is worth the modest extra cost upfront.',
      'The bigger factor is often not the cable itself but the installation quality: proper cable management, correctly terminated patch panels, and a design that accounts for where new workstations and access points will go as the office grows.',
      'Our approach is to map out your current and near-future needs during the site survey, then recommend the cabling standard that avoids over- or under-building. Re-cabling later costs far more than choosing right the first time.',
    ].join('\n\n'),
  },
  {
    slug: 'buyers-guide-choosing-the-right-power-bank',
    title: "A Buyer's Guide to Choosing the Right Power Bank",
    category: 'IT Accessories',
    date: 'April 8, 2026',
    author: 'IT Solutions Team',
    excerpt:
      'Not all power banks are built the same. Capacity, output, and charging speed all matter more than the number printed on the box.',
    body: [
      "Power bank shopping usually starts and ends with the mAh number on the box, but that number alone doesn't tell you how useful the power bank actually is. A few other specs matter just as much.",
      "Output wattage determines how fast it charges your devices — a high-capacity power bank with low output wattage will still charge your laptop or tablet slowly. If you're charging a laptop, look for at least 65W PD output; for phones, 20W is usually plenty.",
      'Input charging speed matters too — a large-capacity power bank with slow input charging can take most of a day to refill itself, which defeats the purpose if you need it charged quickly between uses.',
      "Number of ports and simultaneous charging capability matters if you're regularly charging more than one device — check whether total output is shared or independent per port.",
      'Finally, build quality and safety certification matter more than they get credit for — a power bank with a poorly regulated battery is a real safety risk. We only stock power banks that meet recognized safety standards, not the cheapest unbranded imports.',
      "If you're not sure what capacity or output you need, tell us what devices you're charging and how often — we'll point you to the right option instead of the most expensive one.",
    ].join('\n\n'),
  },
  {
    slug: 'load-shedding-proofing-your-home-solar-vs-ups-vs-generator',
    title: 'Load-Shedding-Proofing Your Home: Solar vs. UPS vs. Generator',
    category: 'Solar Energy',
    date: 'March 15, 2026',
    author: 'IT Solutions Team',
    excerpt:
      "Each backup option has a different cost, noise, and maintenance profile. Here's how to pick the right one for your household.",
    body: [
      'When the power goes out, there are really three practical options: a UPS with batteries, a generator, or a solar system with battery backup. Each has real trade-offs, and the right choice depends on your budget, how long outages typically last, and what you need to keep running.',
      'A UPS is the lowest upfront cost and works well for short outages — enough to keep lights, fans, and a router running for an hour or two. Batteries need periodic replacement, and capacity is limited, so it is not a solution for extended load-shedding.',
      "A generator provides power for as long as you have fuel, making it suited to longer outages, but comes with ongoing fuel costs, noise, and maintenance — and most people don't want one running through the night.",
      "A solar-plus-battery system has the highest upfront cost but the lowest running cost over time — no fuel, minimal noise, and it offsets your daytime grid bill even when there's no outage at all. For households dealing with frequent, long load-shedding, it's usually the option that pays for itself fastest.",
      'In practice, many households combine a smaller UPS for instant, silent backup with a solar system sized for both daily savings and longer outages. We can walk through your typical outage pattern and monthly bill to recommend a combination that actually fits your situation.',
    ].join('\n\n'),
  },
  {
    slug: 'bulk-procurement-tips-for-corporate-it-accessories',
    title: 'Bulk Procurement Tips for Corporate IT Accessories',
    category: 'Corporate Supply',
    date: 'February 20, 2026',
    author: 'IT Solutions Team',
    excerpt:
      "Ordering chargers, cables, and peripherals for a whole office is different from a one-off purchase. Here's what to plan for.",
    body: [
      'Corporate procurement for IT accessories runs into problems that a single retail purchase never does: consistency across a large order, delivery timing across multiple sites, and reliable restocking for ongoing needs like onboarding kits.',
      'Consistency matters more than people expect — receiving 200 chargers where some are a slightly different model than others creates support headaches down the line. Working with a single supplier who can guarantee the same spec across the full order avoids this.',
      'Delivery coordination is the second common gap. A single-site delivery is simple; coordinating delivery to five branches on a schedule that matches your rollout plan is a different problem, and worth discussing upfront rather than after the order is placed.',
      'For recurring needs — like accessory kits for new hires every month — setting up a standing order with agreed lead times removes the need to re-negotiate and re-source every single time.',
      'Volume pricing is the obvious benefit of bulk ordering, but the bigger long-term value is having one dependable point of contact for sourcing, consistency, and delivery — rather than re-shopping every order from scratch.',
    ].join('\n\n'),
  },
];

const testimonials = [
  {
    name: 'Ahmed R.',
    role: 'Retail Store Owner',
    quote:
      'The CCTV system they installed across our branches has been rock solid. Remote monitoring from one app makes it easy to check in on any location.',
    rating: 5,
    iconColor: '#F43F5E',
  },
  {
    name: 'Sana K.',
    role: 'Homeowner',
    quote:
      'Our solar backup setup has completely changed how load-shedding affects us. The team sized the system properly and installation was clean and quick.',
    rating: 5,
    iconColor: '#F97316',
  },
  {
    name: 'Bilal M.',
    role: 'Office Manager',
    quote:
      "We had constant WiFi dead zones across our floors. They redesigned the whole network and it's been reliable ever since.",
    rating: 5,
    iconColor: '#8B5CF6',
  },
  {
    name: 'Fatima N.',
    role: 'Procurement Officer',
    quote:
      'Bulk ordering accessories for our labs used to be a hassle. Their team handles sourcing and delivery consistently, order after order.',
    rating: 5,
    iconColor: '#10B981',
  },
  {
    name: 'Usman T.',
    role: 'Homeowner',
    quote: 'Added a video doorbell and a couple of outdoor cameras. Setup was straightforward and the mobile app just works.',
    rating: 4,
    iconColor: '#3B82F6',
  },
  {
    name: 'Hira S.',
    role: 'Corporate Client',
    quote:
      "What stands out is the follow-up support. Whenever something needs a look, they're responsive on WhatsApp and quick to send someone out.",
    rating: 5,
    iconColor: '#06B6D4',
  },
];

// PLACEHOLDER — same content as lib/data/offices.ts on the frontend; edit
// with real branch details or delete the second entry from the admin panel
// if this is a single-location business.
const offices = [
  {
    slug: 'headquarters',
    name: 'Head Office',
    phone: '+92 300 0000000',
    email: 'info@example.com',
    address: 'Shop/Office Address Line 1, City, Pakistan',
    icon: 'building',
    iconColor: '#3B82F6',
  },
  {
    slug: 'branch-2',
    name: 'Branch Office',
    phone: '+92 300 0000001',
    email: 'branch@example.com',
    address: 'Shop/Office Address Line 2, City 2, Pakistan',
    icon: 'globe',
    iconColor: '#3B82F6',
  },
];

const reasons = [
  {
    title: 'Quality-Checked Products',
    description: 'Every product is sourced and checked for reliability before it reaches you.',
    tag: 'TRUSTED SOURCING',
    icon: 'shield-check',
    iconColor: '#3B82F6',
  },
  {
    title: 'Professional Installation',
    description: 'Our technicians handle CCTV, solar, and networking setup from start to finish.',
    tag: 'EXPERT TEAM',
    icon: 'truck',
    iconColor: '#F97316',
  },
  {
    title: 'Responsive Support',
    description: 'Reach us by phone or WhatsApp for quick answers and after-installation support.',
    tag: 'ALWAYS AVAILABLE',
    icon: 'headset',
    iconColor: '#10B981',
  },
  {
    title: 'Bulk & Corporate Ready',
    description: 'Volume pricing and reliable sourcing for corporate and institutional orders.',
    tag: 'VOLUME PRICING',
    icon: 'badge-check',
    iconColor: '#8B5CF6',
  },
];

const portfolioCategories = [
  {
    slug: 'cctv-installations',
    name: 'CCTV Installation Projects',
    description:
      'Camera systems installed and configured for retail, residential, and warehouse security.',
    icon: 'camera',
    iconColor: '#F43F5E',
    projects: [
      {
        slug: 'retail-chain-security-rollout',
        title: '32-Camera Retail Chain Security Rollout',
        summary:
          'Installed and networked a 32-camera NVR system across 4 retail branches with centralized remote monitoring from a single mobile app.',
        highlight: '4 Branches Connected',
        icon: 'camera',
      },
      {
        slug: 'residential-cctv-doorbell-upgrade',
        title: 'Residential CCTV & Video Doorbell Upgrade',
        summary:
          'Full home security upgrade combining outdoor bullet cameras, indoor domes, and a video doorbell, all viewable from one app.',
        highlight: '8-Camera Home Setup',
        icon: 'video',
      },
      {
        slug: 'warehouse-perimeter-surveillance',
        title: 'Warehouse Perimeter Surveillance System',
        summary:
          'Weatherproof, night-vision cameras covering warehouse entry points and loading docks with extended recording retention.',
        highlight: '24/7 Perimeter Coverage',
        icon: 'hard-drive',
      },
    ],
  },
  {
    slug: 'solar-installations',
    name: 'Solar Installation Projects',
    description: 'Solar and backup power systems sized and installed for homes, offices, and off-grid needs.',
    icon: 'sun',
    iconColor: '#F97316',
    projects: [
      {
        slug: 'hybrid-solar-family-home',
        title: '10kW Hybrid Solar System for a Family Home',
        summary:
          "Sized and installed a hybrid solar-plus-battery system that significantly cut a household's dependence on grid electricity.",
        highlight: '10kW System',
        icon: 'sun',
      },
      {
        slug: 'office-solar-backup',
        title: 'Office Solar Backup for Load-Shedding Resilience',
        summary:
          'On-grid solar with battery backup keeping a small office running through outages without interrupting work.',
        highlight: 'Zero Downtime During Outages',
        icon: 'battery',
      },
      {
        slug: 'solar-water-pump-install',
        title: 'Solar-Powered Water Pump Installation',
        summary:
          'Off-grid solar system sized for an agricultural water pump, removing dependency on unreliable grid electricity.',
        highlight: 'Off-Grid Install',
        icon: 'zap',
      },
    ],
  },
  {
    slug: 'networking-projects',
    name: 'Networking & Structured Cabling Projects',
    description: 'Wired and wireless network builds for offices, retail spaces, and multi-floor buildings.',
    icon: 'network',
    iconColor: '#8B5CF6',
    projects: [
      {
        slug: 'call-center-network-buildout',
        title: '50-Seat Call Center Network Buildout',
        summary:
          'Structured Cat6 cabling, managed switches, and WiFi access points installed for a new call center floor.',
        highlight: '50 Workstations Wired',
        icon: 'cable',
      },
      {
        slug: 'multi-floor-wifi-coverage-fix',
        title: 'Multi-Floor Office WiFi Coverage Fix',
        summary:
          'Diagnosed WiFi dead zones and redesigned access point placement across three floors for full, reliable coverage.',
        highlight: '3 Floors, Zero Dead Zones',
        icon: 'wifi',
      },
      {
        slug: 'retail-network-pos-cabling',
        title: 'Retail Store Network & POS Cabling',
        summary:
          'Structured cabling and network switch setup supporting point-of-sale terminals and back-office systems.',
        highlight: 'POS-Ready Network',
        icon: 'router',
      },
    ],
  },
  {
    slug: 'bulk-corporate-supply',
    name: 'Bulk & Corporate Supply Projects',
    description:
      'Volume sourcing and delivery of IT accessories and equipment for institutional and corporate clients.',
    icon: 'package',
    iconColor: '#10B981',
    projects: [
      {
        slug: 'university-lab-accessories-supply',
        title: 'University Computer Lab Accessories Supply',
        summary:
          'Bulk sourcing and delivery of chargers, cables, and peripherals for multiple university computer labs.',
        highlight: '300+ Units Delivered',
        icon: 'plug',
      },
      {
        slug: 'corporate-onboarding-kit-program',
        title: 'Corporate Onboarding Kit Program',
        summary:
          "Recurring bulk supply of charging accessories and peripherals for a corporate client's new-hire onboarding kits.",
        highlight: 'Ongoing Monthly Supply',
        icon: 'battery-charging',
      },
      {
        slug: 'institutional-networking-equipment-order',
        title: 'Institutional Networking Equipment Order',
        summary:
          'Volume order and delivery coordination of routers and switches for a multi-branch institutional rollout.',
        highlight: 'Multi-Branch Delivery',
        icon: 'network',
      },
    ],
  },
];

// "Years of Experience" auto-calculates from foundingYearForAutoCount (the
// company was founded in 2016) and advances on its own every year — no
// value needed. "Brands & Manufacturers" and "Projects Completed" are
// plain editable placeholder numbers.
const stats = [
  { label: 'Years of Experience', foundingYearForAutoCount: 2016, suffix: '+' },
  { label: 'Brands & Manufacturers', value: 15, suffix: '+' },
  { label: 'Projects Completed', value: 500, suffix: '+' },
];

const clientLogos = Array.from({ length: 10 }, (_, i) => ({
  alt: `Client logo placeholder ${i + 1}`,
}));

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Backs the `global::color` custom field used on theme-setting so the
    // admin panel shows a real color-swatch picker instead of a text box.
    strapi.customFields.register({
      name: 'color',
      type: 'string',
      inputSize: { default: 4, isResizable: true },
    });
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const seedIfEmpty = async (
      uid:
        | 'api::product-category.product-category'
        | 'api::stat.stat'
        | 'api::client-logo.client-logo'
        | 'api::service.service'
        | 'api::blog-post.blog-post'
        | 'api::testimonial.testimonial'
        | 'api::office.office'
        | 'api::reason.reason',
      data: Record<string, unknown>[],
      label: string,
    ) => {
      const existing = await strapi.documents(uid).count({});
      if (existing > 0) {
        strapi.log.info(`[seed] ${label}: ${existing} already present, skipping`);
        return;
      }
      for (const entry of data) {
        await strapi.documents(uid).create({ data: entry, status: 'published' });
      }
      strapi.log.info(`[seed] ${label}: created ${data.length}`);
    };

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
      for (const category of productCategories) {
        const { products, ...categoryData } = category;
        const created = await strapi
          .documents('api::product-category.product-category')
          .create({ data: categoryData, status: 'published' });

        for (const product of products) {
          await strapi.documents('api::product.product').create({
            data: { ...product, category: created.documentId },
            status: 'published',
          });
        }
      }
      strapi.log.info(`[seed] product categories + products: created ${productCategories.length} categories`);
    } else {
      strapi.log.info(`[seed] product categories: ${existingCategories} already present, skipping`);
      await backfillIconColorBySlug(
        'api::product-category.product-category',
        {
          'mobile-accessories': '#3B82F6',
          'laptop-accessories': '#06B6D4',
          'cctv-security': '#F43F5E',
          'solar-panels': '#F97316',
          networking: '#8B5CF6',
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
    await seedIfEmpty('api::reason.reason', reasons, 'why-choose-us reasons');

    // portfolio-category first (project relations point back to it).
    const existingPortfolioCategories = await strapi
      .documents('api::portfolio-category.portfolio-category')
      .count({});
    if (existingPortfolioCategories === 0) {
      for (const category of portfolioCategories) {
        const { projects, ...categoryData } = category;
        const created = await strapi
          .documents('api::portfolio-category.portfolio-category')
          .create({ data: categoryData, status: 'published' });

        for (const project of projects) {
          await strapi.documents('api::project.project').create({
            data: { ...project, category: created.documentId },
            status: 'published',
          });
        }
      }
      strapi.log.info(`[seed] portfolio categories + projects: created ${portfolioCategories.length} categories`);
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
          fontPairing: 'Modern Sans (Outfit + Rubik)',
          radiusStyle: 'Soft (current default)',
          shadowStyle: 'Subtle (current default)',
          showTrustedByLogos: true,
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
  },
};
