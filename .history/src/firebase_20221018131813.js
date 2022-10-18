import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "proREACT_APP_FIREBASE_API_KEY",
    authDomain: "proREACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "proREACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "proREACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: "proREACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "proREACT_APP_FIREBASE_APP_ID",
  })
  .auth();
