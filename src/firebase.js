import firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCB3okbl9W9KR-sYBuZ1RPxCqWzxTkD0k0",
    authDomain: "kutubkhana-492de.firebaseapp.com",
    projectId: "kutubkhana-492de",
    storageBucket: "kutubkhana-492de.appspot.com",
    messagingSenderId: "244834430613",
    appId: "1:244834430613:web:1a61b01817614c0c17b59c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebase.firebasestore();
  const auth = firebase.auth();
  export {auth};
  export default db;

