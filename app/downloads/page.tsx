import type { Metadata } from 'next';
import { Download, FileText, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Téléchargements — CASAGRUE',
  description: 'Téléchargez les fiches techniques et catalogues CASAGRUE, JASO et Zoomlion.',
};

const downloads = [
  {
    title: 'Catalogue JASO 2024',
    description: 'Catalogue complet des grues à tour JASO disponibles chez CASAGRUE.',
    category: 'Catalogue',
    size: '12 MB',
    format: 'PDF',
    icon: BookOpen,
  },
  {
    title: 'Catalogue Zoomlion 2024',
    description: 'Gamme complète des grues à tour Zoomlion distribuées au Maroc.',
    category: 'Catalogue',
    size: '8 MB',
    format: 'PDF',
    icon: BookOpen,
  },
  {
    title: 'Fiche Technique JASO J180PA',
    description: 'Spécifications techniques complètes de la grue JASO J180PA.',
    category: 'Fiche Technique',
    size: '2 MB',
    format: 'PDF',
    icon: FileText,
  },
  {
    title: 'Fiche Technique JASO J235PA',
    description: 'Spécifications techniques complètes de la grue JASO J235PA.',
    category: 'Fiche Technique',
    size: '2 MB',
    format: 'PDF',
    icon: FileText,
  },
  {
    title: 'Fiche Technique Zoomlion TC5610',
    description: 'Données techniques de la grue à tour Zoomlion TC5610.',
    category: 'Fiche Technique',
    size: '1.5 MB',
    format: 'PDF',
    icon: FileText,
  },
  {
    title: 'Guide Ascenseurs de Chantier',
    description: 'Guide complet sur nos gammes d\'ascenseurs de chantier et monte-charges.',
    category: 'Guide',
    size: '4 MB',
    format: 'PDF',
    icon: BookOpen,
  },
  {
    title: 'Brochure Services CASAGRUE',
    description: 'Présentation complète de nos services : location, vente, maintenance.',
    category: 'Brochure',
    size: '6 MB',
    format: 'PDF',
    icon: FileText,
  },
  {
    title: 'Normes de Sécurité Grues',
    description: 'Réglementation marocaine et normes CE applicables aux grues à tour.',
    category: 'Réglementation',
    size: '3 MB',
    format: 'PDF',
    icon: FileText,
  },
];

const categories = ['Tous', 'Catalogue', 'Fiche Technique', 'Guide', 'Brochure', 'Réglementation'];

export default function DownloadsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Ressources
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            <span className="text-brand-red">Téléchargements</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Téléchargez nos catalogues, fiches techniques et documents de référence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat === 'Tous'
                    ? 'bg-brand-red text-white'
                    : 'bg-white dark:bg-brand-steel-light text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {downloads.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.title}
                  className="group bg-white dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:border-brand-red hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
                    <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-brand-red uppercase tracking-wide mb-2">
                    {doc.category}
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {doc.format} — {doc.size}
                    </span>
                    <button className="flex items-center gap-1.5 text-brand-red text-sm font-semibold hover:text-brand-red-dark transition-colors">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
