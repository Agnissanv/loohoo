import React from 'react';
import { ArrowRight } from 'lucide-react';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';

// Hero « récit » : une vraie photo de marché plein cadre, une phrase, une action.
export default function Hero() {
  return (
    <section id="accueil" className="loo-hero">
      <img className="loo-hero-fond" src="/images/hero-adjame.jpg" alt="Pagnes et tissus empilés sur un étal du marché d'Adjamé, à Abidjan" width="1600" height="1067" fetchpriority="high" />
      <div className="loo-hero-voile" aria-hidden="true" />

      <div className="container loo-hero-contenu">
        <p className="loo-hero-surtitre">Côte d'Ivoire · bientôt au Mali</p>
        <h1 className="loo-hero-titre">
          Les produits rares<br />
          <em>au meilleur prix.</em>
        </h1>
        <p className="loo-hero-texte">
          LOOHOO met en relation fournisseurs, vendeurs et clients. Chaque fournisseur est contrôlé par notre équipe avant
          d'apparaître : entreprise, produits et stock.
        </p>
        <div className="loo-hero-actions">
          <a href={URL_ACHETER} className="loo-hero-lien">Trouver un fournisseur <ArrowRight size={18} /></a>
          <a href={URL_DEVENIR_FOURNISSEUR} className="loo-hero-bouton">Je suis fournisseur</a>
        </div>
      </div>

      <span className="loo-hero-credit">Photo : Eva Blue, Unsplash</span>
    </section>
  );
}
