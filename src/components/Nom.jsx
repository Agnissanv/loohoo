import React from 'react';
import MarqueVisage from './MarqueVisage.jsx';

export default function Nom() {
  return (
    <section className="loo-nom">
      <div className="container loo-nom-grille">
        <div>
          <span className="etiquette">D'où vient le nom</span>
          <h2 className="loo-affiche">LOOHOO : « commerce » en dan.</h2>
          <p>
            Le dan, ou yacouba, se parle dans l'ouest de la Côte d'Ivoire. Le mot dit à la fois vendre, acheter et
            le commerce lui-même. Le sourire du logo rappelle ce qu'on attend d'un bon échange : simple, clair, agréable.
          </p>
        </div>
        <MarqueVisage taille={180} />
      </div>
    </section>
  );
}
