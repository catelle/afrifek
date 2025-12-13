'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Politique de confidentialité</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Collecte des données</h2>
            <p>Afri-Fek collecte uniquement les données nécessaires au fonctionnement de la plateforme.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Utilisation des données</h2>
            <p>Les données collectées sont utilisées pour améliorer nos services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Contact</h2>
            <p>Pour toute question : <a href="mailto:contact@afri-fek.org" className="text-amber-600 hover:underline">contact@afri-fek.org</a></p>
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
