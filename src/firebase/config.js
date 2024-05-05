// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPnkdYhGiOEyd_KW1hNwPiu192x816lU",
  authDomain: "redux-8df44.firebaseapp.com",
  projectId: "redux-8df44",
  storageBucket: "redux-8df44.appspot.com",
  messagingSenderId: "843749747471",
  appId: "1:843749747471:web:dbb8fc5de9047032c66c7a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)