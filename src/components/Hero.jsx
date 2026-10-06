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
              Côte d'Ivoire · bientôt au Mali
            </span>
            <h1 style={styles.titre}>
              Le marché qui connecte fournisseurs, vendeurs et clients.
            </h1>
            <p style={styles.texte}>
              Trouvez un fournisseur vérifié, présentez vos produits aux acheteurs en gros, ou lancez votre
              boutique en ligne. LOOHOO vous oriente selon ce que vous venez faire.
            </p>
            <div style={styles.boutons}>
              <a href="#parcours" className="btn btn-clair">Choisir mon parcours</a>
            </div>
          </div>

          <div style={styles.visageBloc}>
            <MarqueVisage taille={260} />
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
    display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center',
  },
  titre: {
    fontSize: 'clamp(2.1rem, 4.8vw, 3.4rem)', lineHeight: 1.06, margin: '0.6rem 0 1.2rem',
    color: 'var(--loo-papier)', fontWeight: 700, maxWidth: '18ch',
  },
  texte: { maxWidth: '520px', fontSize: '1.05rem', color: 'var(--loo-papier)', opacity: 0.92, marginBottom: '1.8rem' },
  boutons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  visageBloc: { display: 'flex', justifyContent: 'center' },
};
