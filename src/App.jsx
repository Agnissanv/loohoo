import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Accueil from './pages/Accueil.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import Confidentialite from './pages/Confidentialite.jsx';
import Conditions from './pages/Conditions.jsx';

function GestionDuScroll() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const cible = document.getElementById(hash.slice(1));
      if (cible) {
        cible.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, key]);

  return null;
}

function Introuvable() {
  return (
    <section className="section">
      <div className="container">
        <span className="etiquette">Erreur 404</span>
        <h1 className="section-titre">Cette page n'existe pas.</h1>
        <p className="section-intro">Le lien est peut-être erroné, ou la page a été déplacée.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <GestionDuScroll />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="*" element={<Introuvable />} />
      </Routes>
      <Footer />
    </div>
  );
}