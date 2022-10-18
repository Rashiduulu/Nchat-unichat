import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "proress.env.REACT_APP_FIREBASE_API_KEY",
    authDomain: "proress.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "proress.env.REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "proress.env.REACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: "proress.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "proress.env.REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
