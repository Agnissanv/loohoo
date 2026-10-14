import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { URL_CONNEXION, URL_INSCRIPTION } from '../config.js';

// En-tête sur une ligne : logo, trois liens, « Se connecter » et « Créer un compte ».
// Sur téléphone : logo, « Créer un compte » et le menu.
export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const { pathname } = useLocation();
  const fermer = () => setMenuOuvert(false);

  useEffect(() => { setMenuOuvert(false); }, [pathname]);
  useEffect(() => {
    if (!menuOuvert) return undefined;
    const echap = (e) => { if (e.key === 'Escape') setMenuOuvert(false); };
    window.addEventListener('keydown', echap);
    return () => window.removeEventListener('keydown', echap);
  }, [menuOuvert]);

  return (
    <header className="entete">
      <div className="container entete-barre">
        <Link to="/" className="entete-logo" onClick={fermer} aria-label="LOOHOO, accueil">
          <img src="/logo.webp" alt="" width="40" height="40" />
          <span>LOOHOO</span>
        </Link>

        <nav id="menu-principal" className={`entete-nav${menuOuvert ? ' entete-nav-ouverte' : ''}`} aria-label="Navigation principale">
          <Link to="/#portes" onClick={fermer}>Que venez-vous faire ?</Link>
          <Link to="/#comment" onClick={fermer}>Comment ça marche</Link>
          <Link to="/a-propos" onClick={fermer}>À propos</Link>
          <a href={URL_CONNEXION} className="entete-connexion" onClick={fermer}>Se connecter</a>
        </nav>

        <div className="entete-actions">
          <a href={URL_INSCRIPTION} className="btn btn-primary entete-compte">Créer un compte</a>
          <button type="button" className="entete-menu" onClick={() => setMenuOuvert((o) => !o)}
            aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOuvert} aria-controls="menu-principal">
            {menuOuvert ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
