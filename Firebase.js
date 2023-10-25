// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACEFy6_j11GWYRI1-19CJ7SR3ONKLTJFQ",
  authDomain: "o-clock-b91c3.firebaseapp.com",
  projectId: "o-clock-b91c3",
  storageBucket: "o-clock-b91c3.appspot.com",
  messagingSenderId: "1024338264961",
  appId: "1:1024338264961:web:3d3d5725a3047cef615e80",
  measurementId: "G-E9WY1LL209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)
const STORAGE = getStorage(app)


export default app
export { AUTH, DATABASE, STORAGE };

