import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, Tag, Ruler, Zap } from 'lucide-react';
import { JASO_LOGO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Produits — CASAGRUE',
  description: 'Découvrez notre gamme de grues à tour JASO et Zoomlion, ascenseurs de chantier et plateformes grimpantes disponibles à la location et vente au Maroc.',
};

const categories = [
  { value: 'all', label: 'Tous les Produits' },
  { value: 'grue-tour', label: 'Grues à Tour' },
  { value: 'ascenseur-chantier', label: 'Ascenseurs de Chantier' },
  { value: 'plateforme', label: 'Plateformes' },
];

const products = [
  {
    id: 'jaso-j180pa',
    name: 'JASO J180PA',
    category: 'grue-tour',
    brand: 'JASO',
    description: 'Grue à tour à montage automatisé JASO J180PA. Solution idéale pour les chantiers résidentiels et commerciaux de taille moyenne.',
    specs: { 'Capacité max': '8 t', 'Portée max': '55 m', 'Hauteur max': '30.8 m', 'Puissance': '18.5 kW' },
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    badge: 'Bestseller',
    badgeColor: 'bg-brand-red',
    available: ['location', 'vente'],
  },
  {
    id: 'jaso-j235pa',
    name: 'JASO J235PA',
    category: 'grue-tour',
    brand: 'JASO',
    description: 'Grue à tour JASO J235PA — grande capacité pour les chantiers industriels et les tours résidentielles en hauteur.',
    specs: { 'Capacité max': '10 t', 'Portée max': '60 m', 'Hauteur max': '40 m', 'Puissance': '22 kW' },
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    badge: 'Premium',
    badgeColor: 'bg-brand-gold',
    available: ['location', 'vente'],
  },
  {
    id: 'jaso-j260',
    name: 'JASO J260',
    category: 'grue-tour',
    brand: 'JASO',
    description: 'Grue à flèche distributrice JASO J260. Haute performance pour les chantiers exigeants avec portée maximale.',
    specs: { 'Capacité max': '12 t', 'Portée max': '65 m', 'Hauteur max': '50 m', 'Puissance': '30 kW' },
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    badge: 'Haute Capacité',
    badgeColor: 'bg-blue-600',
    available: ['location', 'vente'],
  },
  {
    id: 'zoomlion-tc5610',
    name: 'Zoomlion TC5610',
    category: 'grue-tour',
    brand: 'Zoomlion',
    description: 'Grue à tour Zoomlion TC5610. Robuste, fiable et économique. Parfait rapport qualité-prix pour les chantiers marocains.',
    specs: { 'Capacité max': '6 t', 'Portée max': '56 m', 'Hauteur max': '35 m', 'Puissance': '18.5 kW' },
    image: 'https://ascenseurchantier.ma/wp-content/uploads/2026/01/Design-sans-titre-41.jpg',
    badge: 'Économique',
    badgeColor: 'bg-green-600',
    available: ['location', 'vente'],
  },
  {
    id: 'zoomlion-tc6518',
    name: 'Zoomlion TC6518',
    category: 'grue-tour',
    brand: 'Zoomlion',
    description: 'Grue à tour Zoomlion TC6518 avec une grande capacité de levage adaptée aux grands projets de construction.',
    specs: { 'Capacité max': '8 t', 'Portée max': '65 m', 'Hauteur max': '40 m', 'Puissance': '22 kW' },
    image: 'https://ascenseurchantier.ma/wp-content/uploads/2026/01/Design-sans-titre-41.jpg',
    badge: null,
    badgeColor: '',
    available: ['location', 'vente'],
  },
  {
    id: 'ascenseur-chantier-sc200',
    name: 'Ascenseur SC200',
    category: 'ascenseur-chantier',
    brand: 'CASAGRUE',
    description: 'Monte-charges de chantier SC200 pour transport de matériaux et du personnel jusqu\'à 200m de hauteur.',
    specs: { 'Capacité': '2000 kg', 'Vitesse': '38 m/min', 'Hauteur max': '200 m', 'Cabine': '3.2 × 1.5 m' },
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    badge: 'Location',
    badgeColor: 'bg-purple-600',
    available: ['location'],
  },
  {
    id: 'plateforme-mcp',
    name: 'Plateforme MCP 1500',
    category: 'plateforme',
    brand: 'CASAGRUE',
    description: 'Plateforme grimpante MCP 1500 pour travaux de façade. Grande largeur de travail et haute capacité de charge.',
    specs: { 'Capacité': '1500 kg', 'Largeur max': '24 m', 'Vitesse': '10 m/min', 'Puissance': '7.5 kW' },
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    badge: 'Location',
    badgeColor: 'bg-teal-600',
    available: ['location'],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Catalogue Produits
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
              Nos <span className="text-brand-red">Produits</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Grues à tour JASO et Zoomlion, ascenseurs de chantier et plateformes grimpantes
              disponibles à la location et à la vente au Maroc.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat.value === 'all'
                    ? 'bg-brand-red text-white'
                    : 'bg-white dark:bg-brand-steel-light text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-brand-steel-light rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-2xl hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    {product.brand === 'JASO' ? (
                      <Link
                        href="/brands/jaso"
                        className="block bg-white/90 backdrop-blur-sm rounded-md p-1.5 border border-white/40 hover:bg-white transition-colors"
                      >
                        <img
                          src={JASO_LOGO}
                          alt="JASO"
                          className="h-7 w-auto object-contain"
                        />
                      </Link>
                    ) : (
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                        {product.brand}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {product.available.map((a) => (
                      <span key={a} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded border border-white/30 capitalize">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="bg-neutral-50 dark:bg-brand-steel/50 rounded-lg p-2.5">
                        <div className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wide">{key}</div>
                        <div className="font-bold text-sm text-neutral-900 dark:text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/quote"
                      className="flex-1 bg-brand-red hover:bg-brand-red-dark text-white py-2.5 rounded-lg font-semibold text-sm text-center transition-colors"
                    >
                      Demander un Devis
                    </Link>
                    <button className="w-10 h-10 border border-neutral-200 dark:border-white/10 rounded-lg flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:border-brand-red hover:text-brand-red transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-steel text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-display font-black text-4xl mb-4">Vous ne trouvez pas votre modèle ?</h2>
          <p className="text-neutral-400 mb-8">Contactez nos experts pour un devis personnalisé selon vos besoins spécifiques.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
          >
            Contactez-nous <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
