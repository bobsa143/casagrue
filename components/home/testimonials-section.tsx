'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed Benali',
    role: 'Directeur de Chantier',
    company: 'Groupe Addoha',
    text: 'CASAGRUE nous a accompagnés sur plusieurs projets résidentiels à Casablanca. Leur sérieux, la qualité des équipements JASO et la réactivité du SAV sont remarquables.',
    rating: 5,
    avatar: 'MB',
  },
  {
    name: 'Karim Lahlou',
    role: 'Responsable Logistique',
    company: 'CIH Construction',
    text: 'Nous avons loué une grue Zoomlion via CASAGRUE pour notre chantier à Rabat. Installation rapide, équipe professionnelle et prix compétitifs. Je recommande vivement.',
    rating: 5,
    avatar: 'KL',
  },
  {
    name: 'Fatima Zahra Idrissi',
    role: 'Chef de Projet',
    company: 'Alliances Immobilier',
    text: 'Partenaire fiable depuis 2019. CASAGRUE comprend les exigences des grands chantiers et propose toujours une solution adaptée. Le service maintenance 24/7 est un vrai plus.',
    rating: 5,
    avatar: 'FZ',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-brand-steel/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Témoignages
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Ce que Disent <span className="text-brand-red">nos Clients</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-50 dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-brand-red/30" />
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white font-bold text-sm flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs">{t.role} — {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
