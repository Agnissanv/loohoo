import React from 'react';
import Hero from '../components/Hero.jsx';
import Mission from '../components/Mission.jsx';
import Boutiques from '../components/Boutiques.jsx';
import Marketplace from '../components/Marketplace.jsx';

export default function Accueil() {
  return (
    <>
      <Hero />
      <Mission />
      <Boutiques />
      <Marketplace />
    </>
  );
}