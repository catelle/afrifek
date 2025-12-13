import { NextResponse } from 'next/server';
import { resourcesApi } from '@/lib/api-client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await resourcesApi.create(body);
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error submitting resource:', error);
    return NextResponse.json({ error: 'Failed to submit resource' }, { status: 500 });
  }
}