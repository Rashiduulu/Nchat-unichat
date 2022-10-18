import * as firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.,
    projectId: process.env.,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
  })
  .auth();
  
