// Adresse de la plateforme fournisseurs. Tant que le sous-domaine fournisseurs.looh-oo.com n'est pas branché,
// on peut pointer vers l'adresse Vercel avec la variable VITE_URL_FOURNISSEURS (Vercel > Settings > Environment Variables).
export const URL_FOURNISSEURS = (import.meta.env.VITE_URL_FOURNISSEURS || 'https://fournisseurs.looh-oo.com').replace(/\/$/, '');

export const URL_ACHETER = URL_FOURNISSEURS;
export const URL_DEVENIR_FOURNISSEUR = `${URL_FOURNISSEURS}/devenir-fournisseur`;
export const URL_INSCRIPTION_FOURNISSEUR = `${URL_FOURNISSEURS}/inscription/fournisseur`;
export const URL_INSCRIPTION_ACHETEUR = `${URL_FOURNISSEURS}/inscription/acheteur`;
export const URL_INSCRIPTION = `${URL_FOURNISSEURS}/inscription`;
export const URL_CONNEXION = `${URL_FOURNISSEURS}/connexion`;
export const URL_CALCULATEUR = `${URL_FOURNISSEURS}/calculateur-marge`;
export const URL_PRODUIT = (id) => `${URL_FOURNISSEURS}/produit/${id}`;
export const URL_PROFIL_FOURNISSEUR = (f) => (f.slug ? `${URL_FOURNISSEURS}/f/${f.slug}` : `${URL_FOURNISSEURS}/grossiste/${f.id}`);

export const EMAIL_CONTACT = 'contact@looh-oo.com';

// « Qui est derrière LOOHOO » (pied de page et page À propos). Le client doit transmettre ces informations :
// chaque ligne ne s'affiche que lorsqu'elle est remplie. WhatsApp au format international, sans espaces (ex. 2250700000000).
export const SOCIETE = {
  nomLegal: '',
  adresse: '', // ex. « Cocody, Riviera 3 » (la ville Abidjan est ajoutée à l'affichage)
  whatsappAide: '',
};
