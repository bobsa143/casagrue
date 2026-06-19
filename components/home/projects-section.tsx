'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Complexe Résidentiel Casablanca',
    category: 'Grue à Tour',
    location: 'Casablanca',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'JASO',
  },
  {
    title: 'Tour de Bureaux Rabat',
    category: 'Location Grue',
    location: 'Rabat',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'Zoomlion',
  },
  {
    title: 'Centre Commercial Marrakech',
    category: 'Ascenseur Chantier',
    location: 'Marrakech',
    image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'CASAGRUE',
  },
  {
    title: 'Infrastructure Tanger Med',
    category: 'Maintenance',
    location: 'Tanger',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'JASO',
  },
  {
    title: 'Projet Résidentiel Agadir',
    category: 'Plateforme',
    location: 'Agadir',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'CASAGRUE',
  },
  {
    title: 'Immeuble Grand Casablanca',
    category: 'Grue à Tour',
    location: 'Casablanca',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    brand: 'Zoomlion',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Références
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-neutral-900 dark:text-white">
              Nos <span className="text-brand-red">Projets</span> Réalisés
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
            >
              Voir tous les projets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group bg-white dark:bg-brand-steel-light rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                      {project.brand}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-xs opacity-75 mb-1">{project.location}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-neutral-900 dark:text-white group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
