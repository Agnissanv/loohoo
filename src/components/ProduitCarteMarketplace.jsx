import React from 'react';
import { optimiserImageCloudinary } from '../utils/cloudinaryOptimize.js';

export default function ProduitCarteMarketplace({ produit, sousDomaine }) {
  const enPromo = produit.prixBarre && produit.prixBarre > produit.prix;

  return (
    <a
      href={`https://${sousDomaine}/produit/${produit.id}`}
      target="_blank"
      rel="noreferrer"
      className="carte"
      style={styles.carte}
    >
      <div style={styles.imageBloc}>
        {produit.image ? (
          <img src={optimiserImageCloudinary(produit.image)} alt={produit.nom} style={styles.image} loading="lazy" />
        ) : (
          <span style={{ fontSize: '1.8rem', color: 'var(--loo-orange)' }}>◈</span>
        )}
      </div>

      <h3 style={styles.nom}>{produit.nom}</h3>

      <div style={styles.prixLigne}>
        <span style={styles.prix}>{produit.prix.toLocaleString('fr-FR')} F</span>
        {enPromo && <span style={styles.prixBarre}>{produit.prixBarre.toLocaleString('fr-FR')} F</span>}
      </div>
    </a>
  );
}

const styles = {
  carte: { display: 'flex', flexDirection: 'column', padding: '0.9rem' },
  imageBloc: {
    aspectRatio: '4 / 3', background: 'var(--loo-papier-ombre)', borderRadius: '4px 14px 4px 14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '0.7rem',
  },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  nom: { fontSize: '0.92rem', margin: '0 0 0.5rem', fontFamily: 'var(--police-texte)', fontWeight: 600, lineHeight: 1.3 },
  prixLigne: { display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap', fontFamily: 'var(--police-etiquette)' },
  prix: { fontWeight: 600, color: 'var(--loo-rouge)', fontSize: '0.95rem' },
  prixBarre: { textDecoration: 'line-through', opacity: 0.5, fontSize: '0.78rem' },
};
