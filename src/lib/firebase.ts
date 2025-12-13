// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {





  apiKey: "AIzaSyDVC4CqHBMSr9quu2q9lJODSfQvITAM-SQ",

  authDomain: "afri-fek.firebaseapp.com",

  projectId: "afri-fek",

  storageBucket: "afri-fek.firebasestorage.app",

  messagingSenderId: "1032447928128",

  appId: "1:1032447928128:web:9fa19b789243f96f6d3ca5",

  measurementId: "G-3LPR4CK0SN"







};










// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
const storage= getStorage(app);
const auth = getAuth();

export { db, auth , storage};
export default app;