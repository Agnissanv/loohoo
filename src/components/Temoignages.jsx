import React from 'react';
import { TEMOIGNAGES } from '../data/temoignages.js';

const initiales = (nom) => nom.split(/\s+/).filter(Boolean).slice(0, 2).map((m) => m[0]).join('').toUpperCase();

// « Ils utilisent LOOHOO »
export default function Temoignages() {
  if (TEMOIGNAGES.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: '2rem' }} aria-labelledby="titre-temoignages">
      <div className="container">
        <span className="etiquette">Ils utilisent LOOHOO</span>
        <h2 id="titre-temoignages" className="section-titre">Ce qu'en disent acheteurs et fournisseurs.</h2>
        <div className="loo-temoignages">
          {TEMOIGNAGES.map((t) => (
            <figure key={t.nom} className="carte loo-temoignage">
              <blockquote>« {t.texte} »</blockquote>
              <figcaption>
                <span className="loo-temoin-avatar" aria-hidden="true">{initiales(t.nom)}</span>
                <span><strong>{t.nom}</strong><br /><span style={{ opacity: 0.65, fontSize: '0.85rem' }}>{t.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
