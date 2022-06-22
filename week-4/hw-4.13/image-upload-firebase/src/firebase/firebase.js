// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjxknPfdxqOOoZfOMsip7vWoMd1ywTgLo",
    authDomain: "image-upload-project-63bed.firebaseapp.com",
    projectId: "image-upload-project-63bed",
    storageBucket: "image-upload-project-63bed.appspot.com",
    messagingSenderId: "366862042668",
    appId: "1:366862042668:web:cb9efb67effce517e23389",
    measurementId: "G-HNKP9YHR35"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  storage
}