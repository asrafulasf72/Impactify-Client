// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBawrjEZkzA1QtxwFz0OaMezwI2HdIVC1Y",
  authDomain: "impactify-9d246.firebaseapp.com",
  projectId: "impactify-9d246",
  storageBucket: "impactify-9d246.firebasestorage.app",
  messagingSenderId: "934657760697",
  appId: "1:934657760697:web:1e37ec7f0b4c639bfeaa68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);