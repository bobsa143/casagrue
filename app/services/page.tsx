import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — CASAGRUE',
  description: 'Découvrez tous les services CASAGRUE : location de grues, vente, installation, maintenance et pièces de rechange au Maroc.',
};

const services = [
  {
    title: 'Location de Grues à Tour',
    description: 'Location courte et longue durée de grues à tour pour tous types de chantiers de construction au Maroc. Service complet incluant montage, démontage et maintenance périodique.',
    features: ['Montage et démontage professionnel', 'Maintenance préventive incluse', 'Opérateurs qualifiés disponibles', 'Assistance technique 24/7', 'Conformité aux normes de sécurité CE'],
    href: '/services/location-grues-tour',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-brand-red',
    category: 'Location',
  },
  {
    title: 'Vente de Grues à Tour',
    description: 'Vente de grues à tour neuves et d\'occasion des meilleures marques mondiales JASO et Zoomlion. Accompagnement complet de l\'achat à la mise en service.',
    features: ['Grues neuves et d\'occasion', 'Garantie constructeur', 'Formation des opérateurs', 'Service après-vente complet', 'Pièces de rechange disponibles'],
    href: '/services/vente-grues-tour',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-blue-600',
    category: 'Vente',
  },
  {
    title: 'Ascenseurs de Chantier',
    description: 'Location et vente d\'ascenseurs de chantier et monte-charges pour la montée de matériaux et du personnel. Idéal pour tous types de constructions en hauteur.',
    features: ['Montée de matériaux et personnes', 'Installation rapide', 'Haute capacité de charge', 'Sécurité maximale certifiée', 'Adapté à tous les chantiers'],
    href: '/services/ascenseurs-chantier',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-green-600',
    category: 'Location / Vente',
  },
  {
    title: 'Plateformes Grimpantes',
    description: 'Location et vente de plateformes élévatrices et de travail en hauteur pour les façades et travaux d\'altitude. Grande capacité et sécurité optimale.',
    features: ['Adaptées aux travaux de façade', 'Grande capacité de charge jusqu\'à 1500 kg', 'Montage modulaire flexible', 'Sécurité certifiée', 'Productivité maximale'],
    href: '/services/plateformes-grimpantes',
    image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-orange-600',
    category: 'Location / Vente',
  },
  {
    title: 'Installation & Montage',
    description: 'Service complet d\'installation, de montage et de démontage de grues à tour et équipements de levage par nos techniciens certifiés et expérimentés.',
    features: ['Techniciens certifiés et expérimentés', 'Respect strict des délais', 'Conformité aux normes de sécurité', 'Coordination complète de chantier', 'Rapport d\'intervention détaillé'],
    href: '/services/installation-montage',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-purple-600',
    category: 'Service',
  },
  {
    title: 'Maintenance & SAV',
    description: 'Service de maintenance préventive et corrective pour toutes les grues et équipements de levage. Intervention rapide 24h/24, 7j/7 sur tout le Maroc.',
    features: ['Maintenance préventive programmée', 'Intervention d\'urgence 24/7', 'Techniciens mobiles partout au Maroc', 'Stock de pièces de rechange', 'Rapports de maintenance détaillés'],
    href: '/services/maintenance-sav',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-yellow-600',
    category: 'Maintenance',
  },
  {
    title: 'Pièces de Rechange',
    description: 'Fourniture de pièces de rechange originales et compatibles pour toutes les marques de grues. Stock disponible localement au Maroc pour livraison rapide.',
    features: ['Pièces originales garanties', 'Livraison rapide sur tout le Maroc', 'Stock local à Casablanca', 'Compatible toutes marques', 'Assistance technique incluse'],
    href: '/services/pieces-rechange',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'bg-teal-600',
    category: 'Fourniture',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-brand-steel/60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Nos Services
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
              Solutions Complètes de <span className="text-brand-red">Levage</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              De la location à la maintenance, CASAGRUE vous propose un accompagnement complet
              pour tous vos besoins en équipements de levage au Maroc.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${service.color} opacity-30`} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="/quote"
                      className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
                    >
                      Demander un Devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-neutral-300 hover:border-brand-red hover:text-brand-red px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
