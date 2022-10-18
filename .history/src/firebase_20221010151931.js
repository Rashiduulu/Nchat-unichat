import * as firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN=unichat-a9133.firebaseapp.com,
    projectId: process.env.,
    storageBucket:process.env. ,
    messagingSenderId:process.env. ,
    appId: process.env.,
  })
  .auth();
  
