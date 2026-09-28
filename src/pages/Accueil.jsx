import React from 'react';
import Hero from '../components/Hero.jsx';
import Mission from '../components/Mission.jsx';
import Services from '../components/Services.jsx';
import Fournisseurs from '../components/Fournisseurs.jsx';
import Boutiques from '../components/Boutiques.jsx';

export default function Accueil({ onOuvrirBientotDisponible }) {
  return (
    <>
      <Hero />
      <Mission />
      <Services onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <Fournisseurs />
      <Boutiques onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
    </>
  );
}