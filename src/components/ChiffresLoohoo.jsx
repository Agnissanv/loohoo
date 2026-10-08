import React, { useEffect, useState } from 'react';
import { recupererChiffresPublics } from '../api/fournisseurs.js';

const nombre = (n) => Number(n).toLocaleString('fr-FR');

// « LOOHOO aujourd'hui » : chiffres comptés dans la base. Rien ne s'affiche tant qu'il n'y a pas de fournisseur publié.
export default function ChiffresLoohoo() {
  const [c, setC] = useState(null);
  useEffect(() => { recupererChiffresPublics().then(setC); }, []);
  if (!c || c.fournisseurs === 0) return null;
  const lignes = [
    [c.verifies, c.verifies > 1 ? 'Fournisseurs vérifiés' : 'Fournisseur vérifié'],
    [c.produits, c.produits > 1 ? 'Produits publiés' : 'Produit publié'],
    [c.pays, c.pays > 1 ? 'Pays couverts' : 'Pays couvert'],
  ].filter(([n]) => n > 0);
  if (lignes.length === 0) return null;
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: '2rem' }} aria-label="LOOHOO aujourd'hui">
      <div className="container">
        <span className="etiquette">LOOHOO aujourd'hui</span>
        <div className="loo-chiffres">
          {lignes.map(([n, l]) => (
            <div key={l}><strong>{nombre(n)}</strong><span>{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
