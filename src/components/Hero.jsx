import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';
import { recupererPaysOuverts } from '../api/fournisseurs.js';

// Les photos défilent en fondu. Pour changer une image : remplacer le fichier dans public/images/ (ou modifier cette liste).
const IMAGES = [
  { src: '/images/hero-adjame.jpg', legende: 'Fournisseurs', alt: "Pagnes et tissus empilés sur un étal du marché d'Adjamé, à Abidjan", credit: 'Eva Blue, Unsplash', position: 'center 40%' },
  { src: '/images/vendeur-piments.jpg', legende: 'Vendeurs', alt: 'Un vendeur assis devant des piments et des sacs de condiments', credit: 'kazys-photography, Pexels', position: 'center 45%' },
  { src: '/images/acheteurs-marche.jpg', legende: 'Acheteurs', alt: "Des acheteurs au milieu des sacs de riz d'un marché", credit: 'el-bataky-photos, Pexels', position: 'center 55%' },
  { src: '/images/entrepot-sacs.jpg', legende: 'Fournisseurs', alt: "Un entrepôt de marché rempli de sacs d'épices et de tubercules", credit: 'phinley-sperrer, Pexels', position: 'center 50%' },
  { src: '/images/hero-etal.jpg', legende: 'Commerçants', alt: 'Une commerçante souriante derrière son étal', credit: 'iv image.ng, Pexels', position: 'center 30%' },
];
const DUREE_MS = 4500;

// Hero « récit » : photos plein cadre en carrousel, une phrase, une action.
export default function Hero() {
  const [actif, setActif] = useState(0);
  const [pause, setPause] = useState(false);
  const [reduit, setReduit] = useState(false);
  const [ouverts, setOuverts] = useState(null);

  // « Disponible en Côte d'Ivoire », puis « en Côte d'Ivoire et au Mali »… selon les pays ouverts dans la base
  useEffect(() => { recupererPaysOuverts().then(setOuverts); }, []);
  const ouLoohoo = ouverts
    ? ouverts.map((p) => p.dans).reduce((texte, dans, i, l) => (i === 0 ? dans : `${texte}${i === l.length - 1 ? ' et ' : ', '}${dans}`), '')
    : "en Côte d'Ivoire";

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduit(mq.matches);
    const maj = (e) => setReduit(e.matches);
    mq.addEventListener('change', maj);
    return () => mq.removeEventListener('change', maj);
  }, []);

  // Défilement automatique, arrêté si la personne survole le hero, si elle préfère moins d'animation ou si l'onglet est caché
  useEffect(() => {
    if (pause || reduit) return undefined;
    const t = setInterval(() => { if (document.visibilityState === 'visible') setActif((i) => (i + 1) % IMAGES.length); }, DUREE_MS);
    return () => clearInterval(t);
  }, [pause, reduit]);

  return (
    <section id="accueil" className="loo-hero" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} aria-roledescription="carrousel" aria-label="Photos de marchés et de commerçants">
      {IMAGES.map((img, i) => (
        <img
          key={img.src}
          className={`loo-hero-fond${i === actif ? ' loo-hero-fond-actif' : ''}`}
          src={img.src}
          alt={i === actif ? img.alt : ''}
          aria-hidden={i === actif ? undefined : 'true'}
          style={{ objectPosition: img.position }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : undefined}
        />
      ))}
      <div className="loo-hero-voile" aria-hidden="true" />

      <div className="container loo-hero-contenu">
        <p className="loo-hero-surtitre">Disponible {ouLoohoo}</p>
        <h1 className="loo-hero-titre">
          LOOHOO, <em>le grand marché digital</em> d'Afrique.
        </h1>
        <p className="loo-hero-texte">Le marché qui connecte fournisseurs, vendeurs et clients.</p>
        <div className="loo-hero-actions">
          <a href={URL_ACHETER} className="loo-hero-cta">Découvrir LOOHOO Fournisseurs <ArrowRight size={18} /></a>
          <a href={URL_DEVENIR_FOURNISSEUR} className="loo-hero-lien">Je suis fournisseur</a>
        </div>
        <p className="loo-hero-note">Notre première brique, déjà active</p>

        <div className="loo-hero-points" role="tablist" aria-label="Choisir la photo">
          {IMAGES.map((img, i) => (
            <button key={img.src} type="button" role="tab" aria-selected={i === actif} aria-label={`Photo ${i + 1} sur ${IMAGES.length}`}
              className={`loo-hero-point${i === actif ? ' loo-hero-point-actif' : ''}`} onClick={() => setActif(i)} />
          ))}
          <span className="loo-hero-legende" aria-live="off">{IMAGES[actif].legende}</span>
        </div>
      </div>

      <span className="loo-hero-credit">Photo : {IMAGES[actif].credit}</span>
    </section>
  );
}
