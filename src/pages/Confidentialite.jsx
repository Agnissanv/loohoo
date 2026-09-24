import React from 'react';
import { Link } from 'react-router-dom';
import PageLegale, { AC } from './PageLegale.jsx';

export default function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité" dateMaj="24 septembre 2026">
      <p>
        Cette politique explique quelles données personnelles sont traitées lorsque vous visitez
        looh-oo.com, et comment vous pouvez exercer vos droits. Elle est volontairement courte : à ce
        jour, le site est une vitrine et ne vous demande aucune information personnelle.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        LOOHOO, <AC>raison sociale et adresse du siège</AC>. Contact :{' '}
        <a href="mailto:contact@looh-oo.com">contact@looh-oo.com</a>. Les informations complètes sur
        l'éditeur figurent dans les <Link to="/mentions-legales">mentions légales</Link>.
      </p>

      <h2>2. Les données que nous traitons</h2>
      <ul>
        <li>
          <strong>Aucun formulaire, aucun compte.</strong> Le site ne vous demande ni nom, ni
          téléphone, ni adresse e-mail, et ne propose pas de création de compte.
        </li>
        <li>
          <strong>Données techniques de navigation.</strong> Comme pour tout site web, votre adresse IP
          et des informations techniques (type d'appareil, navigateur, pages demandées) sont
          nécessairement transmises aux serveurs qui délivrent le site et son contenu.
        </li>
        <li>
          <strong>Si vous nous écrivez.</strong> Si vous nous contactez par e-mail, nous traitons votre
          adresse e-mail et le contenu de votre message, uniquement pour vous répondre.
        </li>
      </ul>

      <h2>3. Cookies et mesure d'audience</h2>
      <p>
        Le site n'utilise aucun cookie de suivi ni outil de mesure d'audience ou de publicité à ce
        jour. Si cela devait changer, cette page serait mise à jour et, le cas échéant, votre accord
        serait demandé.
      </p>

      <h2>4. Services tiers utilisés pour faire fonctionner le site</h2>
      <p>Pour afficher cette page, votre navigateur communique avec les services suivants :</p>
      <ul>
        <li><strong>Vercel</strong> : hébergement du site.</li>
        <li><strong>Google Fonts</strong> : chargement des polices de caractères (votre adresse IP est transmise à Google à cette occasion).</li>
        <li><strong>Cloudinary</strong> : diffusion des images des produits.</li>
        <li><strong>Supabase</strong> : base de données publique des boutiques, interrogée pour afficher leurs produits sur la marketplace.</li>
      </ul>
      <p>
        Ces prestataires peuvent être situés hors de Côte d'Ivoire ; vos données techniques peuvent donc
        être traitées à l'étranger dans le cadre de leur fonctionnement.
      </p>

      <h2>5. Les boutiques partenaires</h2>
      <p>
        Chaque boutique présentée sur LOOHOO est indépendante. Lorsque vous cliquez sur une boutique ou
        sur un produit, vous quittez looh-oo.com : les données que vous y saisissez (commande, livraison,
        etc.) sont traitées par cette boutique, selon sa propre politique de confidentialité. LOOHOO ne
        reçoit pas ces données.
      </p>

      <h2>6. Durée de conservation</h2>
      <p>
        Les messages reçus par e-mail sont conservés le temps nécessaire pour traiter votre demande, puis{' '}
        <AC>durée à définir avec le client, par exemple 12 mois</AC>. Les données techniques de
        navigation sont conservées par les prestataires selon leurs propres règles.
      </p>

      <h2>7. Vos droits</h2>
      <p>
        Vous pouvez demander l'accès à vos données, leur rectification, leur suppression, ou vous
        opposer à leur traitement, en écrivant à{' '}
        <a href="mailto:contact@looh-oo.com">contact@looh-oo.com</a>. Vous pouvez également saisir
        l'autorité de protection des données personnelles de Côte d'Ivoire (ARTCI) si vous estimez que
        vos droits ne sont pas respectés.
      </p>

      <h2>8. Sécurité</h2>
      <p>
        Le site est servi en HTTPS et ne conserve aucune donnée personnelle sur ses propres serveurs.
        Nous ne vendons ni ne cédons vos données à des tiers.
      </p>

      <h2>9. Modifications</h2>
      <p>
        Cette politique peut évoluer, notamment avec l'arrivée de nouveaux services sur LOOHOO. La date
        de dernière mise à jour figure en haut de la page.
      </p>
    </PageLegale>
  );
}