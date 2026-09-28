import React from 'react';
import { ArrowUpRight, Palette, Search, Store, Truck } from 'lucide-react';

const SERVICES = [
  {
    icon: Store,
    titre: 'Boutiques en ligne',
    texte: 'Des boutiques spécialisées, chacune avec son catalogue et son équipe, réunies sous la marque LOOHOO.',
  },
  {
    icon: Search,
    titre: 'Sourcing de fournisseurs',
    texte: "Un annuaire de grossistes et fabricants vérifiés en Côte d'Ivoire, avec leur catalogue au prix de gros.",
  },
  {
    icon: Palette,
    titre: 'Création de marques',
    texte: 'LOOHOO accompagne la naissance de marques pour le commerce.',
  },
  {
    icon: Truck,
    titre: 'Solutions numériques et distribution',
    texte: 'Des solutions numériques pensées pour le commerce, et de la distribution.',
  },
];

export default function Services({ onOuvrirBientotDisponible }) {
  return (
    <section id="services" className="section" style={{ background: 'var(--loo-blanc)' }}>
      <div className="container">
        <span className="etiquette">Ce que fait LOOHOO</span>
        <h2 className="section-titre">Nos services</h2>
        <p className="section-intro">
          LOOHOO connecte les fournisseurs, les vendeurs et les clients, et aide les vendeurs à créer,
          gérer et faire grandir leur commerce.
        </p>

        <div className="loo-services-grille">
          {SERVICES.map((s) => (
            <div key={s.titre} className="carte" style={styles.carte}>
              <div style={styles.icone}>
                <s.icon size={20} color="var(--loo-encre)" />
              </div>
              <h3 style={{ fontSize: '1.05rem', margin: '1rem 0 0.5rem' }}>{s.titre}</h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.72, margin: 0 }}>{s.texte}</p>
            </div>
          ))}
        </div>

        <div style={styles.boutons}>
          <a href="https://fournisseurs.looh-oo.com" className="btn btn-primary">
            Trouver un fournisseur <ArrowUpRight size={16} />
          </a>
          <button type="button" className="btn btn-outline" onClick={onOuvrirBientotDisponible}>
            Vendre en ligne
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  carte: { padding: '1.5rem', background: 'var(--loo-papier)' },
  icone: {
    width: '40px', height: '40px', borderRadius: '4px 12px 4px 12px', background: 'var(--loo-papier-ombre)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  boutons: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.2rem' },
};