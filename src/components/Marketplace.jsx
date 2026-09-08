import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { recupererMarketplace } from '../api/marketplace.js';
import ProduitCarteMarketplace from './ProduitCarteMarketplace.jsx';

export default function Marketplace() {
  const [etals, setEtals] = useState(null);

  useEffect(() => {
    recupererMarketplace().then(setEtals);
  }, []);

  return (
    <section id="marketplace" className="section">
      <div className="container">
        <span className="etiquette">Toutes nos boutiques, un seul endroit</span>
        <h2 className="section-titre">La marketplace LOOHOO</h2>
        <p className="section-intro">
          Un aperçu de chaque boutique. Faites glisser pour parcourir, cliquez pour commander
          directement chez la boutique concernée.
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          {etals === null && <SqueletteEtal />}

          {etals?.length === 0 && (
            <p style={{ opacity: 0.6 }}>Aucun produit disponible pour le moment.</p>
          )}

          {etals?.map(({ boutique, produits }) => (
            <div key={boutique.id} style={styles.blocEtal}>
              <div style={styles.enteteEtal}>
                <h3 style={{ fontSize: '1.1rem' }}>{boutique.nom}</h3>
                <a href={`https://${boutique.sousDomaine}`} target="_blank" rel="noreferrer" style={styles.lienEtal}>
                  Voir toute la boutique <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="etal-rangee">
                {produits.map((p) => (
                  <ProduitCarteMarketplace key={p.id} produit={p} sousDomaine={boutique.sousDomaine} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SqueletteEtal() {
  return (
    <div className="etal-rangee">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="carte" style={{ padding: '0.9rem', flex: '0 0 200px' }}>
          <div className="loo-squelette" style={{ aspectRatio: '4 / 3', marginBottom: '0.7rem' }} />
          <div className="loo-squelette" style={{ width: '80%', height: '13px', marginBottom: '0.5rem' }} />
          <div className="loo-squelette" style={{ width: '45%', height: '13px' }} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  blocEtal: { marginBottom: '2rem' },
  enteteEtal: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.9rem', gap: '1rem' },
  lienEtal: { fontSize: '0.85rem', fontWeight: 600, color: 'var(--loo-rouge)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' },
};
