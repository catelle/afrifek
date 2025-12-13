import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, doc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const { fromDomain, toDomain } = await request.json();
    
    if (!fromDomain || !toDomain) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const resourcesRef = collection(db, 'ResourceFromA');
    const q = query(resourcesRef, where('domainJournal', '==', fromDomain));
    const snapshot = await getDocs(q);
    
    let updated = 0;
    const updatePromises = snapshot.docs.map(async (docSnapshot) => {
      const docRef = doc(db, 'ResourceFromA', docSnapshot.id);
      await updateDoc(docRef, { domainJournal: toDomain });
      updated++;
    });
    
    await Promise.all(updatePromises);
    
    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error('Error updating domains:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
