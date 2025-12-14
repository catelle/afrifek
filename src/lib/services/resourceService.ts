import { resourcesApi } from '@/lib/api-client';
import { cache } from '@/lib/cache';

export interface ResourceData {
  id?: string;
  name: string;
  type: 'journal' | 'article' | 'institution';
  description: string;
  about?: string;
  link: string;
  country: string;
  language: string;
  image?: string;
  date: string;
  status: string;
  createdAt: Date;
  [key: string]: any;
}

export class ResourceService {
  static async getResources(): Promise<ResourceData[]> {
    try {
      const cachedData = await cache.get('all-resources');
      if (cachedData) {
        return cachedData;
      }

      if (!navigator.onLine) {
        return [];
      }

      const response = await resourcesApi.getAll({ status: 'approved' });
      const allResources = response.data.map((data: any) => ({
        id: data.id,
        name: data.name || '',
        type: data.type || 'article',
        description: data.description || '',
        about: data.about,
        link: data.link || '',
        country: data.country || '',
        language: data.language || 'fr',
        image: data.image || this.getDefaultImage(data.type),
        date: data.date || new Date().toISOString().split('T')[0],
        status: data.status || 'approved',
        createdAt: new Date(data.createdAt || Date.now()),
        source: 'api',
        ...data
      })) as ResourceData[];

      const sortedResources = allResources.sort(this.sortResources);
      await cache.set('all-resources', sortedResources);
      
      return sortedResources;
    } catch (error) {
      console.error('Error fetching resources:', error);
      return [];
    }
  }

  static async createResource(resourceData: Omit<ResourceData, 'id' | 'createdAt'>): Promise<string> {
    const response = await resourcesApi.create({
      ...resourceData,
      createdAt: new Date(),
      status: 'pending'
    });
    
    await cache.delete('all-resources');
    return response.data.id;
  }

  private static getDefaultImage(type: string): string {
    switch (type) {
      case 'journal': return '/search.png';
      case 'article': return '/hero3.jpeg';
      case 'academy': return '/academy.jpg';
      default: return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop';
    }
  }

  private static sortResources(a: ResourceData, b: ResourceData): number {
    const priorityA = this.getResourcePriority(a);
    const priorityB = this.getResourcePriority(b);
    
    if (priorityA !== priorityB) return priorityB - priorityA;
    
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }

  private static getResourcePriority(resource: ResourceData): number {
    const name = resource.name?.toLowerCase() || '';
    const description = resource.description?.toLowerCase() || '';
    
    if (name.includes('hsd') || name.includes('hra') || name.includes('afrimvoe')) return 3;
    if (description.includes('hsd') || description.includes('hra')) return 2;
    if (resource.image && !resource.image.includes('unsplash.com')) return 1;
    
    return 0;
  }
}