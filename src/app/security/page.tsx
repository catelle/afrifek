'use client';

import { Shield } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">Politique de Sécurité</h1>
        </div>
        
        <div className="space-y-6 text-gray-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">1. Protection des Données</h2>
            <p>Afri-Fek met en œuvre des mesures de sécurité robustes pour protéger vos données contre tout accès non autorisé, modification ou divulgation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">2. Chiffrement</h2>
            <p>Toutes les communications entre votre navigateur et nos serveurs sont chiffrées via HTTPS/TLS.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">3. Signaler une Vulnérabilité</h2>
            <p>Si vous découvrez une faille de sécurité, contactez-nous immédiatement à : <a href="mailto:security@afri-fek.org" className="text-amber-600 hover:underline">security@afri-fek.org</a></p>
          </section>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            ← Retour
          </button>
        </div>
      </div>
    </div>
  );
}
