import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB3okbl9W9KR-sYBuZ1RPxCqWzxTkD0k0",
  authDomain: "kutubkhana-492de.firebaseapp.com",
  projectId: "kutubkhana-492de",
  storageBucket: "kutubkhana-492de.appspot.com",
  messagingSenderId: "244834430613",
  appId: "1:244834430613:web:1a61b01817614c0c17b59c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

