import {getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsxB4WiwApKVD0N-KyWxhr4dlg8NHZ8yk",
  authDomain: "marketwiz-48f6c.firebaseapp.com",
  projectId: "marketwiz-48f6c",
  storageBucket: "marketwiz-48f6c.appspot.com",
  messagingSenderId: "791735430749",
  appId: "1:791735430749:web:e2d2108c90e1f44a8027b4",
  measurementId: "G-87N5W7HS68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// collections
export const Users = collection(db, "Users");
