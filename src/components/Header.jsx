import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.barre}>
        <a href="#accueil" style={styles.logoLigne}>
          <img src="/logo.jpeg" alt="LOOHOO" style={styles.logo} width="38" height="38" />
          <span style={styles.logoTexte}>LOOHOO</span>
        </a>

        <nav className="loo-nav" style={styles.nav}>
          <a href="#boutiques" style={styles.lien}>Nos boutiques</a>
          <a href="#marketplace" style={styles.lien}>Marketplace</a>
          <a href="#partenaire" className="btn btn-primary" style={{ padding: '0.6em 1.3em', fontSize: '0.85rem' }}>
            Ouvrir ma boutique
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255, 248, 239, 0.9)',
    backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--loo-papier-ombre)',
  },
  barre: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' },
  logoLigne: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logo: { borderRadius: '8px 8px 8px 2px' },
  logoTexte: { fontFamily: 'var(--police-affiche)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--loo-encre)' },
  nav: { display: 'flex', alignItems: 'center', gap: '1.8rem' },
  lien: { fontWeight: 600, fontSize: '0.9rem', color: 'var(--loo-encre)' },
};
