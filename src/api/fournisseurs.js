import { supabase } from '../supabaseClient.js';

// Tout ce que le site officiel lit dans la base de la plateforme fournisseurs.
// Chaque fonction renvoie une valeur vide si la base est indisponible : la page ne doit jamais casser à cause d'une section.

// Chiffres du réseau comptés dans la base (migration 0019), les mêmes que sur la plateforme. null si indisponible.
export async function recupererChiffresPublics() {
  if (!supabase) return null;
  const { data, error } = await supabase.rpc('chiffres_publics');
  if (error || !Array.isArray(data)) return null;
  return data[0] || null;
}

// Pays affichés, réglés depuis l'administration (migrations 0024 et 0025) : { ouverts, bientot }. null si indisponible.
// Avant la migration 0025 (pas de colonne « visible »), on se replie sur les seuls pays ouverts.
export async function recupererPays() {
  if (!supabase) return null;
  let { data, error } = await supabase.from('pays_loohoo').select('code, nom, dans, actif, visible').order('ordre');
  if (error) ({ data, error } = await supabase.from('pays_loohoo').select('code, nom, dans, actif').eq('actif', true).order('ordre'));
  if (error || !Array.isArray(data) || data.length === 0) return null;
  const visibles = data.filter((p) => p.visible !== false);
  return { ouverts: visibles.filter((p) => p.actif), bientot: visibles.filter((p) => !p.actif) };
}

// Les produits les plus récents de la plateforme (porte « Fournisseurs »). [] si indisponible.
export async function recupererProduitsRecents(limite = 4) {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('rechercher_catalogue', { p_tri: 'nouveautes', p_limite: limite });
  if (!error && Array.isArray(data)) return data;
  // Avant la migration 0026 : lecture directe des produits publiés
  const repli = await supabase.from('produit')
    .select('id, nom, photo_url, prix_gros_fcfa, unite, grossiste!inner(statut)')
    .eq('statut', 'publie').eq('actif', true).eq('grossiste.statut', 'publie')
    .order('date_ajout', { ascending: false }).limit(limite);
  return repli.error || !Array.isArray(repli.data) ? [] : repli.data;
}

// Activité réelle et récente de la plateforme (migration 0028). [] si indisponible.
export async function recupererMarcheEnDirect(limite = 8) {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('marche_en_direct', { p_limite: limite });
  return error || !Array.isArray(data) ? [] : data;
}

// Fournisseurs vérifiés qui acceptent d'apparaître, avec leur photo de visite terrain (migration 0028). [] si indisponible.
export async function recupererPremiersFournisseurs(limite = 8) {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('premiers_fournisseurs_verifies', { p_limite: limite });
  return error || !Array.isArray(data) ? [] : data;
}

// Liens « Rejoignez la communauté » réglés par l'équipe (migration 0025 du site fournisseurs). {} si indisponibles.
export async function recupererLiensCommunaute() {
  if (!supabase) return {};
  const { data, error } = await supabase.rpc('liens_communaute');
  if (error || !data) return {};
  return data;
}

// « Être prévenu » : l'e-mail rejoint la liste d'attente de la porte choisie
export async function capturerEmail(email, source) {
  if (!supabase) throw new Error('Service indisponible');
  const { error } = await supabase.rpc('capturer_lead', { p_email: email, p_recherche: source });
  if (error) throw error;
}
