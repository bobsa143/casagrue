'use client';

import Link from 'next/link';
import {
  Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram,
  Youtube, ArrowRight, ChevronRight
} from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const footerServices = [
  { label: 'Location de Grues à Tour', href: '/services/location-grues-tour' },
  { label: 'Vente de Grues', href: '/services/vente-grues-tour' },
  { label: 'Ascenseurs de Chantier', href: '/services/ascenseurs-chantier' },
  { label: 'Plateformes Grimpantes', href: '/services/plateformes-grimpantes' },
  { label: 'Installation & Montage', href: '/services/installation-montage' },
  { label: 'Maintenance & SAV', href: '/services/maintenance-sav' },
];

const footerLinks = [
  { label: 'À Propos', href: '/about' },
  { label: 'Nos Projets', href: '/projects' },
  { label: 'Nos Marques', href: '/brands' },
  { label: 'Actualités', href: '/news' },
  { label: 'Carrières', href: '/careers' },
  { label: 'Téléchargements', href: '/downloads' },
  { label: 'FAQ', href: '/faq' },
];

const legalLinks = [
  { label: 'Politique de Confidentialité', href: '/privacy' },
  { label: "Conditions d'Utilisation", href: '/terms' },
  { label: 'Mentions Légales', href: '/legal' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-steel text-white">
      {/* Newsletter Strip */}
      <div className="bg-brand-red">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">Restez Informé</h3>
              <p className="text-white/80 text-sm mt-1">
                Abonnez-vous à notre newsletter pour les dernières actualités et offres.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <img
                src="https://ascenseurchantier.ma/wp-content/uploads/2025/11/logo.png"
                alt="CASAGRUE Logo"
                className="h-12 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Leader national de la location et vente de grues à tour, ascenseurs de chantier et
              plateformes élévatrices au Maroc depuis 2011.
            </p>
            {/* Brands */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-bold text-white border border-white/20">
                JASO
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-bold text-white border border-white/20">
                ZOOMLION
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-red rounded-full inline-block" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 transition-colors group/link"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-red opacity-0 group-hover/link:opacity-100 -ml-1 transition-all group-hover/link:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-red rounded-full inline-block" />
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 transition-colors group/link"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-red opacity-0 group-hover/link:opacity-100 -ml-1 transition-all group-hover/link:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-red rounded-full inline-block" />
              Contactez-nous
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="text-neutral-400 text-sm leading-relaxed">{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((phone, i) => (
                <li key={i}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-red shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="text-neutral-400 text-sm">
                  <div>{COMPANY.hours.weekdays}</div>
                  <div>{COMPANY.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} CASAGRUE. Tous droits réservés. — RC: 233147 Casablanca
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  return (
    <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Votre adresse email"
        className="flex-1 md:w-72 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white"
      />
      <button
        type="submit"
        className="bg-white text-brand-red hover:bg-neutral-100 px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
      >
        S'abonner <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
