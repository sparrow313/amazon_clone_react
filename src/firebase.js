import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARC7IPdb-JPJEbFZjjGKuxsJBWOP3bPq0",
  authDomain: "clone-1592b.firebaseapp.com",
  projectId: "clone-1592b",
  storageBucket: "clone-1592b.appspot.com",
  messagingSenderId: "347419857807",
  appId: "1:347419857807:web:dd180f465aca7d18a471fa",
  measurementId: "G-PVB6HC0524",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
