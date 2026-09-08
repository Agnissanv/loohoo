import React from 'react';
import { optimiserImageCloudinary } from '../utils/cloudinaryOptimize.js';

export default function ProduitCarteMarketplace({ produit }) {
  const enPromo = produit.prixBarre && produit.prixBarre > produit.prix;

  return (
    <a
      href={`https://${produit.boutique.sousDomaine}/produit/${produit.id}`}
      target="_blank"
      rel="noreferrer"
      className="carte"
      style={styles.carte}
    >
      <div style={styles.imageBloc}>
        {produit.image ? (
          <img src={optimiserImageCloudinary(produit.image)} alt={produit.nom} style={styles.image} loading="lazy" />
        ) : (
          <span style={{ fontSize: '2rem', color: 'var(--loo-orange)' }}>◈</span>
        )}
      </div>

      <span className="eyebrow" style={{ fontSize: '0.7rem' }}>{produit.boutique.nom}</span>
      <h3 style={styles.nom}>{produit.nom}</h3>

      <div style={styles.prixLigne}>
        <span style={styles.prix}>{produit.prix.toLocaleString('fr-FR')} F CFA</span>
        {enPromo && <span style={styles.prixBarre}>{produit.prixBarre.toLocaleString('fr-FR')} F</span>}
      </div>
    </a>
  );
}

const styles = {
  carte: { display: 'flex', flexDirection: 'column', padding: '1rem' },
  imageBloc: {
    aspectRatio: '4 / 3', background: 'var(--loo-cream-dark)', borderRadius: 'var(--radius-sm)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '0.8rem',
  },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  nom: { fontSize: '0.95rem', margin: '0.3rem 0 0.5rem', fontFamily: 'var(--font-body)', fontWeight: 600 },
  prixLigne: { display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' },
  prix: { fontWeight: 700, color: 'var(--loo-red)' },
  prixBarre: { textDecoration: 'line-through', opacity: 0.5, fontSize: '0.82rem' },
};
