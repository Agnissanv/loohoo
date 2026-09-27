import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Boutiques from './components/Boutiques.jsx';
import Marketplace from './components/Marketplace.jsx';
import Footer from './components/Footer.jsx';
import ModaleBientotDisponible from './components/ModaleBientotDisponible.jsx';

export default function App() {
  const [modaleOuverte, setModaleOuverte] = useState(false);

  return (
    <div>
      <Header onOuvrirBientotDisponible={() => setModaleOuverte(true)} />
      <Hero />
      <Mission />
      <Boutiques />
      <Marketplace />
      <Footer />

      {modaleOuverte && (
        <ModaleBientotDisponible
          titre="Créez votre boutique en ligne"
          description="La création de boutique en libre-service arrive bientôt sur LOOHOO. Laissez votre e-mail pour être averti dès l'ouverture."
          source="landing-vendeurs"
          onClose={() => setModaleOuverte(false)}
        />
      )}
    </div>
  );
}