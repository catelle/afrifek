import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function POST(request: NextRequest) {
  try {
    const { resources } = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/resources/bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resources })
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Bulk upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
