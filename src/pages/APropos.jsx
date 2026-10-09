import React, { useEffect } from 'react';
import Mission from '../components/Mission.jsx';
import Services from '../components/Services.jsx';
import Boutiques from '../components/Boutiques.jsx';

// « En savoir plus sur LOOHOO » : l'histoire de la marque, ses services et les boutiques de l'écosystème.
export default function APropos({ onOuvrirBientotDisponible }) {
  useEffect(() => {
    const ancien = document.title;
    document.title = 'À propos — LOOHOO, le grand marché digital';
    return () => { document.title = ancien; };
  }, []);

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <span className="etiquette">À propos</span>
          <h1 className="section-titre" style={{ maxWidth: '20ch' }}>LOOHOO, le grand marché digital d'Afrique.</h1>
          <p className="section-intro">Le marché qui connecte fournisseurs, vendeurs et clients.</p>
        </div>
      </section>
      <Mission />
      <Services onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <Boutiques onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
    </>
  );
}
