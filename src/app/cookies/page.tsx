'use client';

import { Cookie } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <Cookie className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">Politique des Cookies</h1>
        </div>
        
        <div className="space-y-6 text-gray-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">1. Utilisation des Cookies</h2>
            <p>Afri-Fek utilise des cookies pour améliorer votre expérience utilisateur et analyser l'utilisation de la plateforme.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">2. Types de Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies essentiels</strong> : Nécessaires au fonctionnement de la plateforme</li>
              <li><strong>Cookies de préférence</strong> : Mémorisent vos choix (langue, thème)</li>
              <li><strong>Cookies analytiques</strong> : Nous aident à comprendre l'utilisation de la plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">3. Gestion des Cookies</h2>
            <p>Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur.</p>
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
