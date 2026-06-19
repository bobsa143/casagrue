'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Construction, ShoppingCart, ArrowUpDown, Layers,
  Settings, Wrench, Package, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Construction,
    title: 'Location de Grues à Tour',
    description: 'Location courte et longue durée de grues à tour pour tous types de chantiers avec montage et maintenance inclus.',
    href: '/services/location-grues-tour',
    color: 'bg-red-50 dark:bg-red-900/20 text-brand-red',
  },
  {
    icon: ShoppingCart,
    title: 'Vente de Grues',
    description: 'Vente de grues à tour neuves et d\'occasion des meilleures marques mondiales JASO et Zoomlion.',
    href: '/services/vente-grues-tour',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600',
  },
  {
    icon: ArrowUpDown,
    title: 'Ascenseurs de Chantier',
    description: 'Monte-charges et ascenseurs de chantier pour le transport de matériaux et du personnel en hauteur.',
    href: '/services/ascenseurs-chantier',
    color: 'bg-green-50 dark:bg-green-900/20 text-green-600',
  },
  {
    icon: Layers,
    title: 'Plateformes Grimpantes',
    description: 'Plateformes élévatrices et de travail en hauteur pour les façades et travaux d\'altitude.',
    href: '/services/plateformes-grimpantes',
    color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600',
  },
  {
    icon: Settings,
    title: 'Installation & Montage',
    description: 'Service complet d\'installation, montage et démontage de grues par nos techniciens certifiés.',
    href: '/services/installation-montage',
    color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600',
  },
  {
    icon: Wrench,
    title: 'Maintenance & SAV',
    description: 'Maintenance préventive et corrective 24h/24, 7j/7 pour garantir la disponibilité de vos équipements.',
    href: '/services/maintenance-sav',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600',
  },
  {
    icon: Package,
    title: 'Pièces de Rechange',
    description: 'Fourniture de pièces détachées originales et compatibles pour toutes les marques de grues.',
    href: '/services/pieces-rechange',
    color: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nos Services
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Solutions Complètes de <span className="text-brand-red">Levage</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            De la location à la maintenance, CASAGRUE vous accompagne à chaque étape de votre
            chantier avec des solutions personnalisées.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:border-brand-red dark:hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/10 transition-all duration-300 h-full"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-brand-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
          >
            Tous nos Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
