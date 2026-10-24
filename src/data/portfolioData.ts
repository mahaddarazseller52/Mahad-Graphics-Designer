export interface PortfolioProject {
  id: string;
  title: string;
  category: 'logo' | 'social' | 'print' | 'packaging';
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  image: string;
  palette: string[];
  highlightMetric?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export const DESIGNER_INFO = {
  name: 'Muhammad Mahad Obaid',
  brandName: 'MMO GRAPHICS DESIGNER',
  jobTitle: 'Modern Graphic Designer & Brand Identity Specialist',
  tagline: 'Creative • Modern • Professional',
  bioShort: 'I’m a passionate graphic designer focused on creating clean, modern, and meaningful visual designs. I help brands communicate their ideas through creative and professional visuals.',
  bioFull: 'Hello! I’m Muhammad Mahad Obaid, a creative and detail-oriented graphic designer passionate about turning ideas into visually powerful designs. My mission is to translate complex concepts into compelling visual narratives that resonate with audiences.\n\nI specialize in branding, social media design, and print materials, focusing on clean, modern, and impactful visuals that help businesses grow and stand out in a crowded marketplace.',
  email: 'mahadobaid2005@gmail.com',
  phone: '+92 331 3935888',
  altPhone: '+92 344 2584404',
  location: 'Karachi, Pakistan',
  website: 'https://mmo-graphic-designer-portfolio.netlify.app/',
  websiteDisplay: 'mmo-graphic-designer-portfolio.netlify.app',
  experienceYears: '4+',
  projectsCompleted: '180+',
  clientSatisfaction: '99%',
  stats: [
    { label: 'Completed Projects', value: '180+' },
    { label: 'Happy Clients', value: '95+' },
    { label: 'Core Tools Mastered', value: '4' },
    { label: 'Avg. Initial Concept', value: '24-48h' },
  ],
  socials: [
    { name: 'Behance', url: 'https://www.behance.net/mahaddarazs', handle: '@mahaddarazs' },
    { name: 'Instagram', url: 'https://www.instagram.com/m.m.otrendy/', handle: '@m.m.otrendy' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-mahad-obaid-04b181407/', handle: 'in/mahad-obaid' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    iconName: 'PenTool',
    tagline: 'Creating distinctive & memorable brand marks',
    description: 'Bespoke logo marks, 3D metallic monograms, wordmarks, and calligraphic emblems tailored to reflect your brand personality.',
    deliverables: ['Vector Source Files (.AI, .EPS)', 'Transparent PNGs (Light & Dark)', 'SVG for Web', 'Color Palette & Usage Guide'],
    turnaround: '2–3 Business Days',
    popular: true,
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    iconName: 'Palette',
    tagline: 'Developing comprehensive visual systems',
    description: 'End-to-end corporate identity systems ensuring rock-solid visual consistency across typography, color systems, and brand voice.',
    deliverables: ['Brand Style Guide PDF', 'Typography Hierarchy', 'Iconography System', 'Stationery Templates'],
    turnaround: '5–7 Business Days',
    popular: true,
  },
  {
    id: 'social-media',
    title: 'Social Media Posts',
    iconName: 'Share2',
    tagline: 'Engaging graphics optimized for digital platforms',
    description: 'High-converting social media creatives for Instagram, Facebook, and LinkedIn that grab attention and drive conversions.',
    deliverables: ['1080x1080 Feed Posts', '1080x1920 Story / Reel Covers', 'Carousel Multi-Slides', 'Editable Canva/PSD Templates'],
    turnaround: '24–48 Hours',
    popular: true,
  },
  {
    id: 'business-cards',
    title: 'Business Cards & Stationery',
    iconName: 'CreditCard',
    tagline: 'Professional & impactful networking tools',
    description: 'Tactile, sophisticated business cards with luxury finish options (spot UV, gold foil, matte lamination) that leave lasting impressions.',
    deliverables: ['Print-Ready PDF with Bleeds', 'Editable Vector .AI File', '3D Photorealistic Mockups', 'Double-Sided Layout'],
    turnaround: '1–2 Business Days',
  },
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnails',
    iconName: 'Youtube',
    tagline: 'Clickable and engaging visuals to boost viewership',
    description: 'High-CTR YouTube thumbnail designs with custom cutouts, striking contrast, and legible typography built to maximize click-through rates.',
    deliverables: ['1280x720 HD Thumbnails', 'Compressed Under 2MB', 'High-Contrast Color Grading', 'Layered PSD Source File'],
    turnaround: '12–24 Hours',
  },
  {
    id: 'packaging-design',
    title: 'Packaging & Label Design',
    iconName: 'Package',
    tagline: 'Attractive and functional designs that pop off shelves',
    description: 'Striking retail box, bottle label, pouch, and can packaging artwork engineered according to die-lines and commercial print specifications.',
    deliverables: ['Accurate Die-Cut Vector Lines', 'CMYK Print-Ready Files', '3D Photorealistic Renderings', 'Barcode & Label Compliance'],
    turnaround: '4–6 Business Days',
  },
  {
    id: 'flyer-poster',
    title: 'Flyer & Poster Design',
    iconName: 'FileText',
    tagline: 'High-impact promotional marketing collateral',
    description: 'Eye-catching posters, event handbills, and retail sale flyers engineered for effortless readability and high promotional conversion.',
    deliverables: ['A4 / A5 / Letter Formats', 'High-DPI CMYK Print Files', 'Digital Web Version (RGB)', 'Source Layered Files'],
    turnaround: '2–3 Business Days',
  },
  {
    id: 'panaflex-banners',
    title: 'Panaflex & Large Displays',
    iconName: 'Layers',
    tagline: 'Large-scale banners for events & storefronts',
    description: 'Huge outdoor panaflex hoardings, exhibition stand roll-ups, and conference backdrops designed with crisp vector precision at scale.',
    deliverables: ['Large-Format TIFF/PDF', 'Rollup Banner Stand Templates', 'Color-Calibrated Output', 'Installation Layout Guide'],
    turnaround: '3–4 Business Days',
  },
];

export const SKILLS_SOFTWARE = [
  { name: 'Adobe Photoshop', role: 'Image manipulation, photo compositing & digital art', level: 95 },
  { name: 'Adobe Illustrator', role: 'Vector graphics, brand emblems & logo creation', level: 96 },
  { name: 'Figma', role: 'UI/UX layout, digital mockups & design systems', level: 88 },
  { name: 'Canva', role: 'Rapid prototyping & fast social media graphics', level: 92 },
];

export const CORE_PRINCIPLES = [
  {
    title: 'Typography Hierarchy',
    description: 'Crafting clear, balanced, and compelling text hierarchy that commands visual order and effortless reading flow.',
  },
  {
    title: 'Color Theory & Emotion',
    description: 'Harnessing emotional impact through harmonious color palettes that align with brand psychology and sector expectations.',
  },
  {
    title: 'Layout Design & Balance',
    description: 'Structuring visual balance, golden ratios, and negative space for optimal clarity, contrast, and cognitive retention.',
  },
  {
    title: 'Strategic Brand Alignment',
    description: 'Rooting every visual choice in real business objectives, ensuring design directly fuels client trust and market growth.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'logo-showcase-collection',
    title: 'High-Impact Brand Marks & Luxury Monograms',
    category: 'logo',
    categoryLabel: 'Logo Design',
    client: 'Diverse Enterprise & Boutique Clients',
    year: '2024–2025',
    summary: 'A signature collection of 3D metallic emblems, ornate calligraphic badges, and athletic monograms crafted for international and regional clients.',
    challenge: 'Clients in luxury hospitality, athletics, and corporate sectors required distinct visual identities that convey immediate prestige, dynamic motion, and cultural authenticity.',
    solution: 'Engineered custom 3D metallic beveling, heraldic crest silhouettes, fluid Arabic typography, and modern athletic geometric markups tested across dark and light backgrounds.',
    deliverables: ['Vector Monograms', '3D Metallic Wall Badge Renders', 'Favicon & Social Avatars', 'Brand Guidelines Sheet'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    image: '/src/assets/images/portfolio_logos_mockup_1791962062878.jpg',
    palette: ['#0A0A0A', '#E5B94E', '#C0C0C0', '#1E293B'],
    highlightMetric: '4 Unique Identities',
    featured: true,
  },
  {
    id: 'social-media-campaigns',
    title: 'High-Converting Food & Tech Social Campaigns',
    category: 'social',
    categoryLabel: 'Social Media',
    client: 'Gourmet Grill, Spice Club & Modern Tech Retailers',
    year: '2024–2025',
    summary: 'Engaging, high-contrast digital marketing flyers and Instagram promotional posts generating measurable customer acquisition.',
    challenge: 'Fast food and consumer gadget brands needed social media creatives that immediately stop the scroll in competitive feeds while clearly communicating time-sensitive discounts.',
    solution: 'Designed bold typography lockups, appetizing color-graded imagery, explosive flame and steam atmospherics, and high-visibility discount badges with direct call-to-action buttons.',
    deliverables: ['Instagram Feed Ads (1:1)', 'Story Promos (9:16)', 'Facebook Ad Creatives', 'Editable Canva Sets'],
    tools: ['Adobe Photoshop', 'Canva', 'Adobe Illustrator'],
    image: '/src/assets/images/portfolio_social_ads_1791962065987.jpg',
    palette: ['#E11D48', '#F59E0B', '#0F172A', '#06B6D4'],
    highlightMetric: '+64% Engagement',
    featured: true,
  },
  {
    id: 'arcus-print-stationery',
    title: 'Arcus Architects Luxury Print Collateral',
    category: 'print',
    categoryLabel: 'Print Materials',
    client: 'Arcus Architectural Studio & Corporate Partners',
    year: '2024',
    summary: 'Comprehensive tactile print materials including architectural tri-fold brochures, foil-embossed business cards, and marketing lookbooks.',
    challenge: 'Translating clean modern architectural principles into tangible physical print assets with tactile elegance and strict typography standards.',
    solution: 'Created minimalist grid-based layouts, curated paper textures, gold foil stamped typography on matte black cardstock, and full-bleed architectural photography.',
    deliverables: ['Tri-Fold Corporate Brochure', 'Spot-UV Business Cards', 'Portfolio Lookbook', 'Print-Ready PDF (CMYK)'],
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    image: '/src/assets/images/portfolio_print_cards_1791962064965.jpg',
    palette: ['#1C1917', '#D97706', '#38BDF8', '#F5F5F4'],
    highlightMetric: '300 DPI Print Ready',
    featured: true,
  },
  {
    id: 'studio-creative-visuals',
    title: 'MMO Creative Studio 3D Identity Space',
    category: 'packaging',
    categoryLabel: 'Brand Identity',
    client: 'MMO Graphics Designer Studio',
    year: '2025',
    summary: 'Experimental visual identity combining futuristic neon streaks, geometric depth, and brand typography for creative showcase.',
    challenge: 'Establishing a cutting-edge visual aesthetic for a modern graphic designer portfolio that highlights mastery of light, space, and modern aesthetics.',
    solution: 'Rendered dynamic illuminated light trails, deep midnight atmospheric backdrops, floating geometric typography, and UI workstation compositing.',
    deliverables: ['Hero Visual Key Art', 'Web Asset Suite', 'Social Banner Headers', 'Motion Graphics Backdrop'],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    image: '/src/assets/images/hero_design_showcase_1791962063465.jpg',
    palette: ['#030712', '#0284C7', '#F59E0B', '#38BDF8'],
    highlightMetric: '8K Master Render',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Muhammad is incredibly professional and his creativity truly shines through in his work. He transformed our vague ideas into a stunning brand identity!',
    author: 'Sarah Jenkins',
    role: 'Creative Director',
    company: 'Arcus Studio',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: 'High-quality work delivered consistently on time. His social media designs significantly boosted our engagement. A pleasure to work with!',
    author: 'Tariq Al-Mansoor',
    role: 'Marketing Lead',
    company: 'Gourmet Feast Group',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: 'Detail-oriented and responsive. He captured our vision perfectly for the packaging design. Highly recommended for any design needs!',
    author: 'David Sterling',
    role: 'Operations Head',
    company: 'FitPulse Athletics',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'What is your typical turnaround time for a logo or brand identity?',
    answer: 'Initial logo concepts are typically delivered within 24 to 48 hours. A comprehensive brand identity package usually takes 5 to 7 business days, including review cycles and adjustments.',
  },
  {
    question: 'What file formats will I receive upon project completion?',
    answer: 'You receive all industry-standard vector source files (.AI, .EPS, .SVG) as well as high-resolution raster files (.PNG with transparent background, .JPG in CMYK and RGB, and print-ready .PDF).',
  },
  {
    question: 'How do revisions work?',
    answer: 'All projects include up to 3 rounds of structured revisions to refine details like typography, color harmonies, and composition until you are 100% satisfied with the outcome.',
  },
  {
    question: 'Can you work on rush or urgent deadlines?',
    answer: 'Yes! Urgent turnaround (within 24 hours for social posts, flyers, or thumbnails) is available upon request depending on schedule availability.',
  },
];
