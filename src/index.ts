import type { Core } from '@strapi/strapi';
import { validateDocumentPayload } from './utils/validate-document-payload';

/**
 * Seed data mirroring corporate-portfolio-frontend's lib/data/*.ts at the
 * time this CMS was stood up, so the site shows the same content once the
 * frontend switches from static imports to fetching from here. Edit content
 * from the admin panel afterward — this only runs when a content type is
 * empty, so it won't overwrite anything you've changed.
 */

const companyInfo = {
  name: 'IT Solutions Trade & Service Pvt. Ltd.',
  shortName: 'IT Solutions',
  tagline: 'Your Trusted Partner for IT Accessories, Security & Solar Solutions',
  description:
    'IT Solutions Trade & Service Pvt. Ltd. supplies and installs IT accessories, CCTV security systems, solar power solutions, and networking equipment for homes and businesses across Pakistan.',
  phone: '+92 300 0000000',
  whatsapp: '+923000000000',
  email: 'info@example.com',
  addressLine1: 'Shop/Office Address Line 1',
  addressCity: 'City',
  addressCountry: 'Pakistan',
  storeUrl: 'https://store.example.com',
  facebookUrl: 'https://facebook.com/',
  instagramUrl: 'https://instagram.com/',
  linkedinUrl: 'https://linkedin.com/',
  foundingYear: 2016,
};

