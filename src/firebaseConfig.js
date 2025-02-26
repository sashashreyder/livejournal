import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDHxmWQTTr2bPUMWw3TgCsWBP4P8id7IZM",
    authDomain: "livejournal-d4e90.firebaseapp.com",
    projectId: "livejournal-d4e90",
    storageBucket: "livejournal-d4e90.appspot.com",
    messagingSenderId: "1024579360540",
    appId: "1:1024579360540:web:e3ab48e71a5cd91d9fccd9",
    measurementId: "G-WTREVTLL69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Services
export const auth = getAuth(app);      // Authentication
export const db = getFirestore(app);   // Firestore Database
export const storage = getStorage(app); // Storage for images/files
export default app;
