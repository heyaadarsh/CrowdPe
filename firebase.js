// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Paste your config below from Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAU4C1kR3x4xRs4IA_H22zpoqjPSCTpOr4",
    authDomain: "crowdpe-78fbf.firebaseapp.com",
    projectId: "crowdpe-78fbf",
    storageBucket: "crowdpe-78fbf.firebasestorage.app",
    messagingSenderId: "862437623623",
    appId: "1:862437623623:web:5de87913b39d0038eeae62"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const storage = getStorage(app);
