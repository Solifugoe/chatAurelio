import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-466d3.firebaseapp.com",
  projectId: "reactchat-466d3",
  storageBucket: "reactchat-466d3.appspot.com",
  messagingSenderId: "638904827625",
  appId: "1:638904827625:web:fb956969863af7d6ef3a78"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()