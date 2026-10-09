import { supabase } from '../supabaseClient.js';

// Renvoie [] si Supabase est indisponible : la vitrine ne doit jamais casser à cause de cette section.
export async function recupererFournisseursVedette(limite = 6) {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('fournisseurs_vedette', { p_limite: limite });
  if (error || !Array.isArray(data)) return [];
  return data;
}

// Chiffres du réseau comptés dans la base (migration 0019). null si indisponible : la section se masque alors.
export async function recupererChiffresPublics() {
  if (!supabase) return null;
  const { data, error } = await supabase.rpc('chiffres_publics');
  if (error || !Array.isArray(data)) return null;
  return data[0] || null;
}

// Pays où LOOHOO est ouvert (migration 0024), dans l'ordre. null si indisponible.
export async function recupererPaysOuverts() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('pays_loohoo').select('code, nom, dans').eq('actif', true).order('ordre');
  if (error || !Array.isArray(data) || data.length === 0) return null;
  return data;
}
