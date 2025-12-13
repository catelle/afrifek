const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function getResources(filters?: { status?: string; type?: string; country?: string }) {
  const params = new URLSearchParams(filters as any);
  const res = await fetch(`${API_URL}/resources?${params}`);
  if (!res.ok) throw new Error('Failed to fetch resources');
  return res.json();
}

export async function searchResources(query: string, filters?: { type?: string; country?: string }) {
  const params = new URLSearchParams({ q: query, ...filters } as any);
  const res = await fetch(`${API_URL}/resources/search?${params}`);
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function submitResource(data: any) {
  const res = await fetch(`${API_URL}/resources`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Failed to submit resource');
  return res.json();
}

export async function getResourceById(id: string) {
  const res = await fetch(`${API_URL}/resources/${id}`);
  if (!res.ok) throw new Error('Resource not found');
  return res.json();
}
