'use client';

import { useState, useEffect } from 'react';
import { ResizedImage } from '@/components/ResizeImage';
import { Heart, ExternalLink } from 'lucide-react';

export default function FavorisPage() {
  const [savedResources, setSavedResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSavedResources = () => {
      const saved = JSON.parse(localStorage.getItem('savedResources') || '[]');
      setSavedResources(saved);
      setLoading(false);
    };

    loadSavedResources();
  }, []);

  const removeFromFavorites = (resourceId: string) => {
    const saved = JSON.parse(localStorage.getItem('savedResources') || '[]');
    const filtered = saved.filter((r: any) => r.id !== resourceId);
    localStorage.setItem('savedResources', JSON.stringify(filtered));
    setSavedResources(prev => prev.filter(r => r.id !== resourceId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            Mes Favoris
          </h1>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            ← Retour
          </button>
        </div>

        {savedResources.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Aucun favori</h2>
            <p className="text-gray-500">Vous n'avez pas encore ajouté de ressources à vos favoris.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedResources.map((resource: any) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 overflow-hidden bg-gray-100">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt={resource.name || 'Resource'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/search.png';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{resource.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{resource.type}</p>
                  <p className="text-sm text-gray-500 mb-4">{resource.country}</p>
                  <div className="flex gap-2">
                    <a
                      href={`/resource/${resource.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir
                    </a>
                    <button
                      onClick={() => removeFromFavorites(resource.id)}
                      className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
