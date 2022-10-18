import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "REACT_APP_FIREBASE_API_KEY",
    authDomain: "unichat-a9133.firebaseapp.com",
    projectId: "unichat-a9133",
    storageBucket: "unichat-a9133.appspot.com",
    messagingSenderId: "336041858179",
    appId: "1:336041858179:web:70c1684bd0d834d28c37b6",
  })
  .auth();
