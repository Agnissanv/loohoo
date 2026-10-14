import React from 'react';
import Hero from '../components/Hero.jsx';
import PortesMarche from '../components/PortesMarche.jsx';
import MarcheEnDirect from '../components/MarcheEnDirect.jsx';
import TroisActeurs from '../components/TroisActeurs.jsx';
import CommentCaMarche from '../components/CommentCaMarche.jsx';
import PremiersFournisseurs from '../components/PremiersFournisseurs.jsx';
import Faq from '../components/Faq.jsx';

// Le site officiel est le hall du marché : il oriente chacun vers sa porte (pas de catalogue, pas de recherche).
// Ordre demandé par le client (13 oct 2026) : haut de page, portes, marché en direct, trois acteurs, trois parcours,
// premiers fournisseurs vérifiés, questions fréquentes et chiffres. « Rejoignez la communauté » et le pied de page sont communs à toutes les pages.
// Pas de témoignages tant que la plateforme n'a pas de vrais utilisateurs.
export default function Accueil() {
  return (
    <>
      <Hero />
      <PortesMarche />
      <MarcheEnDirect />
      <TroisActeurs />
      <CommentCaMarche />
      <PremiersFournisseurs />
      <Faq />
    </>
  );
}
