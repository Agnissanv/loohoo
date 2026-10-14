import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarqueVisage from './MarqueVisage.jsx';
import SourireDiviseur from './SourireDiviseur.jsx';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';
import { recupererLiensCommunaute } from '../api/fournisseurs.js';
import { RESEAUX } from './IconesReseaux.jsx';

export default function Footer({ onOuvrirBientotDisponible }) {
  const [liens, setLiens] = useState({});
  useEffect(() => { recupererLiensCommunaute().then(setLiens); }, []);
  const reseaux = RESEAUX.filter((r) => liens[r.cle]);
  return (
    <footer id="partenaire">
      <SourireDiviseur fond="var(--loo-papier)" suivant="var(--loo-blanc)" />

      <div style={styles.footer}>
        <div className="container" style={styles.contenu}>
          <div>
            <div style={styles.logoLigne}>
              <MarqueVisage couleur="var(--loo-orange)" taille={40} />
              <span style={styles.logoTexte}>LOOHOO</span>
            </div>
            <p style={styles.slogan}>LOOHOO — Le grand marché digital.<br />Le marché qui connecte fournisseurs, vendeurs et clients.</p>
            {reseaux.length > 0 && (
              <>
                <h4 style={{ ...styles.titreColonne, marginTop: '1.2rem' }}>Rejoignez la communauté</h4>
                <ul className="pied-reseaux">
                  {reseaux.map(({ cle, nom, Icone }) => (
                    <li key={cle}><a href={liens[cle]} target="_blank" rel="noreferrer" aria-label={nom} title={nom}><Icone size={20} /></a></li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div style={styles.colonne}>
            <h4 style={styles.titreColonne}>Vous cherchez un fournisseur ?</h4>
            <p style={styles.texte}>
              Trouvez un grossiste ou fabricant vérifié, comparez les prix de gros et demandez un devis.
            </p>
            <a href={URL_ACHETER} className="btn btn-primary" style={{ marginTop: '0.8rem' }}>Trouver un fournisseur</a>
          </div>

          <div style={styles.colonne}>
            <h4 style={styles.titreColonne}>Vous êtes fournisseur ?</h4>
            <p style={styles.texte}>
              Présentez votre catalogue aux acheteurs. Chaque profil est vérifié par notre équipe avant publication.
            </p>
            <a href={URL_DEVENIR_FOURNISSEUR} className="btn btn-outline" style={{ marginTop: '0.8rem' }}>Devenir fournisseur</a>
          </div>

          <div style={styles.colonne}>
            <h4 style={styles.titreColonne}>Votre boutique en ligne</h4>
            <p style={styles.texte}>
              La création de boutique sous LOOHOO arrive bientôt. Laissez votre e-mail pour être prévenu.
            </p>
            <button type="button" className="btn btn-outline" style={{ marginTop: '0.8rem' }} onClick={onOuvrirBientotDisponible}>Être prévenu</button>
          </div>
        </div>

        <div className="container" style={styles.copyright}>
          <span>© {new Date().getFullYear()} LOOHOO — Tous droits réservés</span>
          <nav style={styles.liensLegaux} aria-label="Informations légales">
            <Link to="/mentions-legales" style={styles.lienLegal}>Mentions légales</Link>
            <Link to="/confidentialite" style={styles.lienLegal}>Confidentialité</Link>
            <Link to="/conditions" style={styles.lienLegal}>Conditions d'utilisation</Link>
            <Link to="/a-propos" style={styles.lienLegal}>À propos</Link>
            <a href="mailto:contact@looh-oo.com" style={styles.lienLegal}>Contact</a>
            <a href="mailto:contact@looh-oo.com?subject=Partenariat%20LOOHOO" style={styles.lienLegal}>Partenariats &amp; collaborations</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: 'var(--loo-blanc)', paddingTop: '3rem', color: 'var(--loo-encre)', borderTop: '4px solid var(--loo-orange)' },
  contenu: { display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', paddingBottom: '2rem' },
  logoLigne: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoTexte: { fontFamily: 'var(--police-affiche)', fontWeight: 700, fontSize: '1.25rem' },
  slogan: { opacity: 0.75, marginTop: '0.6rem', maxWidth: '280px' },
  colonne: { maxWidth: '320px' },
  titreColonne: { fontSize: '0.95rem', marginBottom: '0.6rem', fontWeight: 800, color: 'var(--loo-orange)' },
  texte: { opacity: 0.75, fontSize: '0.9rem', margin: 0 },
  copyright: {
    borderTop: '1px solid var(--loo-papier-ombre)', padding: '1.2rem 1.5rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
    fontSize: '0.78rem', opacity: 0.8, fontFamily: 'var(--police-etiquette)',
  },
  liensLegaux: { display: 'flex', gap: '1.2rem', flexWrap: 'wrap' },
  lienLegal: { color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--loo-papier-ombre)' },

};