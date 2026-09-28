import React, { useEffect, useState } from 'react';
import { ArrowUpRight, BadgeCheck, Factory, MapPin, Package } from 'lucide-react';
import { recupererFournisseursVedette } from '../api/fournisseurs.js';
import { optimiserImageCloudinary } from '../utils/cloudinaryOptimize.js';

const LIMITE = 6;
const URL_PLATEFORME = 'https://fournisseurs.looh-oo.com';

export default function Fournisseurs() {
  const [liste, setListe] = useState(null); // null = chargement

  useEffect(() => {
    recupererFournisseursVedette(LIMITE).then(setListe);
  }, []);

  return (
    <section id="fournisseurs" className="section">
      <div className="container">
        <span className="etiquette">Sourcing B2B</span>
        <h2 className="section-titre">Nos fournisseurs</h2>
        <p className="section-intro">
          Des grossistes et fabricants vérifiés par l'équipe LOOHOO, avec leur catalogue au prix de gros.
        </p>

        {liste === null && (
          <div className="loo-fournisseurs-grille">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="carte" style={{ padding: '0.9rem' }}>
                <div className="loo-squelette" style={{ aspectRatio: '4 / 3', marginBottom: '0.8rem' }} />
                <div className="loo-squelette" style={{ width: '70%', height: '14px', marginBottom: '0.5rem' }} />
                <div className="loo-squelette" style={{ width: '40%', height: '12px' }} />
              </div>
            ))}
          </div>
        )}

        {liste !== null && liste.length === 0 && (
          <p style={{ opacity: 0.7, marginTop: '2rem' }}>
            Les premiers fournisseurs vérifiés seront bientôt présentés ici.
          </p>
        )}

        {liste !== null && liste.length > 0 && (
          <div className="loo-fournisseurs-grille">
            {liste.map((f) => <CarteFournisseur key={f.id} f={f} />)}
          </div>
        )}

        <a href={URL_PLATEFORME} className="btn btn-primary" style={{ marginTop: '2.2rem' }}>
          Voir tous les fournisseurs <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function CarteFournisseur({ f }) {
  return (
    <a href={`${URL_PLATEFORME}/grossiste/${f.id}`} target="_blank" rel="noreferrer" className="carte" style={styles.carte}>
      <div style={styles.imageBloc}>
        {f.photo ? (
          <img src={optimiserImageCloudinary(f.photo, 500)} alt={f.nom} style={styles.image} loading="lazy" />
        ) : (
          <Package size={28} color="var(--loo-orange)" />
        )}
      </div>

      <div style={styles.badges}>
        {f.badge_verifie && <span className="badge badge-verifie"><BadgeCheck size={13} /> Vérifié</span>}
        {f.est_fabricant && <span className="badge badge-fabricant"><Factory size={13} /> Fabricant local</span>}
      </div>

      <h3 style={{ fontSize: '1.02rem', lineHeight: 1.25 }}>{f.nom}</h3>
      <span className="etiquette" style={{ color: 'var(--loo-encre)', opacity: 0.6 }}>{f.categorie}</span>

      <div style={styles.pied}>
        <span style={styles.info}><MapPin size={14} /> {f.commune ? `${f.commune}, ${f.ville}` : f.ville}</span>
        <span style={styles.info}>
          <Package size={14} /> {f.nb_produits} produit{f.nb_produits > 1 ? 's' : ''}
        </span>
      </div>
    </a>
  );
}

const styles = {
  carte: { display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.9rem' },
  imageBloc: {
    aspectRatio: '4 / 3', background: 'var(--loo-papier-ombre)', borderRadius: '4px 14px 4px 14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  badges: { display: 'flex', gap: '0.4rem', flexWrap: 'wrap', minHeight: '1.6rem' },
  pied: { display: 'flex', justifyContent: 'space-between', gap: '0.6rem', marginTop: '0.3rem', flexWrap: 'wrap' },
  info: { display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', opacity: 0.75 },
};