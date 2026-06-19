import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projets — CASAGRUE',
  description: 'Portfolio des projets réalisés par CASAGRUE au Maroc. Grues à tour, ascenseurs de chantier, plateformes — plus de 300 références.',
};

const projects = [
  { title: 'Complexe Résidentiel Casablanca Nord', category: 'grue-tour', categoryLabel: 'Grue à Tour', location: 'Casablanca', year: 2024, brand: 'JASO J235PA', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Location d\'une grue JASO J235PA pour un complexe résidentiel de 12 étages.' },
  { title: 'Tour de Bureaux Quartier Hassan II', category: 'grue-tour', categoryLabel: 'Grue à Tour', location: 'Rabat', year: 2024, brand: 'JASO J260', image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Installation de 2 grues à tour JASO J260 pour une tour de bureaux R+18.' },
  { title: 'Centre Commercial Guéliz', category: 'ascenseur', categoryLabel: 'Ascenseur Chantier', location: 'Marrakech', year: 2023, brand: 'SC200', image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Fourniture et installation de 3 ascenseurs de chantier SC200.' },
  { title: 'Zone Industrielle Tanger Med', category: 'installation', categoryLabel: 'Installation', location: 'Tanger', year: 2023, brand: 'Zoomlion TC6518', image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Montage et mise en service de grues Zoomlion pour zone industrielle.' },
  { title: 'Résidence Balnéaire Agadir Bay', category: 'grue-tour', categoryLabel: 'Grue à Tour', location: 'Agadir', year: 2023, brand: 'JASO J180PA', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Location longue durée d\'une grue JASO J180PA pour résidence balnéaire.' },
  { title: 'Immeuble de Standing Casablanca', category: 'plateforme', categoryLabel: 'Plateforme', location: 'Casablanca', year: 2022, brand: 'MCP 1500', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Location de 2 plateformes grimpantes MCP 1500 pour travaux de façade.' },
  { title: 'Hôtel 5 Étoiles Marrakech', category: 'maintenance', categoryLabel: 'Maintenance', location: 'Marrakech', year: 2022, brand: 'JASO J235PA', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Maintenance préventive et corrective de 3 grues JASO sur chantier hôtelier.' },
  { title: 'Quartier Verdure Sala', category: 'grue-tour', categoryLabel: 'Grue à Tour', location: 'Salé', year: 2022, brand: 'Zoomlion TC5610', image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Location de 4 grues Zoomlion TC5610 pour programme de logement social.' },
  { title: 'Campus Universitaire Fès', category: 'ascenseur', categoryLabel: 'Ascenseur Chantier', location: 'Fès', year: 2021, brand: 'SC200', image: 'https://images.pexels.com/photos/1121099/pexels-photo-1121099.jpeg?auto=compress&cs=tinysrgb&w=600&q=80', description: 'Fourniture d\'ascenseurs de chantier pour un campus universitaire de 8 bâtiments.' },
];

const filterCategories = [
  { value: 'all', label: 'Tous les Projets' },
  { value: 'grue-tour', label: 'Grues à Tour' },
  { value: 'ascenseur', label: 'Ascenseurs' },
  { value: 'plateforme', label: 'Plateformes' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'installation', label: 'Installation' },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Portfolio
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
              Nos <span className="text-brand-red">Projets</span> Réalisés
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Plus de 300 projets réalisés à travers tout le Maroc depuis 2011.
              Chaque chantier est une référence de notre expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat.value === 'all'
                    ? 'bg-brand-red text-white'
                    : 'bg-white dark:bg-brand-steel-light text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-brand-steel-light rounded-2xl overflow-hidden border border-neutral-100 dark:border-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-steel dark:text-neutral-400 bg-neutral-50 dark:bg-brand-steel/50 px-3 py-1.5 rounded-full">
                    {project.brand}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/25"
            >
              Discuter de Votre Projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
