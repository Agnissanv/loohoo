import { BOUTIQUES } from '../data/boutiques.js';

// Va chercher les produits disponibles d'UNE boutique via l'API REST publique de Supabase
// (pas besoin du SDK @supabase/supabase-js ici — une simple lecture, avec la clé publique
// de la boutique, exactement comme le fait déjà son propre site).
async function recupererProduitsBoutique(boutique) {
  if (!boutique.supabaseUrl || boutique.supabaseUrl === 'À_COMPLETER') return [];

  const colonnes = 'id,nom,prix,prix_barre,categorie,stock,images,disponible,date_ajout';
  const url = `${boutique.supabaseUrl}/rest/v1/produits?select=${colonnes}&disponible=eq.true&order=date_ajout.desc&limit=12`;

  try {
    const reponse = await fetch(url, {
      headers: {
        apikey: boutique.supabaseAnonKey,
        Authorization: `Bearer ${boutique.supabaseAnonKey}`,
      },
    });
    if (!reponse.ok) throw new Error(`Erreur ${reponse.status}`);
    const produits = await reponse.json();
    return produits.map((p) => ({
      id: p.id,
      nom: p.nom,
      prix: Number(p.prix),
      prixBarre: p.prix_barre ? Number(p.prix_barre) : null,
      categorie: p.categorie,
      stock: p.stock,
      image: p.images?.[0] || null,
      dateAjout: p.date_ajout,
      boutique: { id: boutique.id, nom: boutique.nom, sousDomaine: boutique.sousDomaine },
    }));
  } catch {
    // Une boutique injoignable ne doit jamais casser l'affichage des autres.
    return [];
  }
}

export async function recupererMarketplace() {
  const resultats = await Promise.all(BOUTIQUES.map(recupererProduitsBoutique));
  return resultats
    .flat()
    .filter((p) => p.stock > 0)
    .sort((a, b) => new Date(b.dateAjout) - new Date(a.dateAjout));
}
