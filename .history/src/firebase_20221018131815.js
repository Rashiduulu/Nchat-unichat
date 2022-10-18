import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "procressREACT_APP_FIREBASE_API_KEY",
    authDomain: "procressREACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "procressREACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "procressREACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: "procressREACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "procressREACT_APP_FIREBASE_APP_ID",
  })
  .auth();
