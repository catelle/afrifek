import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Intercepteur pour gérer les erreurs
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Resources API
export const resourcesApi = {
  getAll: (params?: { status?: string; type?: string; country?: string; limit?: number }) =>
    apiClient.get('/resources', { params }),
  
  getById: (id: string) =>
    apiClient.get(`/resources/${id}`),
  
  create: (data: any) =>
    apiClient.post('/resources', data),
  
  update: (id: string, data: any) =>
    apiClient.put(`/resources/${id}`, data),
  
  delete: (id: string) =>
    apiClient.delete(`/resources/${id}`),
  
  getStats: () =>
    apiClient.get('/resources/stats'),
  
  search: (params: { q?: string; type?: string; country?: string }) =>
    apiClient.get('/resources/search', { params }),
};

// Landing API
export const landingApi = {
  getContent: () =>
    apiClient.get('/landing/content'),
  
  getImages: () =>
    apiClient.get('/landing/images'),
  
  updateContent: (data: any) =>
    apiClient.put('/landing/content', data),
};

// Partners API
export const partnersApi = {
  getAll: () =>
    apiClient.get('/partners'),
  
  create: (data: any) =>
    apiClient.post('/partners', data),
  
  update: (id: string, data: any) =>
    apiClient.put(`/partners/${id}`, data),
  
  delete: (id: string) =>
    apiClient.delete(`/partners/${id}`),
};

// Newsletter API
export const newsletterApi = {
  subscribe: (data: { email: string; name?: string }) =>
    apiClient.post('/newsletter/subscribe', data),
  
  getSubscribers: () =>
    apiClient.get('/newsletter/subscribers'),
  
  unsubscribe: (id: string) =>
    apiClient.delete(`/newsletter/${id}`),
};

// Comments API
export const commentsApi = {
  create: (data: any) =>
    apiClient.post('/comments', data),
  
  getByResource: (resourceId: string) =>
    apiClient.get(`/comments/resource/${resourceId}`),
  
  approve: (id: string) =>
    apiClient.put(`/comments/${id}/approve`),
};

export default apiClient;