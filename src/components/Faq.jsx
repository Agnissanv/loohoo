import React from 'react';

const QUESTIONS = [
  {
    q: "Qu'est-ce que LOOHOO ?",
    r: "LOOHOO est un marché qui connecte fournisseurs, vendeurs et clients. Il aide les vendeurs à créer, gérer et faire grandir leur commerce. Le nom vient du dan (yacouba), une langue de Côte d'Ivoire, et signifie « commerce, vente, achat ».",
  },
  {
    q: 'Comment les fournisseurs sont-ils vérifiés ?',
    r: "Notre équipe contrôle chaque profil et chaque produit avant publication : entreprise, photos, stock, contact. Le badge « Vérifié » n'est accordé qu'après ce contrôle.",
  },
  {
    q: 'Les coordonnées des fournisseurs sont-elles visibles ?',
    r: "Non. Les échanges passent par la messagerie LOOHOO : les numéros de téléphone, e-mails et liens ne sont pas affichés et sont masqués s'ils sont écrits dans un message.",
  },
  {
    q: 'Quand pourrai-je créer ma boutique en ligne ?',
    r: "Bientôt. Laissez votre e-mail avec le bouton « Créer ma boutique » : nous vous prévenons dès l'ouverture.",
  },
  {
    q: 'Dans quels pays LOOHOO est-il disponible ?',
    r: "En Côte d'Ivoire aujourd'hui. Le Mali arrive bientôt.",
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
