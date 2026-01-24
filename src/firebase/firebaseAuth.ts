// src/firebase/firebaseAuth.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config (Vite uses import.meta.env)
const firebaseConfig = {
    apiKey: "AIzaSyCLjhA5vjoPq9dml_n_wm-WfY0v9ksv2tI",
    authDomain: "virgin-43c2b.firebaseapp.com",
    projectId: "virgin-43c2b",
    storageBucket: "virgin-43c2b.firebasestorage.app",
    messagingSenderId: "214661170235",
    appId: "1:214661170235:web:a69e9d7741f1dd4346c81e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
