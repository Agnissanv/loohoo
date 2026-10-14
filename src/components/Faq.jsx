import React, { useEffect, useState } from 'react';
import { recupererPays } from '../api/fournisseurs.js';
import { phrasePays } from '../utils/affichage.js';
import ChiffresLoohoo from './ChiffresLoohoo.jsx';

// Les quatre questions de la maquette ; la réponse sur les pays suit le réglage de l'administration
function questions(pays) {
  return [
    {
      q: "Qu'est-ce que LOOHOO ?",
      r: "LOOHOO, c'est le grand marché digital d'Afrique : le marché qui connecte fournisseurs, vendeurs et clients. Sa première porte, LOOHOO Fournisseurs, permet de trouver un grossiste ou un fabricant vérifié et d'acheter au vrai prix de gros. LOOHOO signifie « marché » en dan (yacouba), une langue de Côte d'Ivoire.",
    },
    {
      q: 'Comment les fournisseurs sont-ils vérifiés ?',
      r: "Le badge « vérifié » est attribué après un contrôle de notre équipe, sur place : pièces d'identité et documents de l'entreprise, stock réel, local et ville déclarée. La fiabilité est suivie dans le temps : un fournisseur peut perdre son badge ou être suspendu en cas d'écart.",
    },
    {
      q: 'Les coordonnées des fournisseurs sont-elles visibles ?',
      r: "Non. Les échanges passent par la messagerie LOOHOO : les numéros de téléphone, e-mails et liens ne sont pas affichés, et sont masqués s'ils sont écrits dans un message.",
    },
    { q: 'Dans quels pays LOOHOO est-il disponible ?', r: phrasePays(pays) },
  ];
}

// Questions fréquentes, avec « LOOHOO aujourd'hui » à côté (dessous sur téléphone)
export default function Faq() {
  const [pays, setPays] = useState(null);
  useEffect(() => { recupererPays().then(setPays); }, []);

  return (
    <section id="faq" className="section" aria-labelledby="titre-faq">
      <div className="container faq-grille">
        <div>
          <h2 id="titre-faq" className="section-titre">Questions fréquentes</h2>
          <div className="faq-liste">
            {questions(pays).map((x) => (
              <details key={x.q}>
                <summary>{x.q}</summary>
                <p>{x.r}</p>
              </details>
            ))}
          </div>
        </div>
        <ChiffresLoohoo />
      </div>
    </section>
  );
}
