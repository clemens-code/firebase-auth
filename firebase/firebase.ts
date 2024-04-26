import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_FIREBASE_DOMAIN",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_MESSAGING",
    appId: "YOUR_APP"
  };

// Initialize Firebase
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;