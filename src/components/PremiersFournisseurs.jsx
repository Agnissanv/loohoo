import React, { useEffect, useState } from 'react';
import { recupererPremiersFournisseurs } from '../api/fournisseurs.js';
import { URL_PROFIL_FOURNISSEUR } from '../config.js';
import { urlReduite } from '../utils/affichage.js';

const MINIMUM = 4; // en dessous, la section reste cachée (même seuil que « Fournisseurs à la une » sur la plateforme)

// « Nos premiers fournisseurs vérifiés » : de vrais fournisseurs, qui ont accepté d'apparaître,
// avec la photo prise par l'équipe lors de la visite terrain (migration 0028). Remplace les témoignages.
export default function PremiersFournisseurs() {
  const [liste, setListe] = useState([]);
  useEffect(() => { recupererPremiersFournisseurs(8).then(setListe); }, []);
  if (liste.length < MINIMUM) return null;

  return (
    <section className="section" aria-labelledby="titre-premiers">
      <div className="container">
        <h2 id="titre-premiers" className="section-titre">Nos premiers fournisseurs vérifiés</h2>
        <ul className="premiers-rangee">
          {liste.map((f) => (
            <li key={f.id} className="premier">
              <span className="premier-photo">
                <img src={urlReduite(f.photo_url, 640)} alt={`${f.nom}, photo prise lors de la visite de LOOHOO`} loading="lazy" decoding="async" />
              </span>
              <div className="premier-texte">
                <strong>{f.nom}</strong>
                <span>{[f.specialite, f.commune || f.ville].filter(Boolean).join(' · ')}</span>
                <a href={URL_PROFIL_FOURNISSEUR(f)}>Voir le profil</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
