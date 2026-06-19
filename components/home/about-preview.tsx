'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const values = [
  { icon: Shield, title: 'Sécurité', description: 'Conformité aux normes internationales de sécurité sur tous nos équipements.' },
  { icon: Zap, title: 'Efficacité', description: 'Solutions rapides et fiables pour optimiser la productivité de votre chantier.' },
  { icon: Users, title: 'Expertise', description: 'Plus de 13 ans d\'expérience dans le levage industriel au Maroc.' },
  { icon: MapPin, title: 'Proximité', description: 'Présence et intervention sur tout le territoire marocain.' },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-brand-steel/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="CASAGRUE - Expertise en levage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-steel/50 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white rounded-2xl p-6 shadow-2xl">
              <div className="font-display font-black text-5xl">{COMPANY.stats.years}+</div>
              <div className="text-white/80 text-sm font-medium">Années<br />d'Expérience</div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-brand-steel-light rounded-2xl p-5 shadow-xl border border-neutral-100 dark:border-white/10">
              <div className="font-display font-black text-4xl text-brand-steel dark:text-white">{COMPANY.stats.projects}+</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-xs font-medium">Projets<br />Réalisés</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              À Propos de CASAGRUE
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-neutral-900 dark:text-white mb-6 leading-tight">
              Le Partenaire de
              <br />
              <span className="text-brand-red">Confiance</span> pour vos
              <br />
              Chantiers
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-4">
              Fondée en <strong className="text-neutral-900 dark:text-white">{COMPANY.founded}</strong> à Casablanca,
              CASAGRUE est le leader national marocain de la location et vente de grues à tour,
              ascenseurs de chantier et plateformes élévatrices.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Distributeur officiel exclusif des marques <strong className="text-neutral-900 dark:text-white">JASO</strong> (Espagne)
              et <strong className="text-neutral-900 dark:text-white">Zoomlion</strong> (Chine) au Maroc,
              nous garantissons à nos clients des équipements de haute qualité avec un support
              technique complet sur tout le territoire marocain.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm">{value.title}</div>
                      <div className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">{value.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
            >
              En Savoir Plus
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
