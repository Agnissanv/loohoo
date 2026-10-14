// Petites mises en forme partagées par les sections du site officiel.

// « A », « A et B », « A, B et C »
export const enumerer = (mots) => mots.reduce((texte, mot, i) => (i === 0 ? mot : `${texte}${i === mots.length - 1 ? ' et ' : ', '}${mot}`), '');

// « Côte d'Ivoire, bientôt Sénégal et Cameroun » (repli : Côte d'Ivoire seule)
export function lignePays(pays) {
  const ouverts = pays?.ouverts?.length ? pays.ouverts.map((p) => p.nom) : ["Côte d'Ivoire"];
  const bientot = pays?.bientot?.map((p) => p.nom) || [];
  return `${enumerer(ouverts)}${bientot.length ? `, bientôt ${enumerer(bientot)}` : ''}`;
}

// Réponse de la FAQ : « LOOHOO est ouvert en Côte d'Ivoire et arrive bientôt au Sénégal et au Cameroun. »
export function phrasePays(pays) {
  const ouverts = pays?.ouverts?.length ? pays.ouverts.map((p) => p.dans) : ["en Côte d'Ivoire"];
  const bientot = pays?.bientot?.map((p) => p.dans) || [];
  return `LOOHOO est ouvert ${enumerer(ouverts)}${bientot.length ? ` et arrive bientôt ${enumerer(bientot)}` : ''}. `
    + "Les autres pays d'Afrique suivront : la plateforme est prête à les accueillir.";
}

// « 7 000 F CFA »
export const prixCFA = (n) => `${Math.round(Number(n) || 0).toLocaleString('fr-FR')} F CFA`;

// « il y a 5 min », « il y a 3 h », « il y a 2 j »
export function ilYa(date) {
  const minutes = Math.max(1, Math.round((Date.now() - new Date(date).getTime()) / 60000));
  if (minutes < 60) return `il y a ${minutes} min`;
  const heures = Math.round(minutes / 60);
  if (heures < 24) return `il y a ${heures} h`;
  return `il y a ${Math.round(heures / 24)} j`;
}

// Version réduite d'une photo hébergée sur Supabase Storage : on ne télécharge que la largeur utile
export function urlReduite(url, largeur, qualite = 72) {
  if (!url || !url.includes('/storage/v1/object/public/')) return url;
  return `${url.replace('/storage/v1/object/public/', '/storage/v1/render/image/public/')}?width=${largeur}&quality=${qualite}`;
}
