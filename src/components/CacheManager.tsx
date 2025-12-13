'use client'

import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { refreshResourcesCache, clearCache } from '@/hooks/useResources'

export function CacheManager() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    if (confirm('Rafraîchir le cache? Cela va récupérer les dernières données de Firebase.')) {
      setRefreshing(true)
      try {
        await refreshResourcesCache()
        window.location.reload()
      } catch (error) {
        console.error('Error refreshing cache:', error)
        alert('Erreur lors du rafraîchissement')
      } finally {
        setRefreshing(false)
      }
    }
  }

  const handleClear = () => {
    if (confirm('Vider le cache? Les données seront rechargées au prochain accès.')) {
      clearCache()
      window.location.reload()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button
        onClick={handleRefresh}
        disabled={refreshing}
        className="px-4 py-2 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 transition flex items-center gap-2 disabled:opacity-50"
        title="Rafraîchir les données"
      >
        <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
        {refreshing ? 'Rafraîchissement...' : 'Rafraîchir'}
      </button>
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
        title="Vider le cache"
      >
        Vider cache
      </button>
    </div>
  )
}
