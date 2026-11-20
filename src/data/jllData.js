const JLL_BASE = 'https://www.jll.com';

export const jllUrl = (path) => (path.startsWith('http') ? path : `${JLL_BASE}${path}`);

export const PRIMARY_NAV_ITEMS = ['Properties', 'Services', 'Technology', 'People', 'Insights', 'Industries'];

export const MEGA_MENUS = {
  Properties: {
    type: 'columns',
    columns: [
      {
        title: 'Property search',
        description:
          'Commercial properties for sale or lease that fit your location and needs, including retail, office, and industrial spaces.',
        links: [
          { label: 'Investment sales', href: 'https://invest.jll.com/in/en' },
          { label: 'Commercial listings', href: 'https://property.jll.co.in/' },
          { label: 'Residential listings', href: 'https://www.jllhomes.co.in/' },
        ],
      },
      {
        title: 'Advising',
        description:
          'Expert guidance to help you find the ideal space and negotiate optimal terms for your business.',
        links: [
          { label: 'Location strategy', href: jllUrl('/en-in/services/leasing-for-tenants/location-strategy') },
          { label: 'Tenant representation', href: jllUrl('/en-in/services/leasing-for-tenants') },
        ],
      },
    ],
    footerText: 'Properties for sale or lease that fit your strategy, whether investing or occupying.',
    footerLinks: [],
  },
  Services: {
    type: 'columns',
    columns: [
      {
        title: 'Capital markets',
        titleHref: jllUrl('/en-in/services/capital-markets'),
        description: 'Investment sales, advisory, and financing for all commercial property types.',
        links: [
          { label: 'Investing', href: jllUrl('/en-in/services/investing') },
          { label: 'Financing', href: jllUrl('/en-in/services/financing') },
          { label: 'Value and risk', href: jllUrl('/en-in/services/value-risk') },
        ],
      },
      {
        title: 'Leasing',
        titleHref: jllUrl('/en-in/services/leasing'),
        description:
          "Strategic leasing solutions to elevate your property's appeal, attract quality tenants and maximize value.",
        links: [
          { label: 'Leasing for owners', href: jllUrl('/en-in/services/leasing-for-owners') },
          { label: 'Leasing for tenants', href: jllUrl('/en-in/services/leasing-for-tenants') },
        ],
      },
      {
        title: 'Operations and management',
        titleHref: jllUrl('/en-in/services/operations-management'),
        description:
          'End-to-end property services optimizing asset value through expert operations and strategic management.',
        links: [
          { label: 'Portfolio management', href: jllUrl('/en-in/services/portfolio-management') },
          { label: 'Facilities management', href: jllUrl('/en-in/services/facilities-management') },
          { label: 'Property management', href: jllUrl('/en-in/services/property-management') },
        ],
      },
      {
        title: 'Strategy and design',
        titleHref: jllUrl('/en-in/services/strategy-design'),
        description:
          'Human-centered workplace and retail environments that optimize savings and deliver exceptional results.',
        links: [
          { label: 'Project management and design', href: jllUrl('/en-in/services/project-management') },
          { label: 'Occupancy and space planning', href: jllUrl('/en-in/services/occupancy-space-planning') },
          { label: 'Experience services', href: jllUrl('/en-in/services/experience-services') },
        ],
      },
    ],
    footerText: 'Comprehensive real estate solutions, from investment and leasing to facilities and construction.',
    footerLinks: [
      { label: 'All services', href: jllUrl('/en-in/services') },
      { label: 'Consulting services', href: jllUrl('/en-in/services/consulting') },
      { label: 'Technology solutions', href: jllUrl('/en-in/services/technology') },
      { label: 'Sustainability strategies', href: jllUrl('/en-in/services/sustainability') },
    ],
  },
  Technology: {
    type: 'tech',
    mainTitle: 'Commercial real estate technology solutions',
    items: [
      {
        title: 'Asset Beacon',
        description:
          'Centralize asset-level data in one hub to streamline decision-making and maximize property performance across portfolios.',
        href: jllUrl('/en-in/products/asset-beacon'),
      },
      {
        title: 'Azara',
        description:
          'Integrate multi-system data to deliver comprehensive analytics and insights for multi-function commercial real estate organizations.',
        href: jllUrl('/en-in/products/azara'),
      },
      {
        title: 'Corrigo',
        description: 'Streamline work order management, asset operations, and vendor coordination at scale.',
        href: jllUrl('/en-in/products/corrigo'),
      },
      {
        title: 'Blackbird',
        description:
          'See the world of real estate differently with a digital co-pilot that navigates global markets virtually, enhanced with AI powered by SANSONS Falcon, empowering confident, informed location decisions that propel your business forward.',
        href: jllUrl('/en-in/products/blackbird'),
      },
      {
        title: 'Technology managed services',
        description:
          'Advisory, implementation, and management connecting real estate strategy with enterprise-grade systems and AI-ready solutions.',
        href: jllUrl('/en-in/products/managed-technology'),
      },
    ],
    innovations: {
      sectionTitle: 'Innovations',
      title: 'SANSONS Falcon AI',
      description:
        'Our platform integrates premium CRE data with advanced AI to power intelligent applications that deliver unmatched clarity for clients and teams.',
      href: jllUrl('/en-in/services/technology/artificial-intelligence'),
    },
    footerText:
      'Technology solutions and digital platforms for everything from portfolio analytics and building operations to market intelligence and automation.',
    footerLinks: [
      { label: 'All products', href: jllUrl('/en-in/products') },
      { label: 'Technology solutions', href: jllUrl('/en-in/services/technology') },
    ],
  },
  People: {
    type: 'listGrid',
    links: [
      { label: 'Leadership', href: jllUrl('/en-in/about-jll/leadership') },
      { label: 'Search all real estate experts', href: jllUrl('/en-in/people') },
      { label: 'Leasing and location brokers', href: jllUrl('/en-in/people.html?services=Leasing') },
      { label: 'Investment brokers and advisors', href: jllUrl('/en-in/people.html?services=Capital%20markets') },
      { label: 'Strategy, design, and construction advisors', href: jllUrl('/en-in/people.html?services=Strategy%20and%20design') },
      { label: 'Property and facility managers', href: jllUrl('/en-in/people.html?services=Property%20management') },
      { label: 'Value and risk advisors', href: jllUrl('/en-in/people.html?services=Value+and+risk+advisory') },
    ],
    footerText:
      'Industry experts ready to tackle your commercial real estate challenges across all aspects of the business.',
    footerLinks: [],
  },
  Insights: {
    type: 'columns',
    columns: [
      {
        title: 'Topics',
        links: [
          { label: 'View all insights', href: jllUrl('/en-in/insights') },
          { label: 'Artificial intelligence', href: jllUrl('/en-in/insights/artificial-intelligence') },
          { label: 'Capital flows', href: jllUrl('/en-in/insights/capital-flows') },
          { label: 'Cities', href: jllUrl('/en-in/insights/cities') },
          { label: 'Future of work', href: jllUrl('/en-in/insights/future-work') },
          { label: 'Sustainability', href: jllUrl('/en-in/insights/sustainability') },
          { label: 'Talent acquisition', href: jllUrl('/en-in/insights/talent-acquisition') },
        ],
      },
      {
        title: 'Series',
        links: [
          {
            label: 'Market dynamics',
            href: jllUrl('/en-in/insights/market-dynamics?sort_by_relevance=date&series=Market+dynamics'),
          },
          {
            label: 'Perspectives',
            href: jllUrl('/en-in/insights/market-perspectives?sort_by_relevance=date&series=Perspectives'),
          },
          {
            label: 'Outlook',
            href: jllUrl('/en-in/insights/market-outlook?sort_by_relevance=date&series=Outlook'),
          },
          {
            label: 'Podcasts',
            href: jllUrl('/en-in/insights/podcasts?sort_by_relevance=date&series=Podcast+series'),
          },
        ],
      },
    ],
    footerText:
      'In-depth research and analysis on market trends, performance, and forecasts delivered through reports, articles, webinars, and more.',
    footerLinks: [
      { label: 'Explore all research and insights', href: jllUrl('/en-in/insights') },
      {
        label: 'View client stories',
        href: jllUrl('/en-in/client-stories?sort_by_relevance=date&contentType=Client+story'),
      },
    ],
  },
  Industries: {
    type: 'listGrid',
    links: [
      { label: 'Aviation', href: jllUrl('/en-in/industries/aviation') },
      { label: 'Data centres', href: jllUrl('/en-in/industries/data-centres') },
      { label: 'Education', href: jllUrl('/en-in/industries/education') },
      { label: 'Financial services', href: jllUrl('/en-in/industries/financial-services') },
      { label: 'Global Capability Centres', href: jllUrl('/en-in/property-types/global-capability-centres') },
      { label: 'Government', href: jllUrl('/en-in/industries/government') },
      { label: 'Healthcare', href: jllUrl('/en-in/industries/healthcare') },
      { label: 'Hotels and hospitality', href: jllUrl('/en-in/property-types/hotels-hospitality') },
      { label: 'Industrial and logistics', href: jllUrl('/en-in/property-types/industrial-logistics') },
      { label: 'Land', href: jllUrl('/en-in/property-types/land') },
      { label: 'Life sciences', href: jllUrl('/en-in/industries/life-sciences') },
      { label: 'Manufacturing', href: jllUrl('/en-in/industries/manufacturing') },
      { label: 'Office', href: jllUrl('/en-in/property-types/office') },
      { label: 'Retail', href: jllUrl('/en-in/property-types/retail') },
      { label: 'Technology', href: jllUrl('/en-in/industries/technology') },
    ],
    footerText: 'Data-driven real estate solutions and expertise for every sector and vertical.',
    footerLinks: [
      { label: 'Explore industries', href: jllUrl('/en-in/industries') },
      { label: 'Explore property types', href: jllUrl('/en-in/property-types') },
    ],
  },
};

