import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, Award, CheckCircle, ArrowRight, ArrowLeft,
  Zap, Shield, Wrench, TrendingUp, Factory, Users,
} from 'lucide-react';
import { COMPANY, JASO_LOGO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'JASO — Distributeur Officiel Exclusif au Maroc | CASAGRUE',
  description:
    'JASO, leader mondial espagnol de grues à tour depuis 1963. CASAGRUE est distributeur officiel exclusif JASO au Maroc : location, vente, maintenance et pièces de rechange.',
  keywords: [
    'JASO Maroc',
    'distributeur JASO',
    'grue à tour JASO',
    'JASO J180PA',
    'JASO J235PA',
    'JASO J260',
    'location grue JASO',
    'vente grue JASO Maroc',
  ],
  openGraph: {
    title: 'JASO — Distributeur Officiel Exclusif au Maroc | CASAGRUE',
    description:
      'Leader mondial espagnol de grues à tour depuis 1963. CASAGRUE, distributeur officiel exclusif JASO au Maroc.',
    images: [{ url: JASO_LOGO }],
  },
};

const jasoProducts = [
  {
    id: 'jaso-j180pa',
    name: 'JASO J180PA',
    description: 'Grue à tour à montage automatisé. Solution idéale pour les chantiers résidentiels et commerciaux de taille moyenne.',
    specs: { 'Capacité max': '8 t', 'Portée max': '55 m', 'Hauteur max': '30.8 m', 'Puissance': '18.5 kW' },
    badge: 'Bestseller',
  },
  {
    id: 'jaso-j235pa',
    name: 'JASO J235PA',
    description: 'Grande capacité pour les chantiers industriels et les tours résidentielles en hauteur.',
    specs: { 'Capacité max': '10 t', 'Portée max': '60 m', 'Hauteur max': '40 m', 'Puissance': '22 kW' },
    badge: 'Premium',
  },
  {
    id: 'jaso-j260',
    name: 'JASO J260',
    description: 'Grue à flèche distributrice. Haute performance pour les chantiers exigeants avec portée maximale.',
    specs: { 'Capacité max': '12 t', 'Portée max': '65 m', 'Hauteur max': '50 m', 'Puissance': '30 kW' },
    badge: 'Haute Capacité',
  },
];

const capabilities = [
  'Grues à flèche distributrice',
  'Grues à montage automatisé',
  'Grues hammer-head',
  'Grues luffing',
  'Capacités 2 à 64 tonnes',
  'Portées jusqu\'à 80 mètres',
];

const advantages = [
  {
    icon: Shield,
    title: 'Qualité Certifiée',
    desc: 'Équipements fabriqués en Espagne selon les normes CE les plus strictes, avec contrôle qualité à chaque étape.',
  },
  {
    icon: Zap,
    title: 'Technologie Avancée',
    desc: 'Innovation continue depuis 1963 : montage automatisé, commandes électroniques de dernière génération.',
  },
  {
    icon: Wrench,
    title: 'Support Technique Complet',
    desc: 'Techniciens formés par JASO, pièces de rechange originales et assistance 24/7 partout au Maroc.',
  },
  {
    icon: TrendingUp,
    title: 'Fiabilité Prouvée',
    desc: 'Des milliers de grues JASO en service dans le monde entier, reconnues pour leur durabilité exceptionnelle.',
  },
];

const timeline = [
  { year: '1963', event: 'Fondation de JASO en Espagne par José Antonio Sánchez Ortega' },
  { year: '1980', event: 'Expansion internationale et reconnaissance mondiale' },
  { year: '2013', event: 'Partenariat distributeur officiel avec CASAGRUE au Maroc' },
  { year: '2024', event: 'Leader incontesté des grues à tour sur le marché marocain' },
];

