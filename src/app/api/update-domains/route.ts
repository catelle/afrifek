import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function POST(request: NextRequest) {
  try {
    const { fromDomain, toDomain } = await request.json();
    
    if (!fromDomain || !toDomain) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const response = await fetch(`${API_BASE_URL}/resources/update-domains`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fromDomain, toDomain })
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating domains:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
