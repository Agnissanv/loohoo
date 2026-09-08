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
    return produits
      .filter((p) => p.stock > 0)
      .map((p) => ({
        id: p.id,
        nom: p.nom,
        prix: Number(p.prix),
        prixBarre: p.prix_barre ? Number(p.prix_barre) : null,
        categorie: p.categorie,
        stock: p.stock,
        image: p.images?.[0] || null,
      }));
  } catch {
    // Une boutique injoignable ne doit jamais casser l'affichage des autres.
    return [];
  }
}

// Renvoie un "étal" par boutique — pas une liste unique mélangée — pour que la
// marketplace reste fidèle à ce qu'elle est vraiment : plusieurs boutiques
// indépendantes exposées côte à côte, pas un catalogue unique.
export async function recupererMarketplace() {
  const boutiquesAvecProduits = await Promise.all(
    BOUTIQUES.map(async (boutique) => ({
      boutique: { id: boutique.id, nom: boutique.nom, sousDomaine: boutique.sousDomaine },
      produits: await recupererProduitsBoutique(boutique),
    }))
  );
  return boutiquesAvecProduits.filter((etal) => etal.produits.length > 0);
}
