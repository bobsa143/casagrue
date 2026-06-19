import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { notFound } from 'next/navigation';

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  advantages: { title: string; desc: string }[];
}> = {
  'location-grues-tour': {
    title: 'Location de Grues à Tour',
    description: 'Location courte et longue durée de grues à tour pour tous types de chantiers de construction au Maroc.',
    longDescription: 'CASAGRUE propose une gamme complète de grues à tour à la location, adaptées à tous types de chantiers : résidentiels, commerciaux, industriels. Avec nos partenariats exclusifs JASO et Zoomlion, nous vous garantissons des équipements fiables, sécurisés et performants.',
    features: ['Montage et démontage professionnel', 'Maintenance préventive incluse', 'Opérateurs qualifiés disponibles', 'Assistance technique 24/7', 'Conformité CE', 'Contrats flexibles courts et longs'],
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Flexibilité', desc: 'Contrats adaptés à la durée de votre chantier.' },
      { title: 'Économies', desc: 'Évitez l\'investissement initial, optimisez votre trésorerie.' },
      { title: 'Sécurité', desc: 'Maintenance et conformité réglementaire garanties.' },
      { title: 'Support', desc: 'Équipe technique disponible 24h/24 7j/7.' },
    ],
  },
  'vente-grues-tour': {
    title: 'Vente de Grues à Tour',
    description: 'Vente de grues à tour neuves et d\'occasion des meilleures marques mondiales JASO et Zoomlion.',
    longDescription: 'En tant que distributeur officiel JASO et Zoomlion au Maroc, CASAGRUE vous propose la vente de grues à tour neuves et d\'occasion. Nos experts vous accompagnent dans le choix de l\'équipement le plus adapté à vos besoins.',
    features: ['Grues neuves et d\'occasion', 'Garantie constructeur complète', 'Formation des opérateurs', 'Service après-vente', 'Pièces de rechange disponibles', 'Financement possible'],
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Investissement', desc: 'Patrimoine durable pour votre entreprise.' },
      { title: 'Marques Fiables', desc: 'JASO et Zoomlion, leaders mondiaux certifiés.' },
      { title: 'Accompagnement', desc: 'Expertise de nos conseillers pour le bon choix.' },
      { title: 'SAV', desc: 'Support technique et pièces de rechange au Maroc.' },
    ],
  },
  'ascenseurs-chantier': {
    title: 'Ascenseurs de Chantier',
    description: 'Location et vente d\'ascenseurs de chantier et monte-charges pour transport de matériaux et personnel.',
    longDescription: 'CASAGRUE propose une gamme complète d\'ascenseurs de chantier et de monte-charges pour le transport vertical de matériaux et du personnel sur vos chantiers de construction.',
    features: ['Montée de matériaux et personnes', 'Installation rapide', 'Haute capacité jusqu\'à 2000 kg', 'Hauteur jusqu\'à 200 m', 'Sécurité certifiée', 'Maintenance incluse en location'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Productivité', desc: 'Accélère le transport vertical sur le chantier.' },
      { title: 'Sécurité', desc: 'Réduit les accidents liés au transport manuel.' },
      { title: 'Capacité', desc: 'Charge utile jusqu\'à 2 tonnes par voyage.' },
      { title: 'Polyvalence', desc: 'Adapté à tous types de construction.' },
    ],
  },
  'plateformes-grimpantes': {
    title: 'Plateformes Grimpantes',
    description: 'Location et vente de plateformes élévatrices et de travail en hauteur pour façades.',
    longDescription: 'Nos plateformes grimpantes MCP offrent une solution optimale pour les travaux de façade, de ravalement et tous travaux en hauteur nécessitant une grande surface de travail.',
    features: ['Adaptées aux travaux de façade', 'Largeur jusqu\'à 24 m', 'Capacité 1500 kg', 'Montage modulaire', 'Sécurité certifiée CE', 'Productivité maximale'],
    image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Surface de Travail', desc: 'Grande plateforme permettant à plusieurs ouvriers de travailler simultanément.' },
      { title: 'Modularité', desc: 'S\'adapte à toutes les configurations de façade.' },
      { title: 'Efficacité', desc: 'Augmente considérablement la vitesse des travaux.' },
      { title: 'Sécurité', desc: 'Structure solide avec garde-corps certifiés.' },
    ],
  },
  'installation-montage': {
    title: 'Installation & Montage',
    description: 'Service complet d\'installation, de montage et de démontage de grues par nos techniciens certifiés.',
    longDescription: 'Notre équipe de techniciens certifiés prend en charge l\'intégralité des opérations de montage et démontage de vos grues à tour, dans le respect strict des normes de sécurité.',
    features: ['Techniciens certifiés', 'Respect des délais', 'Conformité sécurité', 'Coordination chantier', 'Rapport d\'intervention', 'Assistance post-installation'],
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Expertise', desc: 'Techniciens formés par les constructeurs JASO et Zoomlion.' },
      { title: 'Sécurité', desc: 'Toutes les opérations respectent les normes CE.' },
      { title: 'Rapidité', desc: 'Montage effectué dans les délais convenus.' },
      { title: 'Garantie', desc: 'Rapport d\'installation complet fourni.' },
    ],
  },
  'maintenance-sav': {
    title: 'Maintenance & SAV',
    description: 'Service de maintenance préventive et corrective pour toutes les grues. Intervention 24/7.',
    longDescription: 'CASAGRUE assure la maintenance préventive et corrective de vos équipements de levage, garantissant leur disponibilité maximale sur vos chantiers. Notre service d\'urgence intervient 24h/24 partout au Maroc.',
    features: ['Maintenance préventive programmée', 'Intervention urgence 24/7', 'Techniciens mobiles', 'Stock pièces de rechange', 'Rapports détaillés', 'Contrats personnalisés'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Disponibilité', desc: 'Minimise les temps d\'arrêt sur vos chantiers.' },
      { title: 'Réactivité', desc: 'Intervention d\'urgence en moins de 4h.' },
      { title: 'Prévention', desc: 'Maintenance planifiée évite les pannes.' },
      { title: 'Reporting', desc: 'Historique complet de maintenance disponible.' },
    ],
  },
  'pieces-rechange': {
    title: 'Pièces de Rechange',
    description: 'Fourniture de pièces de rechange originales et compatibles pour toutes les marques de grues.',
    longDescription: 'CASAGRUE dispose d\'un stock de pièces de rechange originales et compatibles pour les principales marques de grues à tour. Livraison rapide sur tout le Maroc.',
    features: ['Pièces originales garanties', 'Livraison rapide au Maroc', 'Stock local Casablanca', 'Toutes marques', 'Assistance technique', 'Prix compétitifs'],
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    advantages: [
      { title: 'Disponibilité', desc: 'Stock local évite les délais d\'importation.' },
      { title: 'Originalité', desc: 'Pièces originales garantissant la performance.' },
      { title: 'Expertise', desc: 'Conseil technique pour le bon choix de pièce.' },
      { title: 'Rapidité', desc: 'Livraison express partout au Maroc.' },
    ],
  },
};

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return { title: 'Service — CASAGRUE' };
  return {
    title: `${service.title} — CASAGRUE`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: PageProps) {
  const service = servicesData[params.slug];
  if (!service) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-steel/95 via-brand-steel/80 to-brand-steel/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Service
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-black text-3xl text-neutral-900 dark:text-white mb-4">
                  Description
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div>
                <h2 className="font-display font-black text-3xl text-neutral-900 dark:text-white mb-4">
                  Ce que nous proposons
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display font-black text-3xl text-neutral-900 dark:text-white mb-6">
                  Avantages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.advantages.map((adv) => (
                    <div key={adv.title} className="bg-neutral-50 dark:bg-brand-steel-light rounded-xl p-5 border border-neutral-100 dark:border-white/10">
                      <div className="font-display font-bold text-xl text-brand-red mb-2">{adv.title}</div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-brand-steel text-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-xl mb-4">Demander un Devis</h3>
                <p className="text-neutral-300 text-sm mb-6">
                  Contactez-nous pour obtenir un devis personnalisé pour ce service.
                </p>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-3 px-6 rounded-xl font-bold transition-colors w-full"
                >
                  Demander un Devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-neutral-50 dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Contact Direct</h3>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY.phone_primary}`} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors text-sm">
                    <Phone className="w-4 h-4 text-brand-red" />
                    {COMPANY.phones[0]}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors text-sm">
                    <Mail className="w-4 h-4 text-brand-red" />
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
