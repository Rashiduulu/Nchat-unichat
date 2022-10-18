import * as firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN=unichat-a9133.firebaseapp.com,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID=unichat-a9133,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET=unichat-a9133.appspot.com ,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID=336041858179 ,
    appId: process.env.REACT_APP_FIREBASE_APP_ID =1:336041858179:web:70c1684bd0d834d28c37b6,
  })
  .auth();
  
