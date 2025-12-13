import { NextResponse } from 'next/server';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVC4CqHBMSr9quu2q9lJODSfQvITAM-SQ",
  authDomain: "afri-fek.firebaseapp.com",
  projectId: "afri-fek",
  storageBucket: "afri-fek.firebasestorage.app",
  messagingSenderId: "1032447928128",
  appId: "1:1032447928128:web:9fa19b789243f96f6d3ca5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

    const [resourcesSnapshot, uploadedSnapshot] = await Promise.all([
      getDocs(collection(db, 'resources')),
      getDocs(collection(db, 'FormuploadedResult'))
    ]);

    const resources = resourcesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    const uploaded = uploadedSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    const allResources = [...resources, ...uploaded];
    const approved = allResources.filter(r => 
      r.status === 'approved' || !r.status || r.status === ''
    );

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