import React from 'react';
import { Link } from 'react-router-dom';
import PageLegale, { AC } from './PageLegale.jsx';

export default function Conditions() {
  return (
    <PageLegale titre="Conditions d'utilisation" dateMaj="24 septembre 2026">
      <p>
        En consultant looh-oo.com, vous acceptez les présentes conditions d'utilisation. Si vous ne les
        acceptez pas, merci de ne pas utiliser le site.
      </p>

      <h2>1. Objet du site</h2>
      <p>
        LOOHOO est une marque qui réunit des boutiques en ligne spécialisées. Ce site présente la marque
        et ses boutiques, et affiche un aperçu de leurs produits sur une marketplace.
      </p>

      <h2>2. LOOHOO ne vend pas directement</h2>
      <p>
        LOOHOO ne vend aucun produit sur looh-oo.com, ne prend aucune commande et ne perçoit aucun
        paiement. Lorsque vous cliquez sur une boutique ou un produit, vous êtes redirigé vers le site
        de la boutique concernée.
      </p>

      <h2>3. Boutiques indépendantes</h2>
      <p>
        Chaque boutique est un site indépendant, responsable de ses produits, de ses prix, de ses
        stocks, de la prise de commande, de la livraison, du service après-vente et de ses propres
        conditions de vente et politique de confidentialité. Tout achat est un contrat entre vous et la
        boutique, auquel LOOHOO n'est pas partie.
      </p>

      <h2>4. Exactitude des informations</h2>
      <p>
        Les produits, prix et disponibilités affichés sur la marketplace proviennent des boutiques et
        sont donnés à titre indicatif. Seules les informations affichées sur le site de la boutique au
        moment de la commande font foi.
      </p>

      <h2>5. Utilisation du site</h2>
      <p>
        Vous vous engagez à utiliser le site de façon loyale, sans tenter d'en perturber le
        fonctionnement, d'accéder à des données auxquelles vous n'avez pas droit, ni d'en extraire
        massivement le contenu de manière automatisée.
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        Les éléments du site (nom, logo, textes, visuels) sont protégés et appartiennent à LOOHOO ; les
        contenus produits appartiennent aux boutiques. Toute réutilisation sans autorisation est
        interdite. Voir les <Link to="/mentions-legales">mentions légales</Link>.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        LOOHOO ne peut être tenue responsable des interruptions du site, ni des dommages liés à
        l'utilisation de sites tiers accessibles depuis looh-oo.com, y compris ceux des boutiques.
      </p>

      <h2>8. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans la{' '}
        <Link to="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h2>9. Modification des conditions</h2>
      <p>
        LOOHOO peut modifier ces conditions à tout moment. La version en vigueur est celle publiée sur
        cette page, avec sa date de mise à jour.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes conditions sont soumises au droit ivoirien ; les tribunaux d'Abidjan sont
        compétents en cas de litige. <AC>à faire confirmer par le client ou un juriste</AC>
      </p>
    </PageLegale>
  );
}