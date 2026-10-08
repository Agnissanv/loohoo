import React from 'react';
import Hero from '../components/Hero.jsx';
import Parcours from '../components/Parcours.jsx';
import CommentCaMarche from '../components/CommentCaMarche.jsx';
import Fournisseurs from '../components/Fournisseurs.jsx';
import Boutiques from '../components/Boutiques.jsx';
import Services from '../components/Services.jsx';
import Mission from '../components/Mission.jsx';
import Faq from '../components/Faq.jsx';
import ChiffresLoohoo from '../components/ChiffresLoohoo.jsx';

// Le portail : chacun choisit son parcours, puis découvre comment ça marche, les fournisseurs, les boutiques.
export default function Accueil({ onOuvrirBientotDisponible }) {
  return (
    <>
      <Hero />
      <Parcours onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <CommentCaMarche />
      <Fournisseurs />
      <Boutiques onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <Mission />
      <Services onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <ChiffresLoohoo />
      <Faq />
    </>
  );
}
