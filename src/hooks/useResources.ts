import { useState, useEffect } from 'react'

export interface Resource {
  resourceTitle: string
  organisationName?: string
  coverageStartYear?: number
  issnPrint: any
  issnOnline: any
  id: string
  name: string
  type: string
  description: string
  link: string
  country: string
  image: string
  isbn?: string
  statut?: string
  detailsStatut?: string
  resourceUrl?: string
  domainJournal?: string
  Revues?: string
  'NOM DE LA REVUE'?: string
  isbn_issn?: string
  'ISBN - ISSN'?: string
  Status?: string
  status?: string
  Names?:string
}

let cachedResources: Resource[] = []
let totalCount = 0

const fetchAllResourcesFromAPI = async (onProgress?: (loaded: number, total: number) => void): Promise<Resource[]> => {
  if (cachedResources.length > 0) return cachedResources

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
  
  // First get total count
  const countResponse = await fetch(`${apiUrl}/resources/count`)
  if (countResponse.ok) {
    const countData = await countResponse.json()
    totalCount = countData.total || 0
  }
  
  // Then fetch all resources in batches
  const batchSize = 500
  let page = 1
  let allResources: Resource[] = []
  
  while (true) {
    const response = await fetch(`${apiUrl}/resources?page=${page}&limit=${batchSize}`)
    if (!response.ok) break
    
    const data = await response.json()
    const newResources = Array.isArray(data) ? data : data.resources || []
    
    if (newResources.length === 0) break
    
    allResources = [...allResources, ...newResources]
    
    if (onProgress) {
      onProgress(allResources.length, totalCount)
    }
    
    if (newResources.length < batchSize) break
    page++
  }
  
  cachedResources = allResources
  return cachedResources
}

export function useResources() {
  const [resources, setResources] = useState<Resource[]>(cachedResources)
  const [loading, setLoading] = useState(cachedResources.length === 0)
  const [progress, setProgress] = useState({ loaded: 0, total: 0 })
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (cachedResources.length === 0) {
      loadAllResources()
    }
  }, [])

  const loadAllResources = async () => {
    try {
      setLoading(true)
      const data = await fetchAllResourcesFromAPI((loaded, total) => {
        setProgress({ loaded, total })
      })
      setResources(data)
    } catch (err) {
      setError(err as Error)
      console.error('Error fetching resources:', err)
    } finally {
      setLoading(false)
    }
  }

  return { 
    resources, 
    loading, 
    error, 
    progress,
    totalCount,
    refresh: loadAllResources
  }
}

export const refreshResourcesCache = async () => {
  cachedResources = []
  totalCount = 0
  return fetchAllResourcesFromAPI()
}

export const clearCache = () => {
  cachedResources = []
  totalCount = 0
}
