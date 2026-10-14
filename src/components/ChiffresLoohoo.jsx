import React, { useEffect, useState } from 'react';
import { recupererChiffresPublics } from '../api/fournisseurs.js';

const nombre = (n) => Number(n).toLocaleString('fr-FR');

// « LOOHOO aujourd'hui » : les mêmes chiffres que la plateforme fournisseurs, comptés dans la base (jamais saisis à la main)
export default function ChiffresLoohoo() {
  const [c, setC] = useState(null);
  useEffect(() => { recupererChiffresPublics().then(setC); }, []);
  if (!c) return null;
  const lignes = [
    [c.verifies, c.verifies > 1 ? 'fournisseurs vérifiés' : 'fournisseur vérifié'],
    [c.produits, c.produits > 1 ? 'produits publiés' : 'produit publié'],
    [c.pays, 'pays'],
  ];
  return (
    <aside className="chiffres" aria-labelledby="titre-chiffres">
      <h2 id="titre-chiffres" className="chiffres-titre">LOOHOO aujourd'hui</h2>
      <dl>
        {lignes.map(([n, l]) => (
          <div key={l}><dt>{l}</dt><dd>{nombre(n)}</dd></div>
        ))}
      </dl>
    </aside>
  );
}
