import React, { useEffect, useState } from 'react';
import { recupererPays } from '../api/fournisseurs.js';
import { lignePays } from '../utils/affichage.js';

// Les photos défilent en fondu. Pour changer une image : remplacer le fichier dans public/images/ (ou modifier cette liste).
// La photo de pagnes ouvre le carrousel (demande du client).
const IMAGES = [
  { src: '/images/hero-adjame.jpg', legende: 'Fournisseurs', alt: "Pagnes et tissus empilés sur un étal du marché d'Adjamé, à Abidjan", credit: 'Eva Blue, Unsplash', position: 'center 40%' },
  { src: '/images/vendeur-piments.jpg', legende: 'Vendeurs', alt: 'Un vendeur assis devant des piments et des sacs de condiments', credit: 'kazys-photography, Pexels', position: 'center 45%' },
  { src: '/images/acheteurs-marche.jpg', legende: 'Clients', alt: "Des acheteurs au milieu des sacs de riz d'un marché", credit: 'el-bataky-photos, Pexels', position: 'center 55%' },
  { src: '/images/entrepot-sacs.jpg', legende: 'Fournisseurs', alt: "Un entrepôt de marché rempli de sacs d'épices et de tubercules", credit: 'phinley-sperrer, Pexels', position: 'center 50%' },
  { src: '/images/hero-etal.jpg', legende: 'Vendeurs', alt: 'Une commerçante souriante derrière son étal', credit: 'iv image.ng, Pexels', position: 'center 30%' },
];
const DUREE_MS = 4500;

// Haut de page : le texte sur fond orange très clair, et le carrousel de photos du marché à côté (dessous sur téléphone).
export default function Hero() {
  const [actif, setActif] = useState(0);
  const [pause, setPause] = useState(false);
  const [reduit, setReduit] = useState(false);
  const [pays, setPays] = useState(null);

  useEffect(() => { recupererPays().then(setPays); }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduit(mq.matches);
    const maj = (e) => setReduit(e.matches);
    mq.addEventListener('change', maj);
    return () => mq.removeEventListener('change', maj);
  }, []);

  // Défilement automatique, arrêté au survol, si la personne préfère moins d'animation ou si l'onglet est caché
  useEffect(() => {
    if (pause || reduit) return undefined;
    const t = setInterval(() => { if (document.visibilityState === 'visible') setActif((i) => (i + 1) % IMAGES.length); }, DUREE_MS);
    return () => clearInterval(t);
  }, [pause, reduit]);

  return (
    <section id="accueil" className="haut">
      <div className="container haut-grille">
        <div className="haut-texte">
          <p className="haut-surtitre">Le marché qui connecte fournisseurs, vendeurs et clients.</p>
          <h1 className="haut-titre">LOOHOO, le grand marché digital d'Afrique.</h1>
          <p className="haut-sens">
            LOOHOO signifie « marché » en dan (yacouba).<br />
            <span className="haut-pays">{lignePays(pays)}</span>
          </p>
          <a href="#portes" className="btn btn-primary haut-bouton">Entrer dans le marché</a>
          <p className="haut-signature">Votre marché connecté au monde.</p>
        </div>

        <div className="haut-carrousel" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}
          aria-roledescription="carrousel" aria-label="Photos de marchés et de commerçants">
          {IMAGES.map((img, i) => (
            <img
              key={img.src}
              className={`haut-photo${i === actif ? ' haut-photo-active' : ''}`}
              src={img.src}
              alt={i === actif ? img.alt : ''}
              aria-hidden={i === actif ? undefined : 'true'}
              style={{ objectPosition: img.position }}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : undefined}
            />
          ))}
          <div className="haut-carrousel-pied">
            <span className="haut-legende">{IMAGES[actif].legende}</span>
            <div className="haut-points" role="tablist" aria-label="Choisir la photo">
              {IMAGES.map((img, i) => (
                <button key={img.src} type="button" role="tab" aria-selected={i === actif} aria-label={`Photo ${i + 1} sur ${IMAGES.length}`}
                  className={`haut-point${i === actif ? ' haut-point-actif' : ''}`} onClick={() => setActif(i)} />
              ))}
            </div>
          </div>
          <span className="haut-credit">Photo : {IMAGES[actif].credit}</span>
        </div>
      </div>
    </section>
  );
}