export default function JasoBrandPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-40 overflow-hidden bg-brand-steel">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-brand-steel/60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux marques
            </Link>
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <Award className="w-4 h-4" />
              Distributeur Officiel Exclusif — Maroc
            </div>
            <div className="mb-8">
              <img
                src={JASO_LOGO}
                alt="JASO"
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert"
              />
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Grues à Tour <span className="text-brand-red">JASO</span> au Maroc
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Leader mondial espagnol dans la fabrication de grues à tour depuis 1963.
              CASAGRUE est votre partenaire exclusif JASO au Maroc pour la location, la vente
              et la maintenance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products?brand=JASO"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
              >
                Voir les Produits JASO
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-white/50 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo + Key Facts Strip */}
      <section className="py-16 bg-white dark:bg-brand-steel/20 border-b border-neutral-100 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={JASO_LOGO}
                alt="JASO"
                className="h-16 w-auto object-contain"
              />
            </div>
            {[
              { icon: Globe, label: 'Origine', value: 'Espagne' },
              { icon: Factory, label: 'Fondée en', value: '1963' },
              { icon: Users, label: 'Distributeur exclusif', value: 'CASAGRUE — Maroc' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wide">{item.label}</div>
                  <div className="font-display font-bold text-lg text-neutral-900 dark:text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About JASO */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                Espagne — Fondée en 1963
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mb-6">
                Un Leader Mondial de la Grue à Tour
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                <p>
                  JASO (José Antonio Sánchez Ortega) est l'un des leaders mondiaux dans la
                  fabrication de grues à tour. Fondée en 1963 en Espagne, JASO est reconnue
                  pour la qualité exceptionnelle, la fiabilité et la technologie avancée de
                  ses équipements.
                </p>
                <p>
                  En tant que distributeur officiel exclusif JASO au Maroc, CASAGRUE vous garantit
                  l'accès aux meilleurs produits avec le support technique complet du fabricant,
                  partout sur le territoire marocain.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="Grue à tour JASO"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="bg-neutral-50 dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 flex items-center gap-5">
                <img
                  src={JASO_LOGO}
                  alt="JASO"
                  className="h-12 w-auto object-contain shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                    Distributeur Officiel Exclusif
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    CASAGRUE est l'unique représentant agréé JASO au Maroc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Pourquoi JASO
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4">
              Des Équipements d'<span className="text-brand-red">Exception</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Plus de 60 ans d'expertise au service de la construction mondiale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:shadow-xl hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
                  <adv.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">
                  {adv.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4">
              L'Histoire de <span className="text-brand-red">JASO</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Six décennies d'innovation et d'excellence dans la construction.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/10 md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-red ring-4 ring-white dark:ring-brand-steel -translate-x-1/2 mt-2" />
                <div className="hidden md:block md:w-1/2" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="font-display font-black text-2xl text-brand-red mb-1">{item.year}</div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JASO Products */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Factory className="w-4 h-4" />
                Gamme JASO
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mb-2">
                Nos Grues à Tour <span className="text-brand-red">JASO</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Disponibles à la location et à la vente au Maroc.
              </p>
            </div>
            <img
              src={JASO_LOGO}
              alt="JASO"
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jasoProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-brand-steel-light rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-2xl hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-brand-steel flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <img
                      src={JASO_LOGO}
                      alt="JASO"
                      className="h-7 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display font-bold text-xl text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="bg-neutral-50 dark:bg-brand-steel/50 rounded-lg p-2.5">
                        <div className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wide">{key}</div>
                        <div className="font-bold text-sm text-neutral-900 dark:text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Demander un Devis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-steel text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <img
            src={JASO_LOGO}
            alt="JASO"
            className="h-16 w-auto object-contain brightness-0 invert mx-auto mb-6"
          />
          <h2 className="font-display font-black text-4xl mb-4">
            Besoin d'une Grue JASO ?
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Nos experts vous accompagnent dans le choix de l'équipement JASO le plus adapté à
            votre chantier, avec un devis personnalisé et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105"
            >
              Demander un Devis <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phone_primary}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Appeler un Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
