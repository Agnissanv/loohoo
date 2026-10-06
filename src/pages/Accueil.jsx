import React from 'react';
import Hero from '../components/Hero.jsx';
import Recits from '../components/Recits.jsx';
import Verification from '../components/Verification.jsx';
import Fournisseurs from '../components/Fournisseurs.jsx';
import Boutiques from '../components/Boutiques.jsx';
import Nom from '../components/Nom.jsx';
import Faq from '../components/Faq.jsx';

export default function Accueil({ onOuvrirBientotDisponible }) {
  return (
    <>
      <Hero />
      <Recits />
      <Verification />
      <Fournisseurs />
      <Boutiques onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <Nom />
      <Faq />
    </>
  );
}
