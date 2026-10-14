import React, { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { capturerEmail, recupererProduitsRecents } from '../api/fournisseurs.js';
import { URL_ACHETER, URL_INSCRIPTION_FOURNISSEUR, URL_PRODUIT } from '../config.js';
import { prixCFA, urlReduite } from '../utils/affichage.js';

// « Que venez-vous faire sur LOOHOO ? » : trois portes, une par acteur. Seule la porte Fournisseurs est ouverte.
export default function PortesMarche() {
  const [produits, setProduits] = useState(null); // null = chargement
  useEffect(() => { recupererProduitsRecents(4).then(setProduits); }, []);

  return (
    <section id="portes" className="section portes" aria-labelledby="titre-portes">
      <div className="container">
        <span className="etiquette">Les portes du marché</span>
        <h2 id="titre-portes" className="section-titre">Que venez-vous faire sur LOOHOO ?</h2>

        <div className="portes-grille">
          <article className={`porte porte-ouverte${produits?.length === 0 ? ' porte-sans-produits' : ''}`}>
            <div className="porte-ouverte-texte">
              <div className="porte-tete">
                <h3>Fournisseurs</h3>
                <span className="pastille pastille-ouvert">Ouvert</span>
              </div>
              <p className="porte-texte">Trouvez un fournisseur vérifié et achetez en gros, au vrai prix de gros.</p>
            </div>

            {produits === null && (
              <div className="porte-produits" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => <div key={i} className="porte-produit loo-squelette" style={{ minHeight: '190px' }} />)}
              </div>
            )}
            {produits?.length > 0 && (
              <ul className="porte-produits" aria-label="Produits récents">
                {produits.map((p) => (
                  <li key={p.id}>
                    <a href={URL_PRODUIT(p.id)} className="porte-produit">
                      <span className="porte-produit-photo">
                        {p.photo_url
                          ? <img src={urlReduite(p.photo_url, 360)} alt="" loading="lazy" decoding="async" />
                          : <Package size={26} aria-hidden="true" />}
                      </span>
                      <span className="porte-produit-nom">{p.nom}</span>
                      <span className="porte-produit-prix">{prixCFA(p.prix_min ?? p.prix_gros_fcfa)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="porte-ouverte-actions">
              <a href={URL_ACHETER} className="btn btn-primary porte-bouton">Entrer chez les fournisseurs</a>
              <a href={URL_INSCRIPTION_FOURNISSEUR} className="porte-lien">Je suis fournisseur</a>
            </div>
          </article>

          <article className="porte">
            <div className="porte-tete">
              <h3>Boutiques</h3>
              <span className="pastille pastille-bientot">Bientôt</span>
            </div>
            <p className="porte-texte">Pour les vendeurs : votre propre boutique en ligne, sur votre adresse LOOHOO.</p>
            <EtrePrevenu source="site-officiel-boutiques" />
          </article>

          <article className="porte">
            <div className="porte-tete">
              <h3>Le grand marché</h3>
              <span className="pastille pastille-bientot">Bientôt</span>
            </div>
            <p className="porte-texte">Pour les clients : acheter au détail auprès des vendeurs LOOHOO.</p>
            <EtrePrevenu source="site-officiel-grand-marche" />
          </article>
        </div>
      </div>
    </section>
  );
}

// Champ e-mail + « Être prévenu », directement dans la porte (pas de fenêtre à ouvrir)
function EtrePrevenu({ source }) {
  const id = useId();
  const [email, setEmail] = useState('');
  const [etat, setEtat] = useState('saisie'); // saisie | envoi | envoye | erreur

  async function envoyer(e) {
    e.preventDefault();
    setEtat('envoi');
    try {
      await capturerEmail(email.trim(), source);
      setEtat('envoye');
    } catch {
      setEtat('erreur');
    }
  }

  if (etat === 'envoye') {
    return <p className="prevenu-ok" role="status">C'est noté : nous vous écrirons dès l'ouverture.</p>;
  }

  return (
    <form className="prevenu" onSubmit={envoyer}>
      <p className="porte-preparation">Porte en préparation</p>
      <label htmlFor={id}>Votre e-mail</label>
      <div className="prevenu-ligne">
        <input id={id} className="champ" type="email" required autoComplete="email" placeholder="nom@exemple.com"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="btn btn-contour" disabled={etat === 'envoi'}>{etat === 'envoi' ? 'Envoi…' : 'Être prévenu'}</button>
      </div>
      {etat === 'erreur' && <p className="prevenu-erreur" role="alert">L'e-mail n'a pas pu être enregistré. Réessayez dans un instant.</p>}
      <p className="prevenu-mention">Un seul e-mail, à l'ouverture. <Link to="/confidentialite">Confidentialité</Link></p>
    </form>
  );
}
