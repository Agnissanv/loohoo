import React from 'react';

export default function Footer() {
  return (
    <footer id="partenaire" style={styles.footer}>
      <div className="container" style={styles.contenu}>
        <div>
          <div style={styles.logoLigne}>
            <img src="/logo.jpeg" alt="LOOHOO" width="36" height="36" style={{ borderRadius: '8px' }} />
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
          <a href="mailto:contact@looh-oo.com" className="btn btn-blanc" style={{ marginTop: '0.8rem' }}>
            contact@looh-oo.com
          </a>
        </div>
      </div>

      <div className="container" style={styles.copyright}>
        © {new Date().getFullYear()} LOOHOO — Tous droits réservés
      </div>
    </footer>
  );
}

const styles = {
  footer: { marginTop: '2rem', background: 'var(--gradient-marque)', paddingTop: '3rem', color: 'var(--loo-white)' },
  contenu: { display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', paddingBottom: '2rem' },
  logoLigne: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoTexte: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem' },
  slogan: { opacity: 0.9, marginTop: '0.6rem', maxWidth: '280px' },
  contact: { maxWidth: '360px' },
  titreColonne: { fontSize: '0.95rem', marginBottom: '0.6rem' },
  texte: { opacity: 0.9, fontSize: '0.9rem', margin: 0 },
  copyright: {
    borderTop: '1px solid rgba(255,255,255,0.25)', padding: '1.2rem 1.5rem',
    fontSize: '0.78rem', opacity: 0.85, textAlign: 'center',
  },
};
