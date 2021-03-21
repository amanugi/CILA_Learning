import  firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfSCUkkEGIQxJjZL9SVR9nzV6vJOalF-I",
    authDomain: "smackchat-5613d.firebaseapp.com",
    projectId: "smackchat-5613d",
    storageBucket: "smackchat-5613d.appspot.com",
    messagingSenderId: "319095034437",
    appId: "1:319095034437:web:d1607935a3b29a9dd9892c"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();
  let firebaseDb = firebaseApp.database();

  export  { firebaseAuth, firebaseDb } 
