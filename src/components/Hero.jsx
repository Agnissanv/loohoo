import React from 'react';
import { ArrowRight } from 'lucide-react';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';

// Une promesse, deux portes, une vraie photo de marché.
export default function Hero() {
  return (
    <section id="accueil" className="loo-hero">
      <div className="container loo-hero-grille">
        <div className="loo-hero-texte">
          <span className="etiquette">Côte d'Ivoire · bientôt au Mali</span>
          <h1 className="loo-affiche">Les produits rares <span>au meilleur prix.</span></h1>
          <p className="loo-hero-sous">
            LOOHOO met en relation les acheteurs avec des grossistes et fabricants dont l'entreprise, les produits
            et le stock ont été contrôlés par notre équipe. Vous demandez un devis, vous négociez dans la messagerie, vous commandez.
          </p>
          <div className="loo-hero-actions">
            <a href={URL_ACHETER} className="btn btn-primary">Trouver un fournisseur <ArrowRight size={16} /></a>
            <a href={URL_DEVENIR_FOURNISSEUR} className="btn btn-outline">Je suis fournisseur</a>
          </div>
          <a href="#boutiques" className="loo-hero-lien">Ou découvrir les boutiques LOOHOO</a>
        </div>

        <figure className="loo-hero-photo">
          <div className="loo-cadre">
            <img src="/images/adjame-textiles.jpg" alt="Pagnes et tissus empilés sur un étal du marché d'Adjamé, à Abidjan" width="1600" height="1067" />
          </div>
          <figcaption className="etiquette">Marché d'Adjamé, Abidjan</figcaption>
        </figure>
      </div>
    </section>
  );
}
