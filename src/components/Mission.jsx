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
    <section className="section" style={{ background: 'var(--loo-white)' }}>
      <div className="container">
        <span className="eyebrow">Qui est LOOHOO</span>
        <h2 className="section-titre">Une marque, plusieurs boutiques.</h2>
        <p className="section-intro">
          LOOHOO ne vend rien directement — c'est la marque qui réunit et fait grandir des
          boutiques spécialisées, chacune gardant son indépendance et son savoir-faire.
        </p>

        <div className="loo-mission-grille" style={styles.grille}>
          {PILIERS.map((p) => (
            <div key={p.titre} className="carte">
              <div style={styles.icone}>
                <p.icon size={22} color="var(--loo-white)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '1rem 0 0.5rem' }}>{p.titre}</h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.75, margin: 0 }}>{p.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grille: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' },
  icone: {
    width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gradient-marque)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
};
