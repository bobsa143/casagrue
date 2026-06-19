import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — CASAGRUE',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-32 bg-brand-steel">
        <div className="container mx-auto px-6">
          <h1 className="font-display font-black text-5xl text-white">Politique de <span className="text-brand-red">Confidentialité</span></h1>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-brand-steel/20">
        <div className="container mx-auto px-6 max-w-4xl prose dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-red">
          <h2>1. Collecte des Données</h2>
          <p>CASAGRUE collecte les données personnelles que vous nous fournissez via nos formulaires de contact, de devis ou d'inscription à notre newsletter. Ces données comprennent votre nom, adresse email, numéro de téléphone et informations professionnelles.</p>
          <h2>2. Utilisation des Données</h2>
          <p>Vos données sont utilisées exclusivement pour répondre à vos demandes, vous envoyer des offres commerciales pertinentes et améliorer nos services. Nous ne vendons ni ne louons vos données à des tiers.</p>
          <h2>3. Conservation des Données</h2>
          <p>Vos données sont conservées pendant une durée maximum de 3 ans après votre dernière interaction avec CASAGRUE, sauf obligation légale contraire.</p>
          <h2>4. Vos Droits</h2>
          <p>Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@casagrue.ma.</p>
          <h2>5. Cookies</h2>
          <p>Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Vous pouvez refuser les cookies non essentiels via notre bannière de consentement.</p>
          <h2>6. Contact</h2>
          <p>Pour toute question relative à notre politique de confidentialité, contactez-nous : contact@casagrue.ma ou +212 (0) 522 673 204.</p>
          <p className="text-sm text-neutral-500">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>
    </div>
  );
}
