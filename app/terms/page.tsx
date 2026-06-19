import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Conditions d'Utilisation — CASAGRUE" };

export default function TermsPage() {
  return (
    <div>
      <section className="py-32 bg-brand-steel">
        <div className="container mx-auto px-6">
          <h1 className="font-display font-black text-5xl text-white">Conditions <span className="text-brand-red">d'Utilisation</span></h1>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6 max-w-4xl prose dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-red">
          <h2>1. Acceptation des Conditions</h2>
          <p>En accédant et en utilisant le site web de CASAGRUE, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.</p>
          <h2>2. Propriété Intellectuelle</h2>
          <p>Tout le contenu de ce site (textes, images, logos, graphiques) est la propriété exclusive de CASAGRUE et est protégé par les lois marocaines et internationales sur la propriété intellectuelle.</p>
          <h2>3. Limitation de Responsabilité</h2>
          <p>CASAGRUE s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, l'exhaustivité ou la pertinence des informations publiées. CASAGRUE ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.</p>
          <h2>4. Services et Tarifs</h2>
          <p>Les devis et tarifs présentés sur ce site sont indicatifs. Tout engagement commercial est soumis à la signature d'un contrat spécifique entre CASAGRUE et le client.</p>
          <h2>5. Droit Applicable</h2>
          <p>Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis à la compétence des tribunaux de Casablanca, Maroc.</p>
          <p className="text-sm text-neutral-500">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>
    </div>
  );
}
