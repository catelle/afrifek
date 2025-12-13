import { useState } from 'react';
import { Resource } from './useResources';

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchResources = async (query: string, filters?: { type?: string; country?: string }) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const params = new URLSearchParams({
        q: query,
        limit: '100',
        ...(filters?.type && { type: filters.type }),
        ...(filters?.country && { country: filters.country })
      });

      const response = await fetch(`${apiUrl}/resources/search?${params}`);
      
      if (!response.ok) {
        throw new Error('Search failed');
      }

      const results = await response.json();
      setSearchResults(Array.isArray(results) ? results : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchResults([]);
    setError(null);
  };

  return {
    searchResults,
    loading,
    error,
    searchResources,
    clearSearch
  };
};