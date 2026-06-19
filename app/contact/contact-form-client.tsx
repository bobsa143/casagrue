'use client';

import { Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await supabase.from('contact_messages').insert({
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      subject: data.get('subject'),
      message: data.get('message'),
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-brand-steel-light rounded-2xl p-8 border border-neutral-100 dark:border-white/10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2">Message Envoyé !</h3>
        <p className="text-neutral-600 dark:text-neutral-400">Notre équipe vous répondra dans les 24 heures.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-brand-steel-light rounded-2xl p-8 border border-neutral-100 dark:border-white/10">
      <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-6">
        Envoyer un Message
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Nom complet *</label>
            <input name="name" type="text" required className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Votre nom" />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Société</label>
            <input name="company" type="text" className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Votre société" />
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
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Sujet</label>
          <input name="subject" type="text" className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="Objet de votre message" />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 block">Message *</label>
          <textarea name="message" required rows={5} className="w-full bg-neutral-50 dark:bg-brand-steel border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Décrivez votre demande..." />
        </div>
        <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 text-white w-full py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25">
          <Send className="w-5 h-5" />
          {loading ? 'Envoi...' : 'Envoyer le Message'}
        </button>
      </form>
    </div>
  );
}
