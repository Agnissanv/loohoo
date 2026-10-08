import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { URL_ACHETER } from '../config.js';

export default function Header({ onOuvrirBientotDisponible }) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const { pathname } = useLocation();
  const [enHaut, setEnHaut] = useState(true);

  // Sur l'accueil, le menu flotte sur la photo tant qu'on n'a pas fait défiler la page
  useEffect(() => {
    const maj = () => setEnHaut(window.scrollY < 40);
    maj();
    window.addEventListener('scroll', maj, { passive: true });
    return () => window.removeEventListener('scroll', maj);
  }, []);
  const surPhoto = pathname === '/' && enHaut && !menuOuvert;

  function fermer() {
    setMenuOuvert(false);
  }

  return (
    <header style={styles.header} className={surPhoto ? 'loo-header-photo' : undefined}>
      <div className="container" style={styles.barre}>
        <Link to="/" style={styles.logoLigne} onClick={fermer}>
          <img src="/logo.webp" alt="LOOHOO" style={styles.logo} width="38" height="38" />
          <span style={styles.logoTexte}>LOOHOO</span>
        </Link>

        <button
          type="button"
          className="loo-nav-bouton-mobile"
          onClick={() => setMenuOuvert((o) => !o)}
          aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOuvert}
        >
          {menuOuvert ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOuvert ? 'loo-nav loo-nav-ouvert' : 'loo-nav'}>
          <Link to="/#parcours" style={styles.lien} onClick={fermer}>Mon parcours</Link>
          <Link to="/#comment" style={styles.lien} onClick={fermer}>Comment ça marche</Link>
          <Link to="/#boutiques" style={styles.lien} onClick={fermer}>Boutiques</Link>
          <a href={URL_ACHETER} className="btn btn-outline" style={{ padding: '0.55em 1.2em', fontSize: '0.85rem' }} onClick={fermer}>Trouver un fournisseur</a>
          <button
            type="button"
            className="btn btn-primary"
            style={{ padding: '0.6em 1.3em', fontSize: '0.85rem', border: 0 }}
            onClick={() => { fermer(); onOuvrirBientotDisponible(); }}
          >
            Créer ma boutique
          </button>
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
  lien: { fontWeight: 600, fontSize: '0.9rem', color: 'var(--loo-encre)' },
};