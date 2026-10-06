import React from 'react';
import { ArrowRight } from 'lucide-react';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';

// Deux histoires, une par côté du marché : l'acheteur, puis le fournisseur.
export default function Recits() {
  return (
    <section id="parcours">
      <div className="loo-recit">
        <div className="container loo-recit-grille">
          <div className="loo-recit-photo">
            <div className="loo-cadre loo-cadre-haut">
              <img src="/images/marche-acheteurs.jpg" alt="Une rue commerçante animée, étals et acheteurs" width="1200" height="1600" loading="lazy" />
            </div>
          </div>
          <div className="loo-recit-texte">
            <span className="etiquette">Pour les acheteurs</span>
            <h2 className="loo-affiche">Fini de courir de marché en marché.</h2>
            <p>
              Vous revendez, vous ouvrez une boutique ou vous équipez votre commerce ? Cherchez un produit, comparez
              les prix de gros de plusieurs fournisseurs et envoyez votre demande de devis en un clic : quantité,
              ville de livraison, délai.
            </p>
            <p>Les échanges se font dans la messagerie LOOHOO. Vous gardez l'historique de chaque discussion.</p>
            <a href={URL_ACHETER} className="loo-lien">Trouver un fournisseur <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>

      <div className="loo-recit loo-recit-inverse">
        <div className="container loo-recit-grille">
          <div className="loo-recit-texte">
            <span className="etiquette">Pour les fournisseurs</span>
            <h2 className="loo-affiche">Votre stock mérite plus que votre quartier.</h2>
            <p>
              Grossiste ou fabricant : présentez votre catalogue avec vos prix de gros et vos quantités minimales.
              Les demandes arrivent déjà précises, vous répondez depuis votre espace, sans courir après les curieux.
            </p>
            <p>L'inscription est gratuite. LOOHOO ne prélève une commission que sur les affaires conclues grâce à la plateforme.</p>
            <a href={URL_DEVENIR_FOURNISSEUR} className="loo-lien">Devenir fournisseur <ArrowRight size={16} /></a>
          </div>
          <div className="loo-recit-photo">
            <div className="loo-cadre">
              <img src="/images/fournisseuse-etal.jpg" alt="Une commerçante souriante derrière son étal" width="1200" height="1245" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
