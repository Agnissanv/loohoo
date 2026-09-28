import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const cle = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Si les variables manquent, la vitrine doit quand même s'afficher (seul le formulaire d'e-mail échouera, avec son message d'erreur)
export const supabase = url && cle ? createClient(url, cle) : null;