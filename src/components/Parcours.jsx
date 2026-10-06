import React from 'react';
import { ArrowRight, Search, ShoppingBag, Store, Truck } from 'lucide-react';
import { URL_ACHETER, URL_DEVENIR_FOURNISSEUR } from '../config.js';

// Le cœur du portail : chacun choisit ce qu'il vient faire et arrive au bon endroit.
export default function Parcours({ onOuvrirBientotDisponible }) {
  const parcours = [
    {
      icone: Search, titre: 'Je cherche un fournisseur',
      texte: "Je veux acheter en gros ou revendre. Je trouve un fournisseur vérifié, je compare les prix et je demande un devis.",
      action: 'Trouver un fournisseur', lien: URL_ACHETER, etat: 'En service',
    },
    {
      icone: Truck, titre: 'Je suis fournisseur',
      texte: "Je suis grossiste ou fabricant. Je présente mon catalogue à des acheteurs et je reçois des demandes de devis.",
      action: 'Devenir fournisseur', lien: URL_DEVENIR_FOURNISSEUR, etat: 'En service',
    },
    {
      icone: Store, titre: 'Je veux ma boutique en ligne',
      texte: "Je vends mes produits et je veux ma propre boutique, sur mon sous-domaine LOOHOO.",
      action: 'Être prévenu', onClick: onOuvrirBientotDisponible, etat: 'Bientôt',
    },
    {
      icone: ShoppingBag, titre: 'Je veux acheter',
      texte: 'Je cherche des produits pour moi : je découvre les boutiques de l’écosystème LOOHOO.',
      action: 'Voir les boutiques', lien: '#boutiques', etat: 'En service',
    },
  ];

  return (
    <section id="parcours" className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <span className="etiquette">Par où commencer ?</span>
        <h2 className="section-titre" style={{ maxWidth: '22ch' }}>Que venez-vous faire sur LOOHOO ?</h2>

        <div className="loo-parcours-grille">
          {parcours.map((p) => {
            const contenu = (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={styles.icone}><p.icone size={24} color="var(--loo-rouge)" /></span>
                  <span className={`badge ${p.etat === 'Bientôt' ? 'badge-fabricant' : 'badge-verifie'}`}>{p.etat}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>{p.titre}</h3>
                <p style={{ margin: 0, fontSize: '0.93rem', opacity: 0.78, lineHeight: 1.55, flex: 1 }}>{p.texte}</p>
                <span style={styles.action}>{p.action} <ArrowRight size={16} /></span>
              </>
            );
            return p.onClick ? (
              <button key={p.titre} type="button" className="carte loo-parcours-carte" onClick={p.onClick}>{contenu}</button>
            ) : (
              <a key={p.titre} href={p.lien} className="carte loo-parcours-carte">{contenu}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  icone: {
    width: '48px', height: '48px', borderRadius: '4px 14px 4px 14px', background: 'var(--loo-papier-ombre)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  },
  action: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--loo-rouge)', marginTop: '1.2rem', fontSize: '0.95rem' },
};
