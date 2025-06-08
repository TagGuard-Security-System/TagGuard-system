import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCHDjwwgAl2TIQnZyYMJPVV5CnMEA2MqIo",
  authDomain: "tagguard-8ff53.firebaseapp.com",
  projectId: "tagguard-8ff53",
  storageBucket: "tagguard-8ff53.firebasestorage.app",
  messagingSenderId: "632877721567",
  appId: "1:632877721567:web:24876dfe8cf8bc597c866a",
  measurementId: "G-4FSCXM8G57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);