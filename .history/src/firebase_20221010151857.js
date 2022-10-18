import * as firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
  })
  .auth();
  
