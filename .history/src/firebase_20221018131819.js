import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "procress.env.REACT_APP_FIREBASE_API_KEY",
    authDomain: "procress.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "procress.env.REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "procress.env.REACT_APP_FIREBASE_STORAGE_BUCKET ",
    messagingSenderId: "procress.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "procress.env.REACT_APP_FIREBASE_APP_ID",
  })
  .auth();
