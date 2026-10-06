// Adresse de la plateforme fournisseurs. Tant que le sous-domaine fournisseurs.looh-oo.com n'est pas branché,
// on peut pointer vers l'adresse Vercel avec la variable VITE_URL_FOURNISSEURS (Vercel > Settings > Environment Variables).
export const URL_FOURNISSEURS = (import.meta.env.VITE_URL_FOURNISSEURS || 'https://fournisseurs.looh-oo.com').replace(/\/$/, '');

export const URL_ACHETER = URL_FOURNISSEURS;
export const URL_DEVENIR_FOURNISSEUR = `${URL_FOURNISSEURS}/devenir-fournisseur`;
export const URL_INSCRIPTION_FOURNISSEUR = `${URL_FOURNISSEURS}/inscription/fournisseur`;
export const URL_INSCRIPTION_ACHETEUR = `${URL_FOURNISSEURS}/inscription/acheteur`;
