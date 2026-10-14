import React from 'react';

const ACTEURS = [
  { nom: 'Fournisseurs', detail: 'Grossistes, fabricants, producteurs, importateurs' },
  { nom: 'Vendeurs', detail: 'E-commerçants et revendeurs' },
  { nom: 'Clients', detail: 'Ceux qui achètent pour eux' },
];

// « Un marché, trois acteurs » : LOOHOO au centre, chaque acteur relié au marché
export default function TroisActeurs() {
  return (
    <section className="section acteurs" aria-labelledby="titre-acteurs">
      <div className="container">
        <h2 id="titre-acteurs" className="section-titre acteurs-titre">Un marché, trois acteurs.</h2>
        <div className="acteurs-schema">
          <div className="acteurs-centre">
            <strong>LOOHOO</strong>
            <span>le marché qui connecte</span>
          </div>
          <ul className="acteurs-liste">
            {ACTEURS.map((a) => (
              <li key={a.nom}>
                <strong>{a.nom}</strong>
                <span>{a.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
