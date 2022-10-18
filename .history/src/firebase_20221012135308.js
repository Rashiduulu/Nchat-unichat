// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import Firebase from "firebase/app"
import "firebase/auth"


export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyBLySV6VAdw2WkSwbxavwCItwT1LiFpAtU",
  authDomain: "unichat-a9133.firebaseapp.com",
  projectId: "unichat-a9133",
  storageBucket: "unichat-a9133.appspot.com",
  messagingSenderId: "336041858179",
  appId: "1:336041858179:web:70c1684bd0d834d28c37b6",
}).auth();

// Initialize Firebase
// export const firebase = initializeApp(firebaseConfig);
// export const auth = getAuth();
