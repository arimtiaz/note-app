// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrQF6tFGYChsIFPexxRxpSvl97lITn28s",
  authDomain: "note-app-62084.firebaseapp.com",
  projectId: "note-app-62084",
  storageBucket: "note-app-62084.appspot.com",
  messagingSenderId: "1002849922376",
  appId: "1:1002849922376:web:5f184b381db5189929d77d",
  measurementId: "G-MY6S60XQ8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;