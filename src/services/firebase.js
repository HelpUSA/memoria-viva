// src/services/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC3RNKH521FQ2mQ7hXnHfIcX-nOjKNWiI0",
  authDomain: "memoriaviva-a238a.firebaseapp.com",
  projectId: "memoriaviva-a238a",
  storageBucket: "memoriaviva-a238a.appspot.com",
  messagingSenderId: "59017889478",
  appId: "1:59017889478:web:9945b0ff5001fc2f33b9c7",
  measurementId: "G-S5J6LQ3ZT0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
