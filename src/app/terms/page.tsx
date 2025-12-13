'use client';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Conditions d'utilisation</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptation des conditions</h2>
            <p>En utilisant Afri-Fek, vous acceptez ces conditions d'utilisation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Utilisation du service</h2>
            <p>Vous vous engagez à utiliser la plateforme de manière responsable et conforme aux lois en vigueur.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
            <p>Tout le contenu de la plateforme est protégé par les droits d'auteur.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Contact</h2>
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
