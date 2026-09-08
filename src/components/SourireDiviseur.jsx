import React from 'react';

// Le trait de coupe entre deux sections, dessiné comme le sourire du logo LOOHOO —
// deux points (les yeux) au-dessus d'une courbe. Signature visuelle réutilisée à
// chaque rupture de couleur de la page plutôt qu'une simple ligne droite.
export default function SourireDiviseur({ fond = 'var(--loo-encre)', suivant = 'var(--loo-papier)' }) {
  return (
    <div style={{ position: 'relative', background: fond, lineHeight: 0 }} aria-hidden="true">
      <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px' }}>
        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: suivant, display: 'block' }} />
        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: suivant, display: 'block' }} />
      </div>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ width: '100%', height: '52px', display: 'block' }}>
        <path d="M0,0 L1440,0 L1440,18 Q1080,64 720,30 Q360,-4 0,26 Z" fill={suivant} />
      </svg>
    </div>
  );
}
