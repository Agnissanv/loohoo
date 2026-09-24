import React, { useEffect } from 'react';

// Petit repère jaune pour toute information encore manquante (à rechercher avant la mise en ligne : "À COMPLÉTER")
export function AC({ children }) {
  return <span className="a-completer">[À COMPLÉTER : {children}]</span>;
}

export default function PageLegale({ titre, dateMaj, children }) {
  useEffect(() => {
    const ancienTitre = document.title;
    document.title = `${titre} — LOOHOO`;
    return () => { document.title = ancienTitre; };
  }, [titre]);

  return (
    <section className="section">
      <div className="container texte-legal">
        <span className="etiquette">Informations légales</span>
        <h1 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '0.5rem 0 0.4rem' }}>{titre}</h1>
        <p className="texte-legal-maj">Dernière mise à jour : {dateMaj}</p>
        {children}
      </div>
    </section>
  );
}