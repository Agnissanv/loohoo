import React, { useEffect, useState } from 'react';
import { recupererMarketplace } from '../api/marketplace.js';
import ProduitCarteMarketplace from './ProduitCarteMarketplace.jsx';

export default function Marketplace() {
  const [produits, setProduits] = useState(null);

  useEffect(() => {
    recupererMarketplace().then(setProduits);
  }, []);

  return (
    <section id="marketplace" className="section" style={{ background: 'var(--loo-white)' }}>
      <div className="container">
        <span className="eyebrow">Toutes nos boutiques, un seul endroit</span>
        <h2 className="section-titre">La marketplace LOOHOO</h2>
        <p className="section-intro">Un aperçu des produits disponibles chez nos boutiques. Cliquez pour commander directement chez la boutique concernée.</p>

        <div style={styles.grille}>
          {produits === null && Array.from({ length: 4 }).map((_, i) => <SqueletteCarte key={i} />)}

          {produits?.length === 0 && (
            <p style={{ opacity: 0.6, gridColumn: '1 / -1' }}>Aucun produit disponible pour le moment.</p>
          )}

          {produits?.map((p) => (
            <ProduitCarteMarketplace key={`${p.boutique.id}-${p.id}`} produit={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SqueletteCarte() {
  return (
    <div className="carte" style={{ padding: '1rem' }}>
      <div className="loo-squelette" style={{ aspectRatio: '4 / 3', marginBottom: '0.8rem' }} />
      <div className="loo-squelette" style={{ width: '40%', height: '10px', marginBottom: '0.5rem' }} />
      <div className="loo-squelette" style={{ width: '80%', height: '14px', marginBottom: '0.6rem' }} />
      <div className="loo-squelette" style={{ width: '50%', height: '14px' }} />
    </div>
  );
}

const styles = {
  grille: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.2rem', marginTop: '2.5rem',
  },
};
