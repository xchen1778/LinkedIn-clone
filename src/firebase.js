import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3JkD5oZ5PBdzalT3MEEOGfhFvz16C4mE",
  authDomain: "linkedin-clone-9d661.firebaseapp.com",
  projectId: "linkedin-clone-9d661",
  storageBucket: "linkedin-clone-9d661.appspot.com",
  messagingSenderId: "378754228039",
  appId: "1:378754228039:web:9c2b6bce8a54746e1c3662",
  measurementId: "G-NMRBKKN3EJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db };
