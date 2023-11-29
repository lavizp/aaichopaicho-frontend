import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const config = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: "sandesh-stumble.appspot.com",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyAgipLMCHAwk7L6318ztjMzfv0tq97ddmc",

  authDomain: "aaichopaicho-56369.firebaseapp.com",

  projectId: "aaichopaicho-56369",

  storageBucket: "aaichopaicho-56369.appspot.com",

  messagingSenderId: "780278302027",

  appId: "1:780278302027:web:315b5f9ddec0a608bdd4ce",

  measurementId: "G-7LR2QBLDTN",
};

// Initialize Firebase
export const firebaseApp = initializeApp(config);
export const storage = getStorage(firebaseApp);
export const database = getFirestore(firebaseApp);
