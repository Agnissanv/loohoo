import React from 'react';
import { Link } from 'react-router-dom';
import PageLegale, { AC } from './PageLegale.jsx';

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" dateMaj="24 septembre 2026">
      <h2>Éditeur du site</h2>
      <p>Le site looh-oo.com est édité par LOOHOO.</p>
      <ul>
        <li>Raison sociale : <AC>raison sociale exacte</AC></li>
        <li>Forme juridique et capital : <AC>forme juridique et capital</AC></li>
        <li>Siège social : <AC>adresse complète</AC></li>
        <li>Numéro RCCM : <AC>numéro RCCM</AC></li>
        <li>Numéro de compte contribuable : <AC>numéro de compte contribuable</AC></li>
        <li>Téléphone : <AC>numéro de téléphone</AC></li>
        <li>E-mail : <a href="mailto:contact@looh-oo.com">contact@looh-oo.com</a></li>
        <li>Directeur de la publication : <AC>nom du directeur de la publication</AC></li>
      </ul>

      <h2>Activité</h2>
      <p>
        LOOHOO est une entreprise spécialisée dans le e-commerce et le commerce en général, la création
        de marques, les solutions numériques pour le commerce, la distribution et, plus largement, toute
        activité légale génératrice de revenus. Sa mission est d'aider les vendeurs à créer, gérer et faire
        grandir leur commerce dans un écosystème clé et connecté.
      </p>

      <h2>Conception et développement</h2>
      <p>
        Site conçu et développé par Code A-Z, agence de création de sites web et d'applications
        (<a href="https://www.agnissanisaac.com/" target="_blank" rel="noreferrer">agnissanisaac.com</a>).
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        (<a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le nom LOOHOO, le logo, les visuels et les textes de ce site sont la propriété de LOOHOO. Toute
        reproduction, représentation ou réutilisation, totale ou partielle, sans autorisation écrite
        préalable est interdite. Les noms, images et descriptions des produits présentés sur la
        marketplace appartiennent aux boutiques qui les publient.
      </p>

      <h2>Responsabilité</h2>
      <p>
        LOOHOO s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence
        d'erreur ou d'interruption du site. Les produits, prix et disponibilités affichés sur la
        marketplace sont fournis par les boutiques ; chaque boutique reste responsable de ses offres, de
        ses ventes et de ses livraisons. Ce site contient des liens vers des sites tiers (dont les
        boutiques) sur lesquels LOOHOO n'exerce aucun contrôle.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans notre{' '}
        <Link to="/confidentialite">politique de confidentialité</Link>. L'utilisation du site est
        encadrée par nos <Link to="/conditions">conditions d'utilisation</Link>.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site et ses mentions légales sont soumis au droit ivoirien. En cas de litige, les
        tribunaux compétents d'Abidjan seront seuls compétents, sous réserve des règles impératives
        applicables. <AC>à faire confirmer par le client ou un juriste</AC>
      </p>
    </PageLegale>
  );
}