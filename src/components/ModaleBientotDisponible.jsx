import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { supabase } from '../supabaseClient.js';

export default function ModaleBientotDisponible({ titre, description, source, onClose }) {
  const [email, setEmail] = useState('');
  const [envoi, setEnvoi] = useState(false);
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState('');

  async function soumettre(e) {
    e.preventDefault();
    setEnvoi(true);
    setErreur('');
    try {
      const { error } = await supabase.rpc('capturer_lead', { p_email: email, p_recherche: source });
      if (error) throw error;
      setEnvoye(true);
    } catch (err) {
      setErreur("Impossible d'enregistrer votre e-mail pour le moment.");
    } finally {
      setEnvoi(false);
    }
  }

  return (
    <div className="modale-fond" onClick={onClose}>
      <div className="modale" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modale-fermer" onClick={onClose} aria-label="Fermer"><X size={20} /></button>

        {envoye ? (
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <Mail size={32} color="var(--loo-rouge)" />
            <h2 style={{ fontSize: '1.2rem', margin: '0.8rem 0 0.4rem' }}>C'est noté !</h2>
            <p style={{ opacity: 0.75 }}>Nous vous préviendrons dès que ce sera disponible.</p>
          </div>
        ) : (
          <form onSubmit={soumettre}>
            <span className="etiquette">Bientôt disponible</span>
            <h2 style={{ fontSize: '1.2rem', margin: '0.3rem 0 0.5rem' }}>{titre}</h2>
            <p style={{ opacity: 0.75, fontSize: '0.92rem', marginBottom: '1rem' }}>{description}</p>
            <input
              className="champ" type="email" required placeholder="Votre e-mail"
              value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email"
            />
            {erreur && <p style={{ color: 'var(--loo-rouge)', fontWeight: 600, fontSize: '0.88rem', margin: '0.8rem 0 0' }}>{erreur}</p>}
            <button type="submit" className="btn btn-primary" disabled={envoi} style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
              {envoi ? 'Envoi…' : 'Me prévenir'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}