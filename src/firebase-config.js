// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5M6mrn5cCi19aKY1uy2larQrXNAydJ2w",
  authDomain: "blogproject-5b2f1.firebaseapp.com",
  projectId: "blogproject-5b2f1",
  storageBucket: "blogproject-5b2f1.appspot.com",
  messagingSenderId: "968146823787",
  appId: "1:968146823787:web:37fcfe303af00f050b9f2e",
  measurementId: "G-628VHTDMY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();