import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" style={styles.section}>
      <div className="container loo-hero-grille" style={styles.grille}>
        <div>
          <span className="eyebrow">La marque derrière vos boutiques préférées</span>
          <h1 style={styles.titre}>
            Les produits rares<br />au meilleur prix.
          </h1>
          <p style={styles.texte}>
            LOOHOO réunit plusieurs boutiques spécialisées — chacune experte dans son
            domaine — sous une même promesse : des produits qu'on ne trouve pas partout,
            au juste prix, livrés chez vous.
          </p>
          <div style={styles.boutons}>
            <a href="#boutiques" className="btn btn-primary">Découvrir nos boutiques</a>
            <a href="#marketplace" className="btn btn-outline">Explorer la marketplace</a>
          </div>
        </div>

        <div style={styles.logoBloc}>
          <img src="/logo.jpeg" alt="LOOHOO" style={styles.logo} />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { paddingTop: '3.5rem', paddingBottom: '3rem' },
  grille: {
    display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center',
  },
  titre: { fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, margin: '0.5rem 0 1.2rem' },
  texte: { maxWidth: '480px', fontSize: '1.05rem', opacity: 0.8, marginBottom: '1.8rem' },
  boutons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  logoBloc: { display: 'flex', justifyContent: 'center' },
  logo: { width: '100%', maxWidth: '360px', borderRadius: '28px' },
};
