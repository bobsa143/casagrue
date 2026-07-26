export const COMPANY = {
  name: 'CASAGRUE',
  tagline: 'Leader National en Solutions de Levage',
  tagline_en: 'National Leader in Lifting Solutions',
  tagline_ar: 'الرائد الوطني في حلول الرفع',
  description: 'Leader national de la location et de la vente de grues à tour, de plates-formes élévatrices, ascenseurs de chantier et de monte-charges au Maroc depuis 2011.',
  founded: 2011,
  address: 'Bd Zoulikha Naciri, Mega Business Center 2ème étage, Sidi Maarouf, Casablanca 20550, Maroc',
  city: 'Casablanca',
  country: 'Maroc',
  phones: ['+212 (0) 522 673 204', '+212 667 058 527', '+212 522 673 312'],
  phone_primary: '+212522673204',
  whatsapp: '+212661378063',
  email: 'contact@casagrue.ma',
  website: 'https://casagrue.ma',
  linkedin: 'https://www.linkedin.com/company/casa-grue',
  google_maps: 'https://maps.google.com/?q=Mega+Business+Center+Sidi+Maarouf+Casablanca',
  hours: {
    weekdays: 'Lundi - Vendredi: 9h00 - 17h00',
    saturday: 'Samedi: 9h00 - 13h00',
    sunday: 'Dimanche: Fermé',
  },
  stats: {
    years: 13,
    projects: 300,
    machines: 50,
    clients: 150,
  },
  brands: ['JASO', 'Zoomlion'],
};

export const COLORS = {
  red: '#C8102E',
  redDark: '#9B0D22',
  steel: '#1A2332',
  steelLight: '#243447',
  gold: '#D4A017',
};

export const JASO_LOGO = 'https://ascenseurchantier.ma/wp-content/uploads/2024/05/High-Top.png';

export const NAV_LINKS = [
  { label: 'Accueil', label_en: 'Home', href: '/' },
  { label: 'À Propos', label_en: 'About', href: '/about' },
  {
    label: 'Services',
    label_en: 'Services',
    href: '/services',
    children: [
      { label: 'Location de Grues', href: '/services/location-grues-tour' },
      { label: 'Vente de Grues', href: '/services/vente-grues-tour' },
      { label: 'Ascenseurs de Chantier', href: '/services/ascenseurs-chantier' },
      { label: 'Plateformes Grimpantes', href: '/services/plateformes-grimpantes' },
      { label: 'Installation & Montage', href: '/services/installation-montage' },
      { label: 'Maintenance & SAV', href: '/services/maintenance-sav' },
      { label: 'Pièces de Rechange', href: '/services/pieces-rechange' },
    ],
  },
  { label: 'Produits', label_en: 'Products', href: '/products' },
  { label: 'Projets', label_en: 'Projects', href: '/projects' },
  { label: 'Marques', label_en: 'Brands', href: '/brands' },
  { label: 'Actualités', label_en: 'News', href: '/news' },
  { label: 'Carrières', label_en: 'Careers', href: '/careers' },
  { label: 'Contact', label_en: 'Contact', href: '/contact' },
];

export const SERVICE_ICONS: Record<string, string> = {
  crane: '🏗️',
  'shopping-cart': '🛒',
  'arrow-up-down': '⬆️',
  layers: '📋',
  settings: '⚙️',
  wrench: '🔧',
  package: '📦',
};

export const PROJECT_CATEGORIES = [
  { value: 'all', label: 'Tous les Projets' },
  { value: 'grue-tour', label: 'Grues à Tour' },
  { value: 'ascenseur', label: 'Ascenseurs de Chantier' },
  { value: 'plateforme', label: 'Plateformes' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'installation', label: 'Installation' },
];
