import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const { resources } = await request.json();
    
    const results = [];
    for (const resource of resources) {
      const docRef = await addDoc(collection(db, 'ResourceFromA'), {
        name: resource.name,
        link: resource.url,
        resourceUrl: resource.url,
        domainJournal: 'domain4',
        type: 'journal',
        description: resource.name,
        about: '',
        country: '',
        image: '',
        statut: 'ACTIVE',
        status: 'approved',
        date: new Date().toISOString().split('T')[0],
        resourceLanguage: 'en',
        createdAt: new Date()
      });
      results.push(docRef.id);
    }
    
    return NextResponse.json({ success: true, count: results.length });
  } catch (error) {
    console.error('Bulk upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
