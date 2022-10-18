import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: process"REACT_APP_FIREBASE_API_KEY",
    authDomain: process"REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: process"REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: process"REACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: process"REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: process"REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
