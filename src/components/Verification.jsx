import React from 'react';

// Le vrai différenciateur : ce que l'équipe LOOHOO contrôle, dans l'ordre où elle le fait.
const CONTROLES = [
  ["L'entreprise", 'Existence, activité et pièces justificatives.'],
  ['Les produits', 'Photos, descriptions et prix de gros, produit par produit.'],
  ['Le stock', 'Quantités annoncées, revérifiées régulièrement.'],
  ['Les échanges', 'Numéros, e-mails et liens sont masqués : on discute dans LOOHOO.'],
];

export default function Verification() {
  return (
    <section id="comment" className="loo-verif">
      <div className="container">
        <span className="etiquette">Pourquoi LOOHOO</span>
        <h2 className="loo-affiche">Un fournisseur n'apparaît ici qu'après contrôle.</h2>
        <ul className="loo-verif-liste">
          {CONTROLES.map(([titre, texte]) => (
            <li key={titre}>
              <strong>{titre}</strong>
              <span>{texte}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
