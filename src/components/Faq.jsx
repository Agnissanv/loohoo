import React from 'react';

// Les quatre questions de la maquette du client
const QUESTIONS = [
  {
    q: "Qu'est-ce que LOOHOO ?",
    r: "LOOHOO, c'est le grand marché digital d'Afrique : le marché qui connecte fournisseurs, vendeurs et clients. Notre première brique, LOOHOO Fournisseurs, permet de trouver un grossiste ou un fabricant vérifié au prix de gros. Le nom vient du dan (yacouba), une langue de Côte d'Ivoire, et signifie « commerce, vente, achat ».",
  },
  {
    q: 'Comment les fournisseurs sont-ils vérifiés ?',
    r: "Notre équipe contrôle chaque profil avant publication : pièces d'identité et documents administratifs, photos du stock réel, cohérence du local et de la ville déclarée. La fiabilité est suivie dans le temps : un profil peut être suspendu en cas d'écart.",
  },
  {
    q: 'Les coordonnées des fournisseurs sont-elles visibles ?',
    r: "Non. Les échanges passent par la messagerie LOOHOO : les numéros de téléphone, e-mails et liens ne sont pas affichés, et sont masqués s'ils sont écrits dans un message.",
  },
  {
    q: 'Dans quels pays LOOHOO est-il disponible ?',
    r: "Nous commençons par la Côte d'Ivoire. LOOHOO s'ouvrira ensuite à d'autres pays d'Afrique : la plateforme est prête à les accueillir.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '820px' }}>
        <span className="etiquette">Questions fréquentes</span>
        <h2 className="section-titre">Vos questions, nos réponses.</h2>
        <div style={{ marginTop: '1.6rem' }}>
          {QUESTIONS.map((x) => (
            <details key={x.q} style={styles.item}>
              <summary style={styles.question}>{x.q}</summary>
              <p style={{ margin: '0.7rem 0 0', lineHeight: 1.65, opacity: 0.82 }}>{x.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  item: { borderTop: '1px solid var(--loo-papier-ombre)', padding: '1rem 0' },
  question: { fontWeight: 700, cursor: 'pointer', fontSize: '1.02rem' },
};
