import React from 'react';
import MarqueVisage from './MarqueVisage.jsx';
import SourireDiviseur from './SourireDiviseur.jsx';

export default function Footer() {
  return (
    <footer id="partenaire">
      <SourireDiviseur fond="var(--loo-papier)" suivant="var(--loo-encre)" />

      <div style={styles.footer}>
        <div className="container" style={styles.contenu}>
          <div>
            <div style={styles.logoLigne}>
              <MarqueVisage couleur="var(--loo-papier)" taille={40} />
              <span style={styles.logoTexte}>LOOHOO</span>
            </div>
            <p style={styles.slogan}>Les produits rares au meilleur prix.</p>
          </div>

          <div style={styles.contact}>
            <h4 style={styles.titreColonne}>Ouvrir votre boutique avec LOOHOO</h4>
            <p style={styles.texte}>
              Vous vendez des produits spécialisés et voulez votre propre boutique sur un
              sous-domaine LOOHOO ? Contactez-nous :
            </p>
            {/* TODO : remplacer par la vraie adresse e-mail / numéro de contact LOOHOO */}
            <a href="mailto:contact@looh-oo.com" className="btn btn-clair" style={{ marginTop: '0.8rem' }}>
              contact@looh-oo.com
            </a>
          </div>
        </div>

        <div className="container" style={styles.copyright}>
          © {new Date().getFullYear()} LOOHOO — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: 'var(--loo-encre)', paddingTop: '3rem', color: 'var(--loo-papier)' },
  contenu: { display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', paddingBottom: '2rem' },
  logoLigne: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoTexte: { fontFamily: 'var(--police-affiche)', fontWeight: 700, fontSize: '1.25rem' },
  slogan: { opacity: 0.75, marginTop: '0.6rem', maxWidth: '280px' },
  contact: { maxWidth: '360px' },
  titreColonne: { fontSize: '0.95rem', marginBottom: '0.6rem', fontWeight: 600 },
  texte: { opacity: 0.75, fontSize: '0.9rem', margin: 0 },
  copyright: {
    borderTop: '1px solid rgba(255,248,239,0.15)', padding: '1.2rem 1.5rem',
    fontSize: '0.78rem', opacity: 0.6, textAlign: 'center', fontFamily: 'var(--police-etiquette)',
  },
};
