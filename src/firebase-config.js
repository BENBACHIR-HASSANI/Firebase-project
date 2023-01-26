// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyD6mERrAQKJ78mpkSi5TrkSS5JKB5tO0e8",
  authDomain: "tp-react-firebase.firebaseapp.com",
  projectId: "tp-react-firebase",
  storageBucket: "tp-react-firebase.appspot.com",
  messagingSenderId: "316798889060",
  appId: "1:316798889060:web:06e35a0168edaead490371",
  measurementId: "G-ZLR8N3Y0CS",
};

// Initialize Firebase
const app = initializeApp(firebase);
export const auth = getAuth(app);
// export default firebase;
