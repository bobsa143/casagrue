'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const services = [
  'Location de Grue à Tour',
  'Vente de Grue à Tour',
  'Ascenseur de Chantier',
  'Plateforme Grimpante',
  'Installation & Montage',
  'Maintenance & SAV',
  'Pièces de Rechange',
  'Autre',
];

export default function QuoteFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await supabase.from('quote_requests').insert({
      name: data.get('name'),
      company: data.get('company'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: data.get('service'),
      message: data.get('message'),
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-brand-steel-light rounded-2xl p-12 border border-neutral-100 dark:border-white/10 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-3">
          Demande Envoyée !
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Merci pour votre demande. Notre équipe vous contactera dans les 24 heures.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-brand-steel-light rounded-2xl p-8 border border-neutral-100 dark:border-white/10">
      <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-6">
        Formulaire de Demande de Devis
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Nom complet *</label>
            <input name="name" type="text" required className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Votre nom" />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Société</label>
            <input name="company" type="text" className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Nom de votre société" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Email *</label>
            <input name="email" type="email" required className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="votre@email.ma" />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Téléphone *</label>
            <input name="phone" type="tel" required className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="+212..." />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Service souhaité *</label>
          <select name="service" required className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors">
            <option value="">Sélectionner un service</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Ville du chantier</label>
            <input name="city" type="text" className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Ex: Casablanca" />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Durée estimée</label>
            <select name="duration" className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors">
              <option value="">Sélectionner</option>
              <option>Moins d&apos;1 mois</option>
              <option>1 à 3 mois</option>
              <option>3 à 6 mois</option>
              <option>6 à 12 mois</option>
              <option>Plus d&apos;1 an</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Description du projet</label>
          <textarea name="message" rows={5} className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Décrivez votre projet : type de construction, hauteur, charge à lever, etc." />
        </div>
        <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 text-white w-full py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25 text-base">
          {loading ? 'Envoi en cours...' : 'Envoyer la Demande de Devis'}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-xs">
          En soumettant ce formulaire, vous acceptez notre{' '}
          <a href="/privacy" className="text-brand-red hover:underline">politique de confidentialité</a>.
        </p>
      </form>
    </div>
  );
}
