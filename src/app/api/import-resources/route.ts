import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const { resources } = await request.json();
    
    if (!resources || !Array.isArray(resources)) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    
    let count = 0;
    for (const resource of resources) {
      const { id, ...data } = resource;
      await addDoc(collection(db, 'ResourceFromA'), {
        ...data,
        createdAt: new Date()
      });
      count++;
    }
    
    return NextResponse.json({ success: true, count });
  } catch (error: any) {
    console.error('Import error:', error);
    return NextResponse.json({ error: error.message || 'Import failed' }, { status: 500 });
  }
}
