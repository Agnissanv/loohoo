import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { BOUTIQUES } from '../data/boutiques.js';

export default function Boutiques() {
  const [vedette, ...autres] = BOUTIQUES;

  return (
    <section id="boutiques" className="section" style={{ background: 'var(--loo-blanc)' }}>
      <div className="container">
        <span className="etiquette">L'écosystème LOOHOO</span>
        <h2 className="section-titre">Nos boutiques</h2>
        <p className="section-intro">Chacune a son univers, son catalogue et son équipe — toutes réunies sous LOOHOO.</p>

        <div className="loo-boutiques-grille" style={styles.grille}>
          {vedette && (
            <a
              href={`https://${vedette.sousDomaine}`}
              target="_blank"
              rel="noreferrer"
              className="carte carte-vedette"
              style={styles.carteVedette}
            >
              <div>
                <span className="etiquette" style={{ color: 'var(--loo-encre)', opacity: 0.55 }}>Boutique phare</span>
                <h3 style={{ fontSize: '1.5rem', margin: '0.4rem 0 0.6rem' }}>{vedette.nom}</h3>
                <p style={{ fontSize: '0.96rem', opacity: 0.75, margin: 0, maxWidth: '32ch' }}>{vedette.description}</p>
              </div>
              <span style={styles.lienVisiter}>
                Visiter la boutique <ArrowUpRight size={16} />
              </span>
            </a>
          )}

          {autres.map((b) => (
            <a key={b.id} href={`https://${b.sousDomaine}`} target="_blank" rel="noreferrer" className="carte" style={styles.carteBoutique}>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{b.nom}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.75, margin: 0 }}>{b.description}</p>
              </div>
              <span style={styles.lienVisiter}>
                Visiter <ArrowUpRight size={16} />
              </span>
            </a>
          ))}

          <div className="carte" style={styles.carteAVenir}>
            <Plus size={24} color="var(--loo-rouge)" />
            <h3 style={{ fontSize: '1.02rem', margin: '0.7rem 0 0.4rem' }}>Votre boutique ici ?</h3>
            <p style={{ fontSize: '0.86rem', opacity: 0.68, margin: '0 0 1rem' }}>
              Ouvrez votre boutique en ligne sous LOOHOO, sur votre propre sous-domaine.
            </p>
            <a href="#partenaire" className="btn btn-outline" style={{ fontSize: '0.83rem', padding: '0.55em 1.1em' }}>
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
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.4rem', marginTop: '2.5rem', alignItems: 'stretch',
  },
  carteVedette: {
    gridColumn: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: '2rem', minHeight: '220px', background: 'var(--loo-papier)',
  },
  carteBoutique: {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: '1.6rem', minHeight: '180px',
  },
  lienVisiter: {
    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
    fontWeight: 600, fontSize: '0.88rem', color: 'var(--loo-rouge)', marginTop: '1.2rem',
  },
  carteAVenir: {
    border: '2px dashed var(--loo-papier-ombre)', boxShadow: 'none', display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', justifyContent: 'center', padding: '1.6rem', minHeight: '180px',
  },
};
