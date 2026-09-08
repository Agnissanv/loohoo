import React from 'react';
import MarqueVisage from './MarqueVisage.jsx';
import SourireDiviseur from './SourireDiviseur.jsx';

export default function Hero() {
  return (
    <section id="accueil">
      <div style={styles.fond}>
        <div className="container loo-hero-grille" style={styles.grille}>
          <div>
            <span className="etiquette" style={{ color: 'var(--loo-papier)', opacity: 0.85 }}>
              La marque derrière vos boutiques préférées
            </span>
            <h1 style={styles.titre}>
              Les produits rares<br />au meilleur prix.
            </h1>
            <p style={styles.texte}>
              LOOHOO réunit plusieurs boutiques spécialisées — chacune experte dans son
              domaine — sous une même promesse : des produits qu'on ne trouve pas partout,
              au juste prix, livrés chez vous.
            </p>
            <div style={styles.boutons}>
              <a href="#boutiques" className="btn btn-clair">Découvrir nos boutiques</a>
              <a href="#marketplace" className="btn btn-outline" style={{ color: 'var(--loo-papier)' }}>
                Explorer la marketplace
              </a>
            </div>
          </div>

          <div style={styles.visageBloc}>
            <MarqueVisage taille={280} />
          </div>
        </div>
      </div>

      <SourireDiviseur fond="var(--loo-rouge)" suivant="var(--loo-papier)" />
    </section>
  );
}

const styles = {
  fond: { background: 'var(--gradient-marque)', paddingTop: '4rem', paddingBottom: '3rem' },
  grille: {
    display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2.5rem', alignItems: 'center',
  },
  titre: {
    fontSize: 'clamp(2.4rem, 5.4vw, 3.7rem)', lineHeight: 1.04, margin: '0.6rem 0 1.2rem',
    color: 'var(--loo-papier)', fontWeight: 700,
  },
  texte: { maxWidth: '480px', fontSize: '1.05rem', color: 'var(--loo-papier)', opacity: 0.92, marginBottom: '1.8rem' },
  boutons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  visageBloc: { display: 'flex', justifyContent: 'center' },
};
