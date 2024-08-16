// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_qLAzNNx3kr7I5C8WzTCNCVANZ7UyYM",
  authDomain: "reactjs-a7ebc.firebaseapp.com",
  projectId: "reactjs-a7ebc",
  storageBucket: "reactjs-a7ebc.appspot.com",
  messagingSenderId: "7766942268",
  appId: "1:7766942268:web:62b673b648c906c6921939",
  measurementId: "G-YZCL8J8WP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider,db };