import React, { useEffect } from 'react';
import Mission from '../components/Mission.jsx';
import Services from '../components/Services.jsx';
import Boutiques from '../components/Boutiques.jsx';
import { EMAIL_CONTACT, SOCIETE } from '../config.js';

// « À propos et mission » : la marque, sa mission, ses services, les boutiques de l'écosystème et qui est derrière LOOHOO.
export default function APropos({ onOuvrirBientotDisponible }) {
  useEffect(() => {
    const ancien = document.title;
    document.title = 'À propos — LOOHOO, le grand marché digital';
    return () => { document.title = ancien; };
  }, []);

  const whatsapp = SOCIETE.whatsappAide.replace(/\D/g, '');

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <span className="etiquette">À propos</span>
          <h1 className="section-titre" style={{ maxWidth: '20ch' }}>LOOHOO, le grand marché digital d'Afrique.</h1>
          <p className="section-intro">Le marché qui connecte fournisseurs, vendeurs et clients. Votre marché connecté au monde.</p>
        </div>
      </section>
      <Mission />
      <Services onOuvrirBientotDisponible={onOuvrirBientotDisponible} />
      <Boutiques onOuvrirBientotDisponible={onOuvrirBientotDisponible} />

      <section className="section section-grise" aria-labelledby="titre-qui">
        <div className="container">
          <h2 id="titre-qui" className="section-titre">Qui est derrière LOOHOO</h2>
          <dl className="qui">
            {SOCIETE.nomLegal && <div><dt>Société</dt><dd>{SOCIETE.nomLegal}</dd></div>}
            {SOCIETE.adresse && <div><dt>Adresse</dt><dd>{SOCIETE.adresse}, Abidjan</dd></div>}
            {whatsapp && <div><dt>WhatsApp d'aide</dt><dd><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">+{whatsapp}</a></dd></div>}
            <div><dt>Contact</dt><dd><a href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</a></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
