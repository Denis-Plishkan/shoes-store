import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtpTgqkkU4meoFOq_3zQ9w7p4LUew3Fac",
    authDomain: "shoes-store-d53c8.firebaseapp.com",
    projectId: "shoes-store-d53c8",
    storageBucket: "shoes-store-d53c8.appspot.com",
    messagingSenderId: "364203065986",
    appId: "1:364203065986:web:46e3de5e4c9f90c77daa9b"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);