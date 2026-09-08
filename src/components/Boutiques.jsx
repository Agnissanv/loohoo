import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { BOUTIQUES } from '../data/boutiques.js';

export default function Boutiques() {
  return (
    <section id="boutiques" className="section">
      <div className="container">
        <span className="eyebrow">L'écosystème LOOHOO</span>
        <h2 className="section-titre">Nos boutiques</h2>
        <p className="section-intro">Chacune a son univers, son catalogue et son équipe — toutes réunies sous LOOHOO.</p>

        <div style={styles.grille}>
          {BOUTIQUES.map((b) => (
            <a key={b.id} href={`https://${b.sousDomaine}`} target="_blank" rel="noreferrer" className="carte" style={styles.carteBoutique}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{b.nom}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.75, margin: 0 }}>{b.description}</p>
              </div>
              <span style={styles.lienVisiter}>
                Visiter la boutique <ArrowUpRight size={16} />
              </span>
            </a>
          ))}

          <div className="carte" style={styles.carteAVenir}>
            <Plus size={28} color="var(--loo-red)" />
            <h3 style={{ fontSize: '1.05rem', margin: '0.8rem 0 0.4rem' }}>Votre boutique ici ?</h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.7, margin: '0 0 1rem' }}>
              Ouvrez votre boutique en ligne sous LOOHOO, sur votre propre sous-domaine.
            </p>
            <a href="#partenaire" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.6em 1.2em' }}>
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grille: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem', marginTop: '2.5rem',
  },
  carteBoutique: {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    minHeight: '160px', transition: 'transform 0.15s ease',
  },
  lienVisiter: {
    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
    fontWeight: 600, fontSize: '0.88rem', color: 'var(--loo-red)', marginTop: '1rem',
  },
  carteAVenir: {
    border: '2px dashed var(--loo-line)', display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', justifyContent: 'center', minHeight: '160px',
  },
};
