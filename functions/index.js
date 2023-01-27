// const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const functions = require("firebase-functions");
// const React = require("react");
const admin = require("firebase-admin");

admin.initializeApp();
const firebase = require("./firebase-config");

// import { firebase } from "./firebase-config";


const firestore = firebase.firestore().collection("developers");
console.log(firestore);
