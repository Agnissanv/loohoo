import React from 'react';

// Le visage LOOHOO redessiné en trait — les deux yeux et le sourire du logo,
// utilisés en grand comme élément graphique plutôt qu'en relisant le fichier logo.
export default function MarqueVisage({ couleur = 'var(--loo-papier)', taille = 260 }) {
  return (
    <svg
      viewBox="0 0 200 120"
      width={taille}
      height={(taille * 120) / 200}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <circle cx="62" cy="52" r="34" fill="none" stroke={couleur} strokeWidth="14" />
      <circle cx="138" cy="52" r="34" fill="none" stroke={couleur} strokeWidth="14" />
      <path d="M46,96 Q100,124 154,96" fill="none" stroke={couleur} strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}
