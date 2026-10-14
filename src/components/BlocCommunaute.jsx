import React, { useEffect, useState } from 'react';
import { recupererLiensCommunaute } from '../api/fournisseurs.js';
import { RESEAUX } from './IconesReseaux.jsx';

// « Rejoignez la communauté » : un bouton par canal rempli dans l'administration (même réglage que la plateforme).
// Aucun lien rempli : le bloc ne s'affiche pas.
export default function BlocCommunaute() {
  const [liens, setLiens] = useState({});
  useEffect(() => { recupererLiensCommunaute().then(setLiens); }, []);
  const reseaux = RESEAUX.filter((r) => liens[r.cle]);
  if (reseaux.length === 0) return null;

  return (
    <section className="communaute-section" aria-labelledby="titre-communaute">
      <div className="container">
        <div className="communaute">
          <h2 id="titre-communaute">Rejoignez la communauté</h2>
          <p>Nouveautés, vidéos et annonces du marché.</p>
          <ul>
            {reseaux.map(({ cle, nom, Icone }) => (
              <li key={cle}>
                <a href={liens[cle]} target="_blank" rel="noreferrer"><Icone size={18} /> {nom}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
