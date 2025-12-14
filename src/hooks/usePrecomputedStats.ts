'use client'

import { useState, useEffect } from 'react'
import { resourcesApi } from '@/lib/api-client'

interface PrecomputedStats {
  total: number
  journal: number
  article: number
  blog: number
  institution: number
  university: number
  academy: number
  ouvrage: number
  popularCountries: { country: string; count: number }[]
  lastUpdated: number
}

const STATS_CACHE_KEY = 'afrifek_stats_cache'
const STATS_CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export function usePrecomputedStats() {
  const [stats, setStats] = useState<PrecomputedStats>(() => {
    if (typeof window === 'undefined') return getDefaultStats()
    
    try {
      const cached = localStorage.getItem(STATS_CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        const age = Date.now() - parsed.lastUpdated
        if (age < STATS_CACHE_DURATION) {
          return parsed
        }
      }
    } catch (error) {
      console.error('Error loading stats from cache:', error)
    }
    
    return getDefaultStats()
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        console.log('📊 Fetching precomputed stats (1 read)')
        
        const response = await resourcesApi.getStats()
        
        if (response.data) {
          const data = response.data as PrecomputedStats
          data.lastUpdated = Date.now()
          
          setStats(data)
          localStorage.setItem(STATS_CACHE_KEY, JSON.stringify(data))
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    // Only fetch if cache is stale
    const cached = localStorage.getItem(STATS_CACHE_KEY)
    if (!cached || Date.now() - stats.lastUpdated > STATS_CACHE_DURATION) {
      fetchStats()
    }
  }, [])

  return { stats, loading }
}

function getDefaultStats(): PrecomputedStats {
  return {
    total: 0,
    journal: 0,
    article: 0,
    blog: 0,
    institution: 0,
    university: 0,
    academy: 0,
    ouvrage: 0,
    popularCountries: [],
    lastUpdated: 0
  }
}
