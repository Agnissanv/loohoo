// Registre des boutiques membres de LOOHOO.
// Chaque boutique reste un projet totalement indépendant (son propre code, son propre
// Supabase, son propre déploiement Vercel) — cette liste ne fait qu'agréger l'affichage
// de leurs produits publics ici, sur la marketplace LOOHOO.
//
// Pour ajouter une nouvelle boutique : ajoute une entrée ici avec son URL Supabase et sa
// clé publique (publishable/anon key — la même que celle déjà utilisée côté client sur
// son propre site, donc pas un secret à protéger).
//
// ⚠️ À COMPLÉTER avant le déploiement : remplace supabaseUrl et supabaseAnonKey de MédiThé
// par les vraies valeurs (visibles dans frontend/.env du projet medithe, ou dans les
// variables d'environnement Vercel du projet — VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY).

export const BOUTIQUES = [
  {
    id: 'medithe',
    nom: 'MédiThé',
    description: 'Thés de soin — livraison à domicile, paiement à la livraison.',
    sousDomaine: 'medithe.looh-oo.com',
    logo: '/boutiques/medithe.png',
    supabaseUrl: 'À_COMPLETER', // ex: https://xxxxxxxx.supabase.co
    supabaseAnonKey: 'À_COMPLETER',
  },
];
