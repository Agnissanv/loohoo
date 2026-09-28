import { BOUTIQUES } from '../data/boutiques.js';

// Nombre de produits en vente d'une boutique, lu via l'API publique de son Supabase.
// Une boutique injoignable vaut 0 : elle reste affichée, simplement moins bien classée.
async function compterProduits(boutique) {
  if (!boutique.supabaseUrl || !boutique.supabaseAnonKey) return 0;
  const url = `${boutique.supabaseUrl}/rest/v1/produits?select=id&disponible=eq.true&stock=gt.0&limit=100`;
  try {
    const reponse = await fetch(url, {
      headers: { apikey: boutique.supabaseAnonKey, Authorization: `Bearer ${boutique.supabaseAnonKey}` },
    });
    if (!reponse.ok) return 0;
    const lignes = await reponse.json();
    return Array.isArray(lignes) ? lignes.length : 0;
  } catch {
    return 0;
  }
}

export async function recupererBoutiquesVedette(limite = 6) {
  const avecScore = await Promise.all(
    BOUTIQUES.map(async (boutique) => ({ ...boutique, nbProduits: await compterProduits(boutique) }))
  );
  return avecScore.sort((a, b) => b.nbProduits - a.nbProduits).slice(0, limite);
}