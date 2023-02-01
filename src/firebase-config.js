// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYv-U--0EgesgNiZFlVSqhHwps-jipoQU",
  authDomain: "tp-firebase-ynov.firebaseapp.com",
  projectId: "tp-firebase-ynov",
  storageBucket: "tp-firebase-ynov.appspot.com",
  messagingSenderId: "998364947309",
  appId: "1:998364947309:web:2d19650b52b25df6ff3064",
  measurementId: "G-6GHPZ2BBCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  {firebaseConfig};
