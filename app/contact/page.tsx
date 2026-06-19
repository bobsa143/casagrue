import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import ContactFormClient from './contact-form-client';

export const metadata: Metadata = {
  title: 'Contact — CASAGRUE',
  description: 'Contactez CASAGRUE pour vos besoins en grues à tour, location ou vente. Casablanca, Maroc. Réponse sous 24h.',
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`;

  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Contactez-nous
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Parlons de <span className="text-brand-red">Votre Projet</span>
          </h1>
          <p className="text-white/70 text-xl">Notre équipe vous répond sous 24h.</p>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
                Informations de Contact
              </h2>

              {[
                {
                  icon: MapPin,
                  title: 'Notre Adresse',
                  content: COMPANY.address,
                  link: COMPANY.google_maps,
                  linkLabel: 'Voir sur Google Maps',
                },
                {
                  icon: Phone,
                  title: 'Téléphones',
                  content: COMPANY.phones.join('\n'),
                  link: `tel:${COMPANY.phone_primary}`,
                  linkLabel: 'Appeler maintenant',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: COMPANY.email,
                  link: `mailto:${COMPANY.email}`,
                  linkLabel: 'Envoyer un email',
                },
                {
                  icon: Clock,
                  title: 'Horaires',
                  content: `${COMPANY.hours.weekdays}\n${COMPANY.hours.saturday}\n${COMPANY.hours.sunday}`,
                  link: null,
                  linkLabel: null,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 bg-white dark:bg-brand-steel-light rounded-xl p-5 border border-neutral-100 dark:border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</div>
                      <div className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-pre-line leading-relaxed">{item.content}</div>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-brand-red text-sm font-semibold hover:underline mt-1 inline-block">
                          {item.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb857] text-white px-5 py-4 rounded-xl font-semibold transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Contacter sur WhatsApp
              </a>
            </div>

            {/* Contact Form + Map */}
            <div className="lg:col-span-2 space-y-8">
              <ContactFormClient />

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-neutral-200 dark:bg-brand-steel-light border border-neutral-100 dark:border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1!2d-7.655!3d33.534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMega+Business+Center+Sidi+Maarouf+Casablanca!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CASAGRUE Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
