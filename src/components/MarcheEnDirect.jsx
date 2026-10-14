import React, { useEffect, useState } from 'react';
import { recupererMarcheEnDirect } from '../api/fournisseurs.js';
import { ilYa } from '../utils/affichage.js';

const MINIMUM = 3; // en dessous, pas assez d'activité réelle : le bandeau reste caché
const ROTATION_MS = 4000;

function texte(e) {
  if (e.genre === 'verifie') return `${e.fournisseur} vérifié à ${e.commune || e.ville}`;
  if (e.genre === 'produit') return e.categorie && e.categorie !== 'Autre' ? `Nouveau produit en ${e.categorie}` : 'Nouveau produit publié';
  return `${e.fournisseur} a ajouté ${e.nombre} produits`;
}

// « Le marché en direct » : l'activité réelle de la plateforme, au fil de l'eau (migration 0028).
// Sur ordinateur, les trois derniers événements côte à côte ; sur téléphone, un à la fois.
export default function MarcheEnDirect() {
  const [evenements, setEvenements] = useState([]);
  const [actif, setActif] = useState(0);

  useEffect(() => { recupererMarcheEnDirect(8).then(setEvenements); }, []);

  useEffect(() => {
    if (evenements.length < MINIMUM || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setActif((i) => (i + 1) % evenements.length), ROTATION_MS);
    return () => clearInterval(t);
  }, [evenements]);

  if (evenements.length < MINIMUM) return null;
  const courant = evenements[actif % evenements.length];

  return (
    <section className="direct" aria-label="Le marché en direct">
      <div className="container direct-barre">
        <span className="direct-titre"><span className="direct-point" aria-hidden="true" /> Le marché en direct</span>
        <ul className="direct-liste">
          {evenements.slice(0, 3).map((e) => (
            <li key={`${e.genre}-${e.quand}-${e.fournisseur || e.categorie}`}>{texte(e)} · {ilYa(e.quand)}</li>
          ))}
        </ul>
        <p className="direct-un" aria-live="off">{texte(courant)} · {ilYa(courant.quand)}</p>
      </div>
    </section>
  );
}
