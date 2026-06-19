import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ — CASAGRUE',
  description: 'Questions fréquentes sur les services CASAGRUE : location de grues, vente, maintenance, installation au Maroc.',
};

const faq = [
  {
    category: 'Général',
    items: [
      {
        q: 'Qu\'est-ce que CASAGRUE ?',
        a: 'CASAGRUE est le leader national marocain de la location et vente de grues à tour, ascenseurs de chantier et plateformes élévatrices. Fondée en 2011 à Casablanca, la société est distributeur officiel des marques JASO (Espagne) et Zoomlion (Chine).',
      },
      {
        q: 'Dans quelles villes intervenez-vous ?',
        a: 'CASAGRUE intervient sur tout le territoire marocain depuis son siège à Casablanca. Nos équipes techniques se déplacent partout au Maroc : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir et toutes les autres villes.',
      },
      {
        q: 'Comment obtenir un devis ?',
        a: 'Vous pouvez demander un devis en remplissant notre formulaire en ligne sur la page Devis, en nous appelant au +212 (0) 522 673 204, ou en nous envoyant un email. Nous vous répondrons sous 24 heures ouvrées.',
      },
    ],
  },
  {
    category: 'Location',
    items: [
      {
        q: 'Proposez-vous la location longue durée ?',
        a: 'Oui, CASAGRUE propose des contrats de location courte durée (quelques semaines) et longue durée (plusieurs mois ou années). Les tarifs sont adaptés à la durée du contrat.',
      },
      {
        q: 'La maintenance est-elle incluse dans la location ?',
        a: 'Oui, tous nos contrats de location incluent une maintenance préventive régulière. Nous intervenons également en urgence 24h/24, 7j/7 en cas de panne.',
      },
      {
        q: 'Fournissez-vous des opérateurs de grue ?',
        a: 'Oui, sur demande nous pouvons fournir des opérateurs de grue qualifiés et certifiés. Cette option peut être incluse dans le contrat de location.',
      },
    ],
  },
  {
    category: 'Produits',
    items: [
      {
        q: 'Quelles marques de grues proposez-vous ?',
        a: 'CASAGRUE est distributeur officiel des marques JASO (Espagne) et Zoomlion (Chine), deux des plus grands fabricants mondiaux de grues à tour.',
      },
      {
        q: 'Proposez-vous des grues d\'occasion ?',
        a: 'Oui, en plus des grues neuves, nous proposons des grues à tour d\'occasion en excellent état, révisées et certifiées conformes aux normes de sécurité.',
      },
      {
        q: 'Quelle est la capacité maximale de vos grues ?',
        a: 'Notre gamme va de grues légères à montage automatisé (capacité 6-8 tonnes, portée 50-55m) jusqu\'aux grandes grues à flèche distributrice (capacité 12+ tonnes, portée 65+ mètres).',
      },
    ],
  },
  {
    category: 'Technique',
    items: [
      {
        q: 'Quel est le délai de montage d\'une grue ?',
        a: 'Le délai de montage varie selon le type de grue et les conditions du chantier. En général, comptez 1 à 3 jours pour une grue à montage automatisé, et 3 à 7 jours pour une grande grue à flèche distributrice.',
      },
      {
        q: 'Vos équipements sont-ils conformes aux normes de sécurité ?',
        a: 'Oui, tous nos équipements sont certifiés conformes aux normes CE européennes et aux réglementations marocaines en vigueur. Nos techniciens sont formés et certifiés.',
      },
      {
        q: 'Proposez-vous un service d\'urgence ?',
        a: 'Oui, notre service de maintenance est disponible 24h/24, 7j/7. En cas de panne ou d\'incident sur votre chantier, nos techniciens interviennent rapidement partout au Maroc.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            FAQ
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Questions <span className="text-brand-red">Fréquentes</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6 max-w-4xl">
          {faq.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="font-display font-black text-2xl text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-brand-red rounded-full inline-block" />
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-white dark:bg-brand-steel-light rounded-xl border border-neutral-100 dark:border-white/10 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors">
                      <span className="font-semibold text-neutral-900 dark:text-white pr-4">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/10 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-brand-steel rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="font-display font-bold text-2xl mb-3">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-neutral-400 mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+212522673204" className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Appeler maintenant
              </a>
              <a href="/contact" className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-colors">
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
