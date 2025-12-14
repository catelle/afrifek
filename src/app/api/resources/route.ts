import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

let cachedResources: any[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;

export async function GET() {
  try {
    const now = Date.now();
    
    if (cachedResources && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({ 
        resources: cachedResources,
        cached: true
      });
    }

    const response = await fetch(`${API_BASE_URL}/resources`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const data = await response.json();
    const approved = data.resources || data;

    cachedResources = approved;
    cacheTimestamp = now;

    return NextResponse.json({ 
      resources: approved,
      count: approved.length
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}