export const EXPLORE_MENU_LINKS = [
  { label: 'About SANSONS', href: jllUrl('/en-in/about-jll'), external: false },
  {
    label: 'Client stories',
    href: jllUrl('/en-in/client-stories?sort_by_relevance=date&contentType=Client+story'),
    external: false,
  },
  { label: 'Careers', href: jllUrl('/en-in/careers'), external: false },
  { label: 'News', href: jllUrl('/en-in/newsroom'), external: false },
  { label: 'Investor relations', href: 'https://ir.jll.com/overview/default.aspx', external: true },
];

export const SPOTLIGHT_SLIDES = [
  {
    title: 'Find, design and manage your GCC in India',
    ctaLabel: 'Read more',
    href: jllUrl(
      '/en-in/property-types/global-capability-centres.html?utm_source=subbanner&utm_medium=referral&utm_campaign=ap-in-bnd-cp-0326&utm_content=gcc-banner'
    ),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-find-design-and-manage-your-gcc-in-india-carousel-1?qlt=85&wid=1600&dpr=off&fit=constrain,0&fmt=webp',
    alt: 'Modern glass commercial building facade reflecting trees and sky',
  },
  {
    title: 'Global Real Estate Perspective, November 2026',
    ctaLabel: 'Explore more',
    href: jllUrl('/en-in/insights/market-perspectives/global'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-global-real-estate-perspective-november-2026?qlt=85&wid=1600&dpr=off&fit=constrain,0&fmt=webp',
    alt: 'Global Real Estate Perspective visual',
  },
  {
    title: 'Turn your workspace into a strategic advantage',
    ctaLabel: 'Get started',
    href: jllUrl(
      '/en-in/landing-page/india-office-leasing.html?utm_source=subbanner&utm_medium=referral&utm_campaign=ap-in-bnd-cp-0326&utm_content=office-banner'
    ),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-turn-your-workspace-into-a-strategic-advantage-carousel-2?qlt=85&wid=1600&dpr=off&fit=constrain,0&fmt=webp',
    alt: 'Turn your workspace into a strategic advantage visual',
  },
  {
    title: 'Build your dream project on time, on budget',
    ctaLabel: 'Contact us',
    href: jllUrl(
      '/en-in/landing-page/project-management.html?utm_source=subbanner&utm_medium=referral&utm_campaign=ap-in-bnd-cp-0326&utm_content=pds-banner'
    ),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-build-your-dream-project-on-time-on-budget-carousel-4?qlt=85&wid=1600&dpr=off&fit=constrain,0&fmt=webp',
    alt: 'Build your dream project on time, on budget visual',
  },
];

export const EXPLORE_BRIGHTER_WAY = {
  title: 'Explore a brighter way',
  description:
    'From our exclusive industry insights and listed properties, to our inclusive culture and exciting career opportunities – learn more about the SANSONS way.',
  panels: [
    {
      id: 'insights',
      title: 'Our latest insights',
      description: 'Explore the latest real estate trends and research',
      tiles: [
        {
          eyebrow: 'Insight',
          title: 'Three actions to drive lasting ROI in the next phase of AI adoption',
          description: 'Global real estate investor AI adoption survey 2026',
          href: jllUrl('/en-in/insights/global-real-estate-investor-ai-survey'),
          ariaLabel: 'Read the research',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-global-real-estate-investor-aI-survey?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'Insight',
          title: 'Real estate’s next shift is physical AI',
          description: 'A roadmap for robot-ready facilities management to self-improving assets',
          href: jllUrl('/en-in/insights/real-estates-next-shift-is-physical-ai'),
          ariaLabel: 'Read the research',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-real-estates-next-shift-is-physical-ai?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'Insight',
          title: 'Global real estate outlook mid-year update',
          description: 'Six forces, reconsidered',
          href: jllUrl('/en-in/insights/market-outlook/global-real-estate'),
          ariaLabel: 'Read the research',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-global-real-estate-outlook-2026?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
      ],
    },
    {
      id: 'careers',
      title: 'Careers at SANSONS',
      description: 'Explore our varied career paths and learn about rewarding careers at SANSONS',
      tiles: [
        {
          eyebrow: 'CAREER PATH',
          title: 'Find your early career pathway',
          description:
            'From leasing and property management to sustainability and financing, SANSONS offers endless opportunities to grow, learn and thrive. Join our inclusive, people-powered team and start building a meaningful career.',
          href: jllUrl('/en-in/careers/early-careers'),
          ariaLabel: 'Find your early career pathway',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-career-path-early-careers?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'CAREER PATH',
          title: 'Dive into brokerage, transaction management and sales',
          description:
            'Whether closing high-impact transactions or managing complex portfolios, SANSONS is the place to grow your expertise, build relationships, create value for clients and boost your career.',
          href: jllUrl('/en-in/careers/brokerage-sales'),
          ariaLabel: 'Dive into brokerage, transaction management and sales',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-career-brokerage-sales?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'CAREER PATH',
          title: 'Take a look at facilities and property management opportunities',
          description:
            'We’re at the forefront of property and facilities management, shaping the future of real estate for a better world. Discover how you can elevate spaces and build a rewarding career with SANSONS.',
          href: jllUrl('/en-in/careers/facilities-property-management'),
          ariaLabel: 'Take a look at facilities and property management opportunities',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-career-path-facilities-property-management?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
      ],
    },
    {
      id: 'solutions',
      title: 'Our real estate solutions',
      description: 'Explore how we deliver innovative, sustainable and future-proofed real estate solutions',
      tiles: [
        {
          eyebrow: 'SERVICES',
          title: 'Leasing',
          description:
            'Discover spaces, powered by market intelligence and technology, that fit your needs across office, retail, industrial and data centres.',
          href: jllUrl('/en-in/services/leasing'),
          ariaLabel: 'See what we do',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-hub-leasing?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'SERVICES',
          title: 'Strategy and design',
          description:
            'Create spaces that drive your business’ success. Our integrated approach aligns your workplace strategy with innovative design to enhance productivity, culture and employee experience.',
          href: jllUrl('/en-in/services/strategy-design'),
          ariaLabel: 'See what we do',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-hub-strategy-design?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'SERVICES',
          title: 'Capital Markets',
          description:
            'Navigate complex decisions across the investment lifecycle. Access strategic insights combining real estate and financial advisory services to drive better investment outcomes.',
          href: jllUrl('/en-in/services/capital-markets'),
          ariaLabel: 'See what we do',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-hub-capital-markets?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
      ],
    },
    {
      id: 'properties',
      title: 'Properties for sale or lease',
      description: 'Explore our featured properties',
      tiles: [
        {
          eyebrow: 'PROPERTY LISTINGS',
          title: 'Offices for lease',
          description:
            'Commercial workspaces available for rent to businesses seeking professional environments for their operations.',
          href: 'https://property.jll.co.in/search?tenureTypes=rent&propertyTypes=office&orderBy=desc&sortBy=dateModifiedAtSource',
          ariaLabel: 'Offices for lease',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-lens-government-facilities-technology?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'PROPERTY LISTINGS',
          title: 'Industrial space on lease',
          description:
            'Manufacturing, warehouse, and distribution facilities available for rent to businesses requiring large-scale operational areas.',
          href: 'https://property.jll.co.in/search?tenureTypes=rent&propertyTypes=industrial&orderBy=desc&sortBy=dateModifiedAtSource',
          ariaLabel: 'Industrial space on lease',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-offering-optimization?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
        {
          eyebrow: 'PROPERTY LISTINGS',
          title: 'Flex offices for lease',
          description:
            'Adaptable workspace solutions combining traditional office amenities with industrial features, offering short-term and customisable rental options.',
          href: 'https://property.jll.co.in/search?tenureTypes=rent&propertyTypes=coworking&orderBy=desc&sortBy=dateModifiedAtSource',
          ariaLabel: 'Flex offices for lease',
          imageUrl:
            'https://s7d1.scene7.com/is/image/joneslanglasalle/25-offering-banking?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
        },
      ],
    },
  ],
};

export const FEATURE_CARDS = [
  {
    id: 'ai',
    eyebrow: 'TECHNOLOGY AND AI',
    titleParts: [
      { text: 'AI advances the ', highlight: false },
      { text: 'future', highlight: true },
      { text: ' of real estate', highlight: false },
    ],
    description:
      'We’ve invested more in AI technology than any other real estate company – and it’s unlocking the potential of the world’s buildings and people.',
    ctaLabel: 'Discover our AI solutions',
    href: jllUrl('/en-in/services/technology/artificial-intelligence'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-offering-artificial-intelligence?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'Male entrepreneurs discussing while standing by desk in modern office seen through doorway',
    desktopLayout: 'image-left',
    mobileAlignRight: false,
  },
  {
    id: 'spaces',
    eyebrow: 'THE FUTURE OF SPACES',
    titleParts: [
      { text: 'Brighter places to ', highlight: false },
      { text: 'live and work', highlight: true },
    ],
    description:
      'We’re continually transforming traditional places into flexible, future-ready spaces for businesses and people to grow and thrive.',
    ctaLabel: 'Learn more about the future of spaces',
    href: jllUrl('/en-in/services/future-of-spaces'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-lens-future-of-spaces?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'Modern Office Or Library Interior With Wooden Staircase, Plants And Waiting Area',
    desktopLayout: 'image-right',
    mobileAlignRight: true,
  },
  {
    id: 'industries',
    eyebrow: 'Industries',
    titleParts: [
      { text: 'Illuminating ', highlight: false },
      { text: 'insights ', highlight: true },
      { text: 'for every sector and industry', highlight: false },
    ],
    description:
      'From open land to modern data centres and luxury hotels, we provide industry-leading expertise and local guidance at every turn.',
    ctaLabel: 'Explore our industry specialization',
    href: jllUrl('/en-in/industries'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-collection-industries?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'People working in Office building. London, England',
    desktopLayout: 'image-left',
    mobileAlignRight: false,
  },
];

export const MORE_TO_EXPLORE_SLIDES = [
  {
    eyebrow: 'News release',
    title: 'SANSONS lights up Mumbai’s iconic Bandra-Worli Sea Link, underscoring strategic India commitment',
    description: "India activation follows New York and London as the next chapter in SANSONS's global brand campaign",
    ctaLabel: 'Read the article',
    href: jllUrl('/en-in/newsroom/jll-lights-up-mumbai-iconic-bandra-worli-sea-link'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/26-newsroom-jll-lights-up-mumbai-iconic-bandra-worli-sea-link?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'Mumbai Bandra-Worli Sea Link illuminated with SANSONS branding',
  },
  {
    eyebrow: 'Insight',
    title: 'India office market 2030',
    description: 'A strategic roadmap for occupiers',
    ctaLabel: 'Read the article',
    href: jllUrl('/en-in/insights/a-strategic-roadmap-for-occupiers'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-a-strategic-roadmap-for-occupiers?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'India office market 2030',
  },
  {
    eyebrow: 'Insight',
    title: 'Maximising value through smart location choices for GCCs in India',
    description: "Insights to leverage India's potential for Global Capability Centres",
    ctaLabel: 'Read the article',
    href: jllUrl('/en-in/insights/maximising-value-through-smart-location-choices-for-gccs-in-india'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-maximising-value-through-smart-location-choices?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'Maximising value through smart location choices for GCCs in India',
  },
  {
    eyebrow: 'Insight',
    title: "India's REITs offer fivefold expansion potential",
    description:
      'The categorisation of REITs in India as equity instruments has opened doors for future index inclusion, potentially enhancing liquidity in these products.',
    ctaLabel: 'Read the article',
    href: jllUrl('/en-in/insights/indias-reits-offer-fivefold-expansion-potential'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/26-insights-indias-reits-offer-fivefold-expansion-potential?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: "India's REITs offer fivefold expansion potential",
  },
  {
    eyebrow: 'Insight',
    title: 'Corporate Real Estate Trends to Watch',
    description: 'Five trends that will define success in 2026',
    ctaLabel: 'Read the article',
    href: jllUrl('/en-in/insights/market-outlook/top-global-cre-trends'),
    imageUrl:
      'https://s7d1.scene7.com/is/image/joneslanglasalle/25-insights-top-global-cre-trends-2026?qlt=85&wid=1200&dpr=off&fit=constrain,0&fmt=webp',
    imageAlt: 'Corporate Real Estate Trends to Watch',
  },
];

export const CONTACT_BANNER = {
  title: 'Contact us today',
  href: jllUrl('/en-in/contact'),
  imageUrl:
    'https://s7d1.scene7.com/is/image/joneslanglasalle/25-global-promo?qlt=85&wid=1600&dpr=off&fit=constrain,0&fmt=webp',
  imageAlt: 'Curved wall surface with shadows creating abstract patterns and textures.',
};

export const FOOTER_BLURB =
  'There’s the conventional way of doing things. And then, there’s the SANSONS way. A more innovative, intelligent, and human way. Find out how you can see a brighter way with SANSONS.';

export const FOOTER_SECTIONS = [
  {
    title: 'How can we help?',
    links: [
      { label: 'Sustainability solutions', href: jllUrl('/en-in/services/sustainability') },
      { label: 'Hybrid workspace solutions', href: jllUrl('/en-in/services/future-of-spaces') },
      { label: 'Green building and leasing', href: jllUrl('/en-in/services/leasing/green') },
      { label: 'Portfolio management', href: jllUrl('/en-in/services/portfolio-management') },
      { label: 'Find and lease space', href: 'https://property.jll.co.in/', external: true },
      { label: 'Contact us', href: jllUrl('/en-in/contact') },
    ],
  },
  {
    title: 'Careers',
    links: [
      { label: 'Working at SANSONS', href: jllUrl('/en-in/careers') },
      { label: 'View job opportunities', href: 'https://jll.wd1.myworkdayjobs.com/jllcareers', external: true },
      { label: 'Meet our people', href: jllUrl('/en-in/careers/employee-stories') },
      {
        label: 'Join the talent network',
        href: 'https://jll.wd1.myworkdayjobs.com/jllcareers/job/Chicago-IL/JLL-s-Talent-Network_REQ445692?source=APPLICANT_SOURCE-6-118',
        external: true,
      },
    ],
  },
  {
    title: 'Corporate Information',
    links: [
      { label: 'About SANSONS', href: jllUrl('/en-in/about-jll') },
      { label: 'Newsroom', href: jllUrl('/en-in/newsroom') },
      { label: 'Sustainability at SANSONS', href: jllUrl('/en-in/about-jll/company-reporting') },
      { label: 'Investor relations', href: 'https://ir.jll.com/overview/default.aspx', external: true },
      { label: 'Locations', href: jllUrl('/en-in/locations') },
      { label: 'Ethics everywhere', href: jllUrl('/en-in/about-jll/company-reporting/ethics') },
      { label: 'Sourcing and procurement', href: jllUrl('/en-in/vendors') },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: 'Privacy statement', href: jllUrl('/en-in/privacy-statement') },
  { label: 'Terms of use', href: jllUrl('/en-in/terms-of-use') },
  { label: 'Cookies', href: jllUrl('/en-in/cookie-statement') },
  { label: 'Disclosure', href: jllUrl('/en-in/vulnerability-disclosure') },
  { label: 'Responsible AI statement', href: jllUrl('/en-in/responsible-ai-statement') },
  { label: 'Sitemap', href: jllUrl('/en-in/sitemap') },
];

export const COPYRIGHT_TEXT = 'Copyright 2026 SANSONS IP, Inc.';

export const COUNTRY_REGIONS = [
  {
    id: 'americas',
    title: 'Americas',
    countries: [
      { code: 'ar', title: 'Argentina', url: 'https://www.jll.com/en-us/locations/argentina-es' },
      { code: 'br', title: 'Brazil', url: 'https://www.jll.com/en-us/locations/brazil-pt' },
      { code: 'ca', title: 'Canada', url: 'https://www.jll.com/en-ca/' },
      { code: 'cl', title: 'Chile', url: 'https://www.jll.com/en-us/locations/chile-es' },
      { code: 'co', title: 'Colombia', url: 'https://www.jll.com/en-us/locations/colombia-es' },
      { code: 'cr', title: 'Costa Rica', url: 'https://www.jll.com/en-us/locations/costa-rica-es' },
      { code: 'mx', title: 'Mexico', url: 'https://www.jll.com/es-mx/' },
      { code: 'pe', title: 'Peru', url: 'https://www.jll.com/en-us/locations/peru-es' },
      { code: 'pr', title: 'Puerto Rico', url: 'https://www.jll.com/en-us/locations/puerto-rico' },
      { code: 'us', title: 'United States', url: 'https://www.jll.com/en-us/' },
    ],
  },
  {
    id: 'emea',
    title: 'EMEA',
    countries: [
      { code: 'za', title: 'Africa', url: 'https://www.jll.com/en-us/locations/africa' },
      { code: 'be', title: 'Belgium', url: 'https://www.jll.com/en-belux/' },
      { code: 'eg', title: 'Egypt', url: 'https://www.jll.com/en-us/locations/egypt' },
      { code: 'fi', title: 'Finland', url: 'https://www.jll.com/en-us/locations/finland-fi' },
      { code: 'fr', title: 'France', url: 'https://www.jll.com/fr-fr/' },
      { code: 'de', title: 'Germany', url: 'https://www.jll.com/de-de/' },
      { code: 'ie', title: 'Ireland', url: 'https://www.jll.com/en-us/locations/ireland' },
      { code: 'il', title: 'Israel', url: 'https://www.jll.com/en-us/locations/israel' },
      { code: 'it', title: 'Italy', url: 'https://www.jll.com/en-us/locations/italy-it' },
      { code: 'lu', title: 'Luxembourg', url: 'https://www.jll.com/en-belux/' },
      { code: 'nl', title: 'Netherlands', url: 'https://www.jll.com/nl-nl/' },
      { code: 'pl', title: 'Poland', url: 'https://www.jll.com/pl-pl/' },
      { code: 'pt', title: 'Portugal', url: 'https://www.jll.com/pt-pt/' },
      { code: 'sa', title: 'Saudi Arabia', url: 'https://www.jll.com/en-sa/' },
      { code: 'es', title: 'Spain', url: 'https://www.jll.com/es-es/' },
      { code: 'se', title: 'Sweden', url: 'https://www.jll.com/en-us/locations/sweden-sv' },
      { code: 'ch', title: 'Switzerland', url: 'https://www.jll.com/en-ch/' },
      { code: 'ae', title: 'United Arab Emirates', url: 'https://www.jll.com/en-ae/' },
      { code: 'gb', title: 'United Kingdom', url: 'https://www.jll.com/en-uk/' },
    ],
  },
  {
    id: 'asiapacific',
    title: 'Asia Pacific',
    countries: [
      { code: 'au', title: 'Australia', url: 'https://www.jll.com/en-au/' },
      { code: 'cn', title: 'China (Mainland)', url: 'https://www.jll.cn/zh-cn/' },
      { code: 'tw', title: 'Chinese Taipei (Taiwan)', url: 'https://www.jll.com/zh-tw/' },
      { code: 'hk', title: 'Hong Kong SAR, China', url: 'https://www.jll.com/zh-hk/' },
      { code: 'in', title: 'India', url: 'https://www.jll.com/en-in/', active: true },
      { code: 'id', title: 'Indonesia', url: 'https://www.jll.com/en-sea/' },
      { code: 'jp', title: 'Japan', url: 'https://www.jll.com/ja-jp/' },
      { code: 'kr', title: 'Korea', url: 'https://www.jll.com/ko-kr/' },
      { code: 'mo', title: 'Macau SAR, China', url: 'https://www.jll.com/zh-hk/locations/macau' },
      { code: 'my', title: 'Malaysia', url: 'https://www.jll.com/en-sea/' },
      { code: 'nz', title: 'New Zealand', url: 'https://www.jll.com/en-au/locations/new-zealand' },
      { code: 'ph', title: 'Philippines', url: 'https://www.jll.com/en-sea/' },
      { code: 'sg', title: 'Singapore', url: 'https://www.jll.com/en-sea/' },
      { code: 'th', title: 'Thailand', url: 'https://www.jll.com/en-sea/' },
      { code: 'vn', title: 'Vietnam', url: 'https://www.jll.com/en-sea/' },
    ],
  },
];
