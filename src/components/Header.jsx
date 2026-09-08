import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.barre}>
        <a href="#accueil" style={styles.logoLigne}>
          <img src="/logo.jpeg" alt="LOOHOO" style={styles.logo} width="40" height="40" />
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
    position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255, 249, 243, 0.92)',
    backdropFilter: 'blur(6px)', borderBottom: '1px solid var(--loo-line)',
  },
  barre: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' },
  logoLigne: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logo: { borderRadius: '10px' },
  logoTexte: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--loo-ink)' },
  nav: { display: 'flex', alignItems: 'center', gap: '1.8rem' },
  lien: { fontWeight: 600, fontSize: '0.92rem', color: 'var(--loo-ink)' },
};
