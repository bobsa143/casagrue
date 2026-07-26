import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Award, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Marques — CASAGRUE',
  description: 'CASAGRUE est distributeur officiel JASO et Zoomlion au Maroc. Découvrez notre gamme de grues à tour et équipements de levage.',
};

export default function BrandsPage() {
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
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Distributeur Officiel
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
              Nos <span className="text-brand-red">Marques</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              CASAGRUE est le représentant officiel des plus grandes marques mondiales
              de grues à tour au Maroc.
            </p>
          </div>
        </div>
      </section>

      {/* JASO */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                Espagne — Fondée en 1963
              </div>
              <div className="font-display font-black text-6xl text-neutral-900 dark:text-white mb-4 tracking-wider">
                JASO
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                <Award className="w-4 h-4" />
                Distributeur Officiel Exclusif — Maroc
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                JASO (José Antonio Sánchez Ortega) est l'un des leaders mondiaux dans la
                fabrication de grues à tour. Fondée en 1963 en Espagne, JASO est reconnue
                pour la qualité exceptionnelle, la fiabilité et la technologie avancée de
                ses équipements.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                En tant que distributeur officiel exclusif JASO au Maroc, CASAGRUE vous garantit
                l'accès aux meilleurs produits avec le support technique complet du fabricant.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Grues à flèche distributrice',
                  'Grues à montage automatisé',
                  'Grues hammer-head',
                  'Grues luffing',
                  'Capacités 2 à 64 tonnes',
                  'Portées jusqu\'à 80 mètres',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
              >
                Voir les Produits JASO
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://ascenseurchantier.ma/wp-content/uploads/2024/05/High-Top.png"
                alt="JASO Tower Crane"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zoomlion */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                Chine — Fondée en 1992
              </div>
              <div className="font-display font-black text-5xl text-neutral-900 dark:text-white mb-4 tracking-wider">
                ZOOMLION
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                <Award className="w-4 h-4" />
                Distributeur Officiel — Maroc
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                Zoomlion Heavy Industry Science & Technology Co., fondée en 1992, est l'un des
                plus grands fabricants mondiaux d'équipements de construction. Avec une présence
                dans plus de 100 pays, Zoomlion est synonyme de robustesse et d'innovation.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                CASAGRUE distribue officiellement les grues à tour Zoomlion au Maroc, offrant
                un excellent rapport qualité-prix pour tous types de chantiers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Grues à flèche horizontale',
                  'Grues à montage automatique',
                  'Capacités 3 à 25 tonnes',
                  'Portées jusqu\'à 80 mètres',
                  'Technologie de pointe',
                  'Excellent rapport qualité-prix',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
              >
                Voir les Produits Zoomlion
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:order-1">
              <img
                src="https://ascenseurchantier.ma/wp-content/uploads/2026/01/Design-sans-titre-41.jpg"
                alt="Zoomlion Tower Crane"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
