// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVSTculvW2hem6H2GqKyyd95yiu5zgoqs",

  authDomain: "turismo-53609.firebaseapp.com",

  projectId: "turismo-53609",

  storageBucket: "turismo-53609.firebasestorage.app",

  messagingSenderId: "544468216617",

  appId: "1:544468216617:web:062612995ca580e9102538"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

