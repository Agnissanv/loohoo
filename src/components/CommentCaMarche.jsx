import React from 'react';

const COLONNES = [
  {
    titre: 'Pour les acheteurs', etiquette: 'Acheter en gros',
    etapes: [
      'Cherchez un produit et comparez les fournisseurs vérifiés.',
      'Demandez un devis : quantité, ville de livraison, délai.',
      'Discutez avec le fournisseur dans la messagerie LOOHOO, puis concluez.',
    ],
  },
  {
    titre: 'Pour les fournisseurs', etiquette: 'Vendre en gros',
    etapes: [
      'Créez votre profil et ajoutez vos produits avec leur prix de gros.',
      "Notre équipe vérifie votre entreprise et vos produits avant publication.",
      'Recevez des demandes de devis et répondez depuis votre espace.',
    ],
  },
  {
    titre: 'Pour les boutiques', etiquette: 'Bientôt',
    etapes: [
      'Laissez votre e-mail pour être prévenu de l’ouverture.',
      'Créez votre boutique en ligne en quelques étapes.',
      'Gérez-la sur votre propre sous-domaine LOOHOO.',
    ],
  },
];

export default function CommentCaMarche() {
  return (
    <section id="comment" className="section" style={{ background: 'var(--loo-blanc)' }}>
      <div className="container">
        <span className="etiquette">Comment ça marche</span>
        <h2 className="section-titre">Simple pour chacun.</h2>
        <p className="section-intro">Trois parcours, une même exigence : des échanges clairs entre des professionnels de confiance.</p>

        <div className="loo-etapes-grille">
          {COLONNES.map((c) => (
            <div key={c.titre} className="carte" style={{ padding: '1.6rem', background: 'var(--loo-papier)' }}>
              <span className="etiquette">{c.etiquette}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '0.4rem 0 1rem' }}>{c.titre}</h3>
              <ol style={styles.liste}>
                {c.etapes.map((e, i) => (
                  <li key={e} style={styles.etape}>
                    <span style={styles.numero}>{i + 1}</span>
                    <span style={{ fontSize: '0.93rem', lineHeight: 1.5 }}>{e}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  liste: { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.9rem' },
  etape: { display: 'flex', gap: '0.8rem', alignItems: 'flex-start' },
  numero: {
    flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'var(--loo-encre)', color: 'var(--loo-papier)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--police-etiquette)', fontSize: '0.8rem', fontWeight: 600,
  },
};
