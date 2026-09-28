// Seed data for Strapi CMS collections mirroring initial frontend defaults.

export const companyInfo = {
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

export const productCategories = [
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

export const services = [
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

export const blogPosts = [
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

export const testimonials = [
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
export const offices = [
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

export const reasons = [
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

export const portfolioCategories = [
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
export const stats = [
  { label: 'Years of Experience', foundingYearForAutoCount: 2016, suffix: '+' },
  { label: 'Brands & Manufacturers', value: 15, suffix: '+' },
  { label: 'Projects Completed', value: 500, suffix: '+' },
];

export const clientLogos = Array.from({ length: 10 }, (_, i) => ({
  alt: `Client logo placeholder ${i + 1}`,
}));