import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, ArrowRight, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carrières — CASAGRUE',
  description: 'Rejoignez l\'équipe CASAGRUE. Découvrez nos offres d\'emploi dans le secteur du levage et de la construction au Maroc.',
};

const jobs = [
  {
    title: 'Technicien de Maintenance Grues',
    department: 'Technique',
    location: 'Casablanca',
    type: 'CDI',
    description: 'Assurer la maintenance préventive et corrective des grues à tour JASO et Zoomlion sur les chantiers au Maroc.',
    requirements: ['BTS Mécanique/Électrotechnique', 'Expérience 2+ ans en maintenance industrielle', 'Permis de conduire B', 'Disponibilité pour déplacements'],
  },
  {
    title: 'Commercial B2B Équipements de Levage',
    department: 'Commercial',
    location: 'Casablanca',
    type: 'CDI',
    description: 'Développer notre portefeuille clients dans le secteur BTP et promouvoir nos solutions de levage JASO et Zoomlion.',
    requirements: ['BAC+3 Commercial/Ingénieur', 'Expérience vente B2B BTP', 'Connaissance du marché de la construction marocain', 'Permis de conduire B'],
  },
  {
    title: 'Opérateur de Grue à Tour Certifié',
    department: 'Opérations',
    location: 'Maroc (national)',
    type: 'CDI',
    description: 'Opérer nos grues à tour sur différents chantiers au Maroc avec les plus hauts standards de sécurité.',
    requirements: ['Certification opérateur grue à tour', 'Expérience 3+ ans', 'Respect des normes de sécurité', 'Mobilité nationale'],
  },
  {
    title: 'Ingénieur Méthodes & Installation',
    department: 'Technique',
    location: 'Casablanca',
    type: 'CDI',
    description: 'Planifier et superviser les opérations de montage et démontage de grues sur les chantiers marocains.',
    requirements: ['Diplôme d\'ingénieur Génie Civil/Mécanique', 'Expérience 3+ ans en installation grues', 'Maîtrise des normes de sécurité', 'Leadership'],
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 bg-brand-steel relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel via-brand-steel/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Carrières
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
            Rejoignez <span className="text-brand-red">Notre Équipe</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            CASAGRUE est en constante croissance. Rejoignez le leader marocain des solutions
            de levage et construisez votre carrière avec nous.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-4xl text-neutral-900 dark:text-white mb-6">
                Pourquoi Rejoindre <span className="text-brand-red">CASAGRUE</span> ?
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Leader du Secteur', desc: 'Rejoignez le leader national marocain en solutions de levage avec plus de 13 ans d\'expérience.' },
                  { title: 'Formation Continue', desc: 'Bénéficiez de formations régulières avec JASO et Zoomlion pour rester à la pointe de la technologie.' },
                  { title: 'Mobilité et Évolution', desc: 'Des perspectives d\'évolution réelles dans une entreprise en forte croissance.' },
                  { title: 'Projets d\'Envergure', desc: 'Travaillez sur des chantiers de grande envergure à travers tout le Maroc.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-brand-steel-light border border-neutral-100 dark:border-white/10">
                    <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{item.title}</div>
                      <div className="text-neutral-600 dark:text-neutral-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="CASAGRUE Team"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-24 bg-neutral-50 dark:bg-brand-steel/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl text-neutral-900 dark:text-white mb-4">
              Postes <span className="text-brand-red">Disponibles</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">{jobs.length} postes ouverts actuellement</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white dark:bg-brand-steel-light rounded-2xl p-6 border border-neutral-100 dark:border-white/10 hover:border-brand-red hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-neutral-100 dark:bg-brand-steel text-neutral-600 dark:text-neutral-400 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                      <span className="bg-neutral-100 dark:bg-brand-steel text-neutral-600 dark:text-neutral-400 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> {job.type}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="text-xs bg-neutral-50 dark:bg-brand-steel text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:contact@casagrue.ma?subject=Candidature: ${job.title}`}
                    className="shrink-0 flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                  >
                    Postuler <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous */}
          <div className="mt-12 max-w-4xl mx-auto bg-brand-steel dark:bg-brand-steel-light rounded-2xl p-8 text-white text-center">
            <h3 className="font-display font-bold text-2xl mb-3">Candidature Spontanée</h3>
            <p className="text-neutral-400 mb-6">Votre profil ne correspond pas aux postes actuels ? Envoyez-nous votre CV, nous gardons les bons profils en réserve.</p>
            <a
              href="mailto:contact@casagrue.ma?subject=Candidature Spontanée"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3 rounded-xl font-bold transition-colors"
            >
              Envoyer ma candidature
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
