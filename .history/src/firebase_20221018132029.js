import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: pro"REACT_APP_FIREBASE_API_KEY",
    authDomain: pro"REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: pro"REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: pro"REACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: pro"REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: pro"REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
