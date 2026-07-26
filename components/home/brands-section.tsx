'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Globe, Zap } from 'lucide-react';
import { COMPANY, JASO_LOGO } from '@/lib/constants';

const brands = [
  {
    name: 'JASO',
    country: 'Espagne',
    description: 'Leader mondial en grues à tour de haute technologie. CASAGRUE est distributeur officiel exclusif JASO au Maroc.',
    logo: JASO_LOGO,
    color: 'from-blue-600 to-blue-800',
    features: ['Grues à flèche distributrice', 'Grues à montage rapide', 'Technologie espagnole premium', 'Disponibles à la location et vente'],
    href: '/brands/jaso',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  },
  {
    name: 'ZOOMLION',
    country: 'Chine',
    description: 'Géant mondial de l\'équipement de construction. Zoomlion propose une gamme complète de grues robustes et fiables.',
    logo: 'ZOOMLION',
    color: 'from-red-600 to-red-800',
    features: ['Grues à tour robustes', 'Rapport qualité-prix excellent', 'Large gamme de capacités', 'Support technique complet'],
    href: '/brands/zoomlion',
    image: 'https://ascenseurchantier.ma/wp-content/uploads/2026/01/Design-sans-titre-41.jpg',
  },
];

export default function BrandsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-brand-steel/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Distributeur Officiel
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Nos <span className="text-brand-red">Marques</span> Partenaires
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            CASAGRUE est distributeur officiel des plus grandes marques mondiales de grues à tour
            au Maroc, vous garantissant qualité et fiabilité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="group bg-neutral-50 dark:bg-brand-steel-light rounded-3xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-2xl hover:border-brand-red/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-70`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {brand.name === 'JASO' ? (
                        <img
                          src={JASO_LOGO}
                          alt="JASO"
                          className="h-14 w-auto object-contain brightness-0 invert mx-auto mb-1"
                        />
                      ) : (
                        <div className="font-display font-black text-4xl text-white tracking-wider mb-1">
                          {brand.logo}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-white/80 text-sm justify-center">
                        <Globe className="w-3.5 h-3.5" />
                        {brand.country}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                    Distributeur Officiel
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {brand.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={brand.href}
                    className="flex items-center gap-2 text-brand-red font-semibold text-sm hover:gap-3 transition-all"
                  >
                    En savoir plus sur {brand.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-brand-steel dark:bg-brand-steel-light rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-gold" />
              <span className="font-semibold">Stock disponible au Maroc</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-brand-gold" />
              <span className="font-semibold">Garantie constructeur</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-brand-gold" />
              <span className="font-semibold">Formation opérateurs incluse</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-brand-gold" />
              <span className="font-semibold">SAV nationwide Maroc</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