const productCategories = [
  {
    slug: 'cctv-security',
    name: 'CCTV & Security Cameras',
    shortName: 'CCTV & Security',
    description:
      'Indoor and outdoor security cameras with recording systems for homes and businesses.',
    icon: 'video',
    iconColor: '#F43F5E',
    order: 1,
    products: [
      {
        slug: 'hikvision-cctv-cameras',
        name: 'Hikvision CCTV Cameras',
        description: 'Analog and IP camera systems with NVR/DVR recording from Hikvision, a global leader in video surveillance.',
        icon: 'camera',
      },
      {
        slug: 'dahua-cctv-cameras',
        name: 'Dahua CCTV Cameras',
        description: 'Reliable analog and IP camera systems from Dahua for homes and businesses.',
        icon: 'video',
      },
      {
        slug: 'ezviz-wireless-cameras',
        name: 'Ezviz Wireless Cameras',
        description: 'Wireless smart cameras from Ezviz with mobile app monitoring and easy setup.',
        icon: 'wifi',
      },
      {
        slug: 'imou-wireless-cameras',
        name: 'Imou Wireless Cameras',
        description: 'Wireless smart cameras from Imou for flexible indoor and outdoor coverage.',
        icon: 'wifi',
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
    order: 2,
    products: [
      {
        slug: 'ubiquiti-networking',
        name: 'Ubiquiti Networking',
        description: 'Enterprise-grade wireless communication and networking gear from Ubiquiti.',
        icon: 'wifi',
      },
      {
        slug: 'hisource-networking',
        name: 'Hisource Networking Equipment',
        description: 'Routers, switches, and networking accessories from Hisource.',
        icon: 'network',
      },
      {
        slug: 'tp-link-networking',
        name: 'Tp-Link Networking Equipment',
        description: 'Routers, switches, and access points from Tp-Link for home and office networks.',
        icon: 'router',
      },
      {
        slug: 'tenda-networking',
        name: 'Tenda Networking Equipment',
        description: 'Affordable routers and networking devices from Tenda for reliable WiFi coverage.',
        icon: 'signal',
      },
      {
        slug: 'cisco-networking',
        name: 'Cisco Networking Equipment',
        description: 'Enterprise switches and networking hardware from Cisco for demanding environments.',
        icon: 'cable',
      },
    ],
  },
  {
    slug: 'laptop-hardware',
    name: 'Laptop Hardware & Accessories',
    shortName: 'Laptop Hardware',
    description:
      'Internal components, replacement parts, chargers, and accessories for repairing, upgrading, and outfitting your laptop.',
    icon: 'circuit-board',
    iconColor: '#0EA5E9',
    order: 3,
    products: [
      {
        slug: 'laptop-hard-drives',
        name: 'Hard Drives (HDD)',
        description: 'Replacement hard disk drives for laptops of all major brands.',
        icon: 'hard-drive',
      },
      {
        slug: 'laptop-motherboards',
        name: 'Motherboards',
        description: 'Replacement and repair motherboards for common laptop models.',
        icon: 'circuit-board',
      },
      {
        slug: 'laptop-led-screens',
        name: 'LED / LCD Screens',
        description: 'Replacement laptop screens in a range of sizes and resolutions.',
        icon: 'monitor',
      },
      {
        slug: 'laptop-ssd-storage',
        name: 'SSD Storage',
        description: 'Solid-state drives for faster boot times and storage upgrades.',
        icon: 'hard-drive',
      },
      {
        slug: 'laptop-processors',
        name: 'Processors (CPU)',
        description: 'Replacement and upgrade processors for common laptop models.',
        icon: 'cpu',
      },
      {
        slug: 'laptop-ram-memory',
        name: 'RAM / Memory Modules',
        description: 'Memory upgrades to speed up multitasking and overall performance.',
        icon: 'memory-stick',
      },
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
    slug: 'multimedia-projectors',
    name: 'Multimedia Projectors',
    shortName: 'Projectors',
    description: 'Projectors for offices, classrooms, and home entertainment from leading brands.',
    icon: 'projector',
    iconColor: '#EC4899',
    order: 4,
    products: [
      {
        slug: 'sony-projectors',
        name: 'Sony Projectors',
        description: 'Multimedia projectors from Sony for presentations, classrooms, and home theatre setups.',
        icon: 'projector',
      },
      {
        slug: 'nec-projectors',
        name: 'NEC Projectors',
        description: 'Reliable multimedia projectors from NEC for offices and institutions.',
        icon: 'projector',
      },
      {
        slug: 'epson-projectors',
        name: 'Epson Projectors',
        description: 'Bright, high-clarity projectors from Epson for meeting rooms and classrooms.',
        icon: 'projector',
      },
      {
        slug: 'acer-projectors',
        name: 'Acer Projectors',
        description: 'Compact, budget-friendly projectors from Acer for everyday presentation needs.',
        icon: 'projector',
      },
      {
        slug: 'viewsonic-projectors',
        name: 'ViewSonic Projectors',
        description: 'Multimedia projectors from ViewSonic for business, education, and home use.',
        icon: 'projector',
      },
    ],
  },
  {
    slug: 'mobile-accessories',
    name: 'Mobile Accessories',
    shortName: 'Mobile Accessories',
    description: 'Chargers, cables, power banks, and protective accessories for smartphones.',
    icon: 'smartphone',
    iconColor: '#3B82F6',
    order: 5,
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
    slug: 'solar-panels',
    name: 'Solar Panels & Solar Solutions',
    shortName: 'Solar Solutions',
    description:
      'Solar panels, inverters, and batteries for reliable, cost-saving power backup.',
    icon: 'sun',
    iconColor: '#F97316',
    order: 6,
    products: [
      {
        slug: 'monocrystalline-panels',
        name: 'Monocrystalline Solar Panels',
        description: 'High-efficiency panels for homes, offices, and industrial use.',
        icon: 'sun',
      },
      {
        slug: 'solis-inverters',
        name: 'Solis Solar Inverters',
        description: 'On-grid and hybrid inverters from Solis, matched to your load requirements.',
        icon: 'zap',
      },
      {
        slug: 'goodwe-inverters',
        name: 'Goodwe Solar Inverters',
        description: 'Hybrid and on-grid inverters from Goodwe for homes and businesses.',
        icon: 'zap',
      },
      {
        slug: 'sungrow-inverters',
        name: 'Sungrow Solar Inverters',
        description: 'Reliable grid-tie and hybrid inverters from Sungrow, a leading global inverter brand.',
        icon: 'zap',
      },
      {
        slug: 'huawei-inverters',
        name: 'Huawei Solar Inverters',
        description: 'Smart hybrid inverters from Huawei with app-based monitoring.',
        icon: 'zap',
      },
      {
        slug: 'itel-inverters',
        name: 'Itel Solar Inverters',
        description: 'Affordable, dependable inverters from Itel for home backup systems.',
        icon: 'zap',
      },
      {
        slug: 'dyness-inverters',
        name: 'Dyness Solar Inverters & Storage',
        description: 'Inverter and battery storage solutions from Dyness for extended backup.',
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
  {
    slug: 'software-development',
    name: 'Software Development & Digital Services',
    description:
      'Custom software and digital marketing services to help your business grow online and run more efficiently.',
    features: [
      'Social media marketing & content management',
      'Custom inventory management software',
      'Requirements gathering & tailored builds',
      'Ongoing support & feature updates',
    ],
    icon: 'monitor-cog',
    iconColor: '#EAB308',
  },
];

const blogPosts = [
  {
    slug: 'signs-your-business-needs-a-cctv-upgrade',
    title: '5 Signs Your Business Needs a CCTV Upgrade',
    category: 'Security',
    date: '2026-06-10',
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
    date: '2026-05-22',
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
    date: '2026-04-30',
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
    date: '2026-04-08',
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
    date: '2026-03-15',
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
    date: '2026-02-20',
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
    displayOrder: 1,
  },
  {
    slug: 'branch-2',
    name: 'Branch Office',
    phone: '+92 300 0000001',
    email: 'branch@example.com',
    address: 'Shop/Office Address Line 2, City 2, Pakistan',
    icon: 'globe',
    iconColor: '#3B82F6',
    displayOrder: 2,
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
    // Fail fast in production if critical env vars are missing
    if (process.env.NODE_ENV === 'production') {
      const required = ['APP_KEYS', 'ADMIN_JWT_SECRET', 'API_TOKEN_SALT', 'JWT_SECRET'];
      // DATABASE_PASSWORD only matters for mysql/postgres, and only when a
      // full DATABASE_URL connection string (which already embeds the
      // password) isn't provided — see config/database.ts. Requiring it
      // unconditionally would crash a production boot on this project's own
      // default sqlite setup, or force a redundant var when DATABASE_URL is
      // already set (the common case on Railway).
      const dbClient = process.env.DATABASE_CLIENT || 'sqlite';
      if (dbClient !== 'sqlite' && !process.env.DATABASE_URL) {
        required.push('DATABASE_PASSWORD');
      }
      const missing = required.filter((key) => !process.env[key]);
      if (missing.length > 0) {
        throw new Error(`[startup] Missing required environment variables for production: ${missing.join(', ')}`);
      }
    }

    strapi.customFields.register({
      name: 'color',
      type: 'string',
      inputSize: { default: 4, isResizable: true },
    });
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // The `global::color` custom field only swaps in a color-swatch picker
    // in the admin UI — nothing stops a value that isn't a real hex color
    // from being saved through the API. Public role has zero write access
    // to anything using this field (verified in the audit, and now also
    // enforced at boot below), so this is only reachable by a trusted admin
    // already, but it's cheap insurance against a typo silently breaking
    // site styling. Runs globally rather than being repeated across every
    // schema.json that uses the field. Validation itself lives in
    // src/utils/validate-document-payload.ts so it can be unit tested
    // without booting Strapi.
    strapi.documents.use(async (ctx, next) => {
      if (ctx.action === 'create' || ctx.action === 'update') {
        const data = (ctx.params as { data?: Record<string, unknown> })?.data;
        validateDocumentPayload(data);
      }
      return next();
    });

    // Public role should never have find/findOne/create/update/delete
    // permissions on any content-type — every legitimate caller in this
    // stack authenticates with a scoped API token instead (see
    // corporate-portfolio-frontend's STRAPI_API_TOKEN for reads and
    // corporate-portfolio-backend's STRAPI_NEWSLETTER_TOKEN for the
    // newsletter signup write; the newsletter-subscriber route above is
    // create-only and reached via that token, never the Public role).
    // Those permissions otherwise only live in the database (set via the
    // admin UI's Settings > Roles screen), with nothing version-controlled
    // guaranteeing they stay locked down — a single accidental toggle in
    // the admin panel would silently expose reads (or worse, writes) on
    // every content-type. This checks the Public role's actual permissions
    // on every boot and removes any content-type CRUD permission it finds
    // enabled, logging loudly so the removal is visible in the server
    // logs rather than silently reversing an intentional (if unexpected)
    // change.
    const UNSAFE_PUBLIC_ACTION_RE = /^api::[^.]+\.[^.]+\.(find|findOne|create|update|delete)$/;
    try {
      const publicRole = await strapi.db
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });
      if (publicRole) {
        const publicPermissions = await strapi.db
          .query('plugin::users-permissions.permission')
          .findMany({ where: { role: publicRole.id } });
        const unsafePermissions = publicPermissions.filter((permission: { action: string }) =>
          UNSAFE_PUBLIC_ACTION_RE.test(permission.action),
        );
        if (unsafePermissions.length > 0) {
          strapi.log.warn(
            `[security] Public role had ${unsafePermissions.length} content-type permission(s) enabled — this should never happen since all legitimate API access goes through scoped tokens. Disabling: ${unsafePermissions
              .map((p: { action: string }) => p.action)
              .join(', ')}`,
          );
          await Promise.all(
            unsafePermissions.map((permission: { id: number }) =>
              strapi.db.query('plugin::users-permissions.permission').delete({ where: { id: permission.id } }),
            ),
          );
        }
      } else {
        strapi.log.warn('[security] Could not find the Public role to verify its permissions at boot.');
      }
    } catch (err) {
      // Never let this check crash the boot — the goal is loud visibility
      // into a misconfiguration, not a new way to take the site down.
      strapi.log.warn(`[security] Public role permission check failed: ${(err as Error).message}`);
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
        | 'api::reason.reason',
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
          // One bad entry (transient DB error, bad env at boot) shouldn't
          // silently leave the collection "non-empty" but incomplete —
          // logging and continuing at least seeds everything that can
          // succeed, and surfaces exactly what didn't.
          strapi.log.warn(`[seed] ${label}: failed to create an entry: ${(err as Error).message}`);
        }
      }
      strapi.log.info(`[seed] ${label}: created ${created}/${data.length}`);
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
  },
};
