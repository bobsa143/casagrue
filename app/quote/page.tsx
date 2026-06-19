import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import QuoteFormClient from './quote-form-client';

export const metadata: Metadata = {
  title: 'Demander un Devis — CASAGRUE',
  description: 'Demandez un devis gratuit pour la location ou la vente de grues à tour, ascenseurs de chantier ou plateformes grimpantes au Maroc.',
};

const benefits = [
  'Réponse sous 24 heures ouvrées',
  'Devis gratuit et sans engagement',
  'Experts disponibles pour vous conseiller',
  'Solutions adaptées à votre budget',
];

export default function QuotePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel to-brand-steel/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Devis Gratuit
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Demander un <span className="text-brand-red">Devis</span>
          </h1>
          <p className="text-white/70 text-xl">Gratuit, sans engagement — réponse sous 24h.</p>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-6">
                Pourquoi Choisir CASAGRUE ?
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="bg-brand-steel dark:bg-brand-steel-light rounded-2xl p-6 text-white">
                <div className="font-display font-black text-4xl text-brand-red mb-1">300+</div>
                <div className="text-sm text-neutral-400">Projets réalisés au Maroc</div>
                <div className="font-display font-black text-4xl text-brand-red mt-4 mb-1">13+</div>
                <div className="text-sm text-neutral-400">Années d&apos;expérience</div>
                <div className="font-display font-black text-4xl text-brand-red mt-4 mb-1">24/7</div>
                <div className="text-sm text-neutral-400">Support technique disponible</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteFormClient />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
