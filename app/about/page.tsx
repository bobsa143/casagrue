import type { Metadata } from 'next';
import { Shield, Award, Globe, Users, Zap, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'À Propos — CASAGRUE',
  description: 'Découvrez CASAGRUE, le leader national marocain en grues à tour. Fondée en 2011, distributeur officiel JASO et Zoomlion.',
};

const timeline = [
  { year: '2011', title: 'Fondation', description: 'CASAGRUE est fondée à Casablanca avec une vision claire : devenir le leader marocain des solutions de levage.' },
  { year: '2013', title: 'Partenariat JASO', description: 'Obtention du partenariat distributeur officiel avec JASO, fabricant espagnol de grues à tour de renommée mondiale.' },
  { year: '2016', title: 'Expansion', description: 'Extension des services à l\'ensemble du territoire marocain et renforcement de l\'équipe technique.' },
  { year: '2018', title: 'Partenariat Zoomlion', description: 'Devenir distributeur officiel Zoomlion, renforçant l\'offre produits avec une gamme chinoise de haute qualité.' },
  { year: '2020', title: '200+ Projets', description: 'Franchissement du cap des 200 projets réalisés à travers le Maroc.' },
  { year: '2024', title: 'Leader National', description: 'CASAGRUE consolide sa position de leader national avec plus de 300 projets et 150+ clients fidèles.' },
];

const team = [
  { name: 'Hicham Dakkak', role: 'Directeur Général', initials: 'HD' },
];

export default function AboutPage() {
  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative py-32 bg-brand-steel overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-brand-steel/60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Notre Histoire
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              À Propos de <span className="text-brand-red">CASAGRUE</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Leader national marocain de la location et vente de grues à tour depuis 2011.
              Distributeur officiel JASO et Zoomlion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Notre Mission
              </div>
              <h2 className="font-display font-black text-4xl text-neutral-900 dark:text-white mb-6">
                Élever le Standard de l'Industrie de la Construction au Maroc
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                Fondée en <strong>{COMPANY.founded}</strong> à Casablanca par Hicham Dakkak,
                CASAGRUE s'est imposée comme le partenaire de référence pour tous les professionnels
                de la construction au Maroc.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Notre mission est de fournir des solutions de levage fiables, sécurisées et
                économiquement compétitives, accompagnées d'un service client exemplaire.
                Avec un capital social de <strong>3 000 000 MAD</strong> et une équipe de
                professionnels qualifiés, nous sommes en mesure de répondre aux exigences
                des plus grands chantiers marocains.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Fondée', value: '2011' },
                  { label: 'Capital', value: '3M MAD' },
                  { label: 'RC', value: '233147' },
                  { label: 'Siège', value: 'Casablanca' },
                ].map((item) => (
                  <div key={item.label} className="bg-neutral-50 dark:bg-brand-steel-light rounded-xl p-4">
                    <div className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-display font-bold text-xl text-neutral-900 dark:text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="CASAGRUE crane operations"
                className="rounded-3xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl text-neutral-900 dark:text-white mb-4">
              Nos <span className="text-brand-red">Valeurs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Sécurité', desc: 'Conformité aux normes CE et internationales. Sécurité opérateurs et chantier en priorité absolue.', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
              { icon: Award, title: 'Qualité', desc: 'Équipements certifiés des plus grandes marques mondiales. Zéro compromis sur la qualité.', color: 'text-brand-gold bg-yellow-50 dark:bg-yellow-900/20' },
              { icon: Zap, title: 'Réactivité', desc: 'Interventions 24h/24 en cas d\'urgence. Équipes mobiles sur tout le territoire marocain.', color: 'text-brand-red bg-red-50 dark:bg-red-900/20' },
              { icon: Users, title: 'Proximité', desc: 'Une équipe dédiée, un interlocuteur unique pour chaque client. Accompagnement personnalisé.', color: 'text-green-600 bg-green-50 dark:bg-green-900/20' },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl text-neutral-900 dark:text-white mb-4">
              Notre <span className="text-brand-red">Histoire</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/10 -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-brand-red border-4 border-white dark:border-brand-steel -translate-x-1/2 top-1" />
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <div className="bg-neutral-50 dark:bg-brand-steel-light rounded-2xl p-5 border border-neutral-100 dark:border-white/10">
                      <div className="text-brand-red font-display font-black text-2xl mb-1">{item.year}</div>
                      <div className="font-bold text-neutral-900 dark:text-white mb-2">{item.title}</div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-brand-steel">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <div className="font-bold mb-1">Adresse</div>
                <p className="text-neutral-400 text-sm">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <div className="font-bold mb-1">Téléphones</div>
                {COMPANY.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-neutral-400 hover:text-white text-sm transition-colors">{p}</a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <div className="font-bold mb-1">Email</div>
                <a href={`mailto:${COMPANY.email}`} className="text-neutral-400 hover:text-white text-sm transition-colors">{COMPANY.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
