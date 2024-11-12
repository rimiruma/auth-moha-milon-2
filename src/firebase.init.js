// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7Q2jDWGxKWdcftluLRWnOcLBhC1Ko08c",
    authDomain: "auth-moha-milon-2-4c5f9.firebaseapp.com",
    projectId: "auth-moha-milon-2-4c5f9",
    storageBucket: "auth-moha-milon-2-4c5f9.firebasestorage.app",
    messagingSenderId: "181861238593",
    appId: "1:181861238593:web:b8d6075f2270d140e443c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);