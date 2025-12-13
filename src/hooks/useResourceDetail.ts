import { useState, useEffect } from 'react';
import { resourcesApi } from '@/lib/api-client';

export const useResourceDetail = (resourceId: string) => {
  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        console.log('Fetching resource with ID:', resourceId);
        const response = await resourcesApi.getById(resourceId);
        const data = response.data;
        
        console.log('Resource data received:', data);
        
        if (data) {
          setResource({
            id: data.id,
            name: data.name || data.resourceTitle,
            type: data.type,
            description: data.description,
            about: data.about || '',
            link: data.link || data.resourceUrl,
            country: data.country || '',
            image: data.image || '/hero3.jpeg',
            date: data.date || new Date().toISOString().split('T')[0],
            isbn: data.isbn || '',
            statut: data.statut || '',
            detailsStatut: data.detailsStatut || '',
            publisher: data.publisher || '',
            coverageStartYear: data.coverageStartYear || '',
            coverageEndYear: data.coverageEndYear || '',
            coverageStatus: data.coverageStatus || '',
            resourceUrl: data.resourceUrl || data.link,
            domainJournal: data.domainJournal || '',
            issnOnline: data.issnOnline || '',
            issnPrint: data.issnPrint || '',
            doiPrefix: data.doiPrefix || ''
          });
        }
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
      
      setLoading(false);
    };

    if (resourceId) {
      fetchResource();
    }
  }, [resourceId]);

  return { resource, loading };
};