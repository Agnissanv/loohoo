import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Parcours from '../components/Parcours.jsx';
import CommentCaMarche from '../components/CommentCaMarche.jsx';
import Temoignages from '../components/Temoignages.jsx';
import Faq from '../components/Faq.jsx';
import ChiffresLoohoo from '../components/ChiffresLoohoo.jsx';
import { URL_INSCRIPTION_FOURNISSEUR } from '../config.js';

// Page mère de la marque, dans l'ordre de la maquette validée par le client :
// hero, que venez-vous faire, comment ça marche, témoignages, questions, LOOHOO aujourd'hui, appel aux fournisseurs.
// L'histoire de la marque, les services et les boutiques sont sur la page « À propos ».
export default function Accueil({ onOuvrirBientotDisponible }) {
  return (
    <>
      <Hero />
      <Parcours onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <CommentCaMarche />
      <Temoignages />
      <Faq />
      <ChiffresLoohoo />
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container loo-appel-fournisseur">
          <p>Vous avez du stock à vendre en gros ?</p>
          <a href={URL_INSCRIPTION_FOURNISSEUR}>Créer votre profil fournisseur LOOHOO <ArrowRight size={16} /></a>
        </div>
      </section>
    </>
  );
}
