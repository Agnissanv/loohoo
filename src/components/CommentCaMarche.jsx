import React from 'react';

// Trois parcours, un par acteur. Une étape ou un parcours « bientôt » perd sa mention quand la brique est prête.
const PARCOURS = [
  {
    pour: 'Pour les fournisseurs',
    titre: 'Vendre en gros',
    etapes: [
      { texte: 'Créez votre profil et ajoutez vos produits avec leur prix de gros.' },
      { texte: 'Notre équipe vérifie votre entreprise sur place.' },
      { texte: 'Recevez des demandes de devis et répondez depuis votre espace.' },
    ],
  },
  {
    pour: 'Pour les vendeurs',
    titre: 'Acheter en gros',
    etapes: [
      { texte: 'Cherchez un produit et comparez les fournisseurs vérifiés.' },
      { texte: 'Demandez un devis : quantité, ville de livraison, délai.' },
      { texte: 'Discutez dans la messagerie LOOHOO, puis concluez.' },
      { texte: 'Créez votre boutique LOOHOO et vendez en ligne à vos clients.', bientot: true },
    ],
  },
  {
    pour: 'Pour les clients',
    titre: 'Acheter au détail',
    bientot: true,
    etapes: [
      { texte: 'Parcourez les boutiques des vendeurs LOOHOO.' },
      { texte: 'Commandez auprès du vendeur de votre choix.' },
      { texte: 'Le vendeur organise la livraison avec vous.' },
    ],
  },
];

export default function CommentCaMarche() {
  return (
    <section id="comment" className="section section-grise" aria-labelledby="titre-comment">
      <div className="container">
        <h2 id="titre-comment" className="section-titre">Comment ça marche</h2>
        <div className="parcours-grille">
          {PARCOURS.map((p) => (
            <article key={p.titre} className="parcours">
              <div className="parcours-tete">
                <span className="etiquette">{p.pour}</span>
                {p.bientot && <span className="pastille pastille-bientot">Bientôt</span>}
              </div>
              <h3>{p.titre}</h3>
              <ol>
                {p.etapes.map((e) => (
                  <li key={e.texte}>{e.texte}{e.bientot && <> <span className="pastille pastille-bientot">Bientôt</span></>}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
