'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Bonjour CASAGRUE, je souhaite un devis pour mes besoins en levage.')}`;

  return (
    <section ref={ref} className="py-24 bg-brand-steel relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Contactez-nous
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Besoin d'un Devis
              <br />
              <span className="text-brand-red">Personnalisé ?</span>
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous
              proposer la solution de levage la plus adaptée à votre chantier.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phone_primary}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/20 group-hover:bg-brand-red flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wide">Téléphone</div>
                  <div className="text-white font-semibold">{COMPANY.phones[0]}</div>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/20 group-hover:bg-brand-red flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wide">Email</div>
                  <div className="text-white font-semibold">{COMPANY.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wide">Adresse</div>
                  <div className="text-white font-semibold text-sm">{COMPANY.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-brand-steel-light rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-6">
              Demander un Devis Rapide
            </h3>
            <QuoteForm />
            <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-white/10 text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3">
                Ou contactez-nous directement via
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-1.5 block">
            Nom complet *
          </label>
          <input
            type="text"
            required
            className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-1.5 block">
            Téléphone *
          </label>
          <input
            type="tel"
            required
            className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="+212..."
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-1.5 block">
          Email *
        </label>
        <input
          type="email"
          required
          className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
          placeholder="votre@email.ma"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-1.5 block">
          Service souhaité
        </label>
        <select className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors">
          <option value="">Sélectionner un service</option>
          <option>Location de Grue</option>
          <option>Vente de Grue</option>
          <option>Ascenseur de Chantier</option>
          <option>Plateforme Grimpante</option>
          <option>Maintenance</option>
          <option>Pièces de Rechange</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-1.5 block">
          Message
        </label>
        <textarea
          rows={3}
          className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
      >
        Envoyer la Demande
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
