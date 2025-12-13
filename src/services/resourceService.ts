import { resourcesApi } from '@/lib/api-client';

interface Resource {
  id: string;
  name: string;
  type: string;
  description: string;
  about: string;
  country: string;
  date: string;
  status: string;
  source: string;
}

class ResourceService {
  private resources: Resource[] = [];
  private fetchPromise: Promise<Resource[]> | null = null;

  private async fetchAllResources(): Promise<Resource[]> {
    if (this.fetchPromise) {
      return this.fetchPromise;
    }

    this.fetchPromise = (async () => {
      try {
        const response = await resourcesApi.getAll({ status: 'approved', limit: 1000 });
        const allDbResources = response.data.map((resource: any) => ({
          id: resource.id,
          name: resource.name,
          type: resource.type,
          description: resource.description || '',
          about: resource.about || '',
          country: resource.country || '',
          date: resource.date || new Date().toISOString().split('T')[0],
          status: resource.status,
          source: 'api',
          issnOnline: resource.issnOnline || '',
          issnPrint: resource.issnPrint || '',
          coverageStatus: resource.coverageStatus || '',
          statut: resource.statut || '',
          image: resource.image || '',
          domainJournal: resource.domainJournal || '',
        }));

        console.log('Total resources loaded:', allDbResources.length);
        this.resources = allDbResources;
        return this.resources;
      } catch (error) {
        console.error('Error fetching resources:', error);
        this.resources = [];
        return [];
      }
    })();
    return this.fetchPromise;
  }

  async getAllResources(): Promise<Resource[]> {
    if (this.resources.length > 0) {
      return this.resources;
    }
    return this.fetchAllResources();
  }

  async getStats() {
    await this.getAllResources();

    if (!this.resources || this.resources.length === 0) {
      return {
        total: 0,
        countries: 0,
        journals: 0,
        articles: 0,
      };
    }
    
    const journals = this.resources.filter(r => r.type === 'journal').length;
    const articles = this.resources.filter(r => r.type === 'article').length;
    const countries = new Set(this.resources.map(r => r.country).filter(Boolean)).size;

    return {
      total: this.resources.length,
      countries: countries,
      journals: journals,
      articles: articles,
    };
  }
}

export const resourceService = new ResourceService();