// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8JgTy9ZdBsfQ5ljsr8PHD2ALLiejRcvs",
  authDomain: "villa-401-motor-city.firebaseapp.com",
  projectId: "villa-401-motor-city",
  storageBucket: "villa-401-motor-city.firebasestorage.app",
  messagingSenderId: "1034152092018",
  appId: "1:1034152092018:web:1ee8f9b6b4b4e34829bdeb",
  measurementId: "G-6B24WWWC3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional - only works in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export { app, analytics };