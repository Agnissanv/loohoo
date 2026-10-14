import React from 'react';
import { Link } from 'react-router-dom';
import { EMAIL_CONTACT, SOCIETE, URL_ACHETER, URL_CALCULATEUR, URL_DEVENIR_FOURNISSEUR } from '../config.js';

// Pied de page : qui est derrière LOOHOO, puis trois colonnes de liens et les mentions légales
export default function Footer() {
  const lieu = [SOCIETE.nomLegal, SOCIETE.adresse && `${SOCIETE.adresse}, Abidjan`].filter(Boolean).join(' · ');
  const whatsapp = SOCIETE.whatsappAide.replace(/\D/g, '');

  return (
    <footer className="pied">
      <div className="container">
        <div className="pied-haut">
          <div className="pied-marque">
            <strong className="pied-nom">LOOHOO</strong>
            <p>Le grand marché digital d'Afrique.</p>
            <p className="pied-signature">Votre marché connecté au monde.</p>
            {(lieu || whatsapp) && (
              <p className="pied-societe">
                {lieu}{lieu && whatsapp && <br />}
                {whatsapp && <>WhatsApp : <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">+{whatsapp}</a></>}
              </p>
            )}
          </div>

          <nav className="pied-colonnes" aria-label="Plan du site">
            <div>
              <h2>LOOHOO</h2>
              <ul>
                <li><Link to="/a-propos">À propos et mission</Link></li>
                <li><a href={`mailto:${EMAIL_CONTACT}?subject=Partenariat%20LOOHOO`}>Partenariats &amp; collaborations</a></li>
                <li><a href={`mailto:${EMAIL_CONTACT}`}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h2>Acheteurs</h2>
              <ul>
                <li><a href={URL_ACHETER}>Trouver un fournisseur</a></li>
                <li><Link to="/#comment">Comment ça marche</Link></li>
                <li><Link to="/#faq">Questions fréquentes</Link></li>
              </ul>
            </div>
            <div>
              <h2>Fournisseurs</h2>
              <ul>
                <li><a href={URL_DEVENIR_FOURNISSEUR}>Rejoindre le réseau de fournisseurs LOOHOO</a></li>
                <li><a href={URL_CALCULATEUR}>Calculateur de marge</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="pied-bas">
          <span>© {new Date().getFullYear()} LOOHOO — Tous droits réservés</span>
          <nav aria-label="Informations légales">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
            <Link to="/conditions">Conditions d'utilisation</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
