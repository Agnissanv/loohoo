import React from 'react';
import { Infinity as IconInfini, Smile, Sparkles } from 'lucide-react';

const PILIERS = [
  {
    icon: Sparkles,
    titre: 'Un nom, un sens',
    texte: "LOOHOO vient du Dan (Yacouba), une langue de Côte d'Ivoire — il signifie « commerce, vente, achat ». Une racine culturelle, pas juste un nom de marque.",
  },
  {
    icon: IconInfini,
    titre: 'Des boutiques, une promesse',
    texte: "Chaque boutique LOOHOO est indépendante et spécialisée dans son domaine. Le symbole ∞ porte cette idée : des univers différents, une exigence de qualité sans limite.",
  },
  {
    icon: Smile,
    titre: 'Le sourire avant tout',
    texte: "Acheter chez LOOHOO doit rester une expérience simple et agréable — c'est la promesse derrière le sourire du logo.",
  },
];

export default function Mission() {
  return (
    <section className="section">
      <div className="container">
        <span className="etiquette">Qui est LOOHOO</span>
        <h2 className="section-titre">Une marque, plusieurs boutiques.</h2>
        <p className="section-intro">
          LOOHOO ne vend rien directement — c'est la marque qui réunit et fait grandir des
          boutiques spécialisées, chacune gardant son indépendance et son savoir-faire.
        </p>

        <div className="loo-mission-grille" style={styles.grille}>
          {PILIERS.map((p) => (
            <div key={p.titre} className="carte" style={styles.carte}>
              <div style={styles.icone}>
                <p.icon size={20} color="var(--loo-encre)" />
              </div>
              <h3 style={{ fontSize: '1.08rem', margin: '1rem 0 0.5rem' }}>{p.titre}</h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.72, margin: 0 }}>{p.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grille: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4rem', marginTop: '2.5rem' },
  carte: { padding: '1.7rem' },
  icone: {
    width: '40px', height: '40px', borderRadius: '4px 12px 4px 12px', background: 'var(--loo-papier-ombre)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
};
