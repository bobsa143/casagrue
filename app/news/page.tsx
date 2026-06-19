import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Actualités — CASAGRUE',
  description: 'Les dernières actualités de CASAGRUE : nouvelles grues, projets, événements du secteur de la construction au Maroc.',
};

const posts = [
  {
    title: 'CASAGRUE renouvelle son partenariat distributeur exclusif JASO pour le Maroc',
    excerpt: 'CASAGRUE consolide son partenariat stratégique avec le fabricant espagnol JASO, renforçant ainsi sa position de leader sur le marché marocain des grues à tour.',
    category: 'Partenariats',
    date: '15 Novembre 2024',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: 'partenariat-jaso-maroc-2024',
  },
  {
    title: 'Nouveau chantier : livraison de 3 grues JASO J235PA à Casablanca',
    excerpt: 'CASAGRUE vient d\'installer trois grues JASO J235PA sur un grand complexe résidentiel à Casablanca, confirmant notre expertise en solutions multi-grues.',
    category: 'Projets',
    date: '10 Octobre 2024',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: 'livraison-jaso-casablanca-2024',
  },
  {
    title: 'Lancement de notre nouvelle gamme de plateformes grimpantes MCP',
    excerpt: 'CASAGRUE élargit son catalogue avec de nouvelles plateformes grimpantes haute capacité, idéales pour les travaux de façade et de ravalement.',
    category: 'Produits',
    date: '5 Septembre 2024',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: 'nouvelles-plateformes-mcp-2024',
  },
  {
    title: 'CASAGRUE présent au Salon Batimat Maroc 2024',
    excerpt: 'CASAGRUE participe au salon professionnel de la construction Batimat Maroc et présente ses dernières solutions de levage JASO et Zoomlion.',
    category: 'Événements',
    date: '20 Août 2024',
    image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: 'batimat-maroc-2024',
  },
  {
    title: 'Formation technique : 20 opérateurs certifiés JASO en 2024',
    excerpt: 'Notre programme de formation continue a permis à 20 opérateurs de grues JASO d\'obtenir leur certification internationale au Maroc.',
    category: 'Formation',
    date: '12 Juillet 2024',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: 'formation-operateurs-jaso-2024',
  },
  {
    title: 'Record : 300 projets réalisés depuis la création de CASAGRUE',
    excerpt: 'Nous célébrons le cap historique des 300 projets réalisés à travers tout le Maroc, une étape importante qui témoigne de la confiance de nos clients.',
    category: 'Entreprise',
    date: '1 Juin 2024',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    slug: '300-projets-casagrue-2024',
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Blog & Actualités
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Nos <span className="text-brand-red">Actualités</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Restez informé des dernières nouvelles de CASAGRUE et du secteur de la construction au Maroc.
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white dark:bg-brand-steel-light rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h2 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-brand-red text-sm font-semibold group-hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
