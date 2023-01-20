// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJNJbrcoOH7ZjTkgdfTpSODCXm1Oh7Dw",
  authDomain: "tp-react-firebase-cloud.firebaseapp.com",
  projectId: "tp-react-firebase-cloud",
  storageBucket: "tp-react-firebase-cloud.appspot.com",
  messagingSenderId: "718828782715",
  appId: "1:718828782715:web:d2727677bf65beb9f04ede",
  measurementId: "G-DS9DCJ6HM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
