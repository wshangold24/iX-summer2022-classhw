// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiJDRhSQ9V6ZBLpsGUFpWHvbNZI57rQHg",
  authDomain: "recipe-app-c8ff3.firebaseapp.com",
  projectId: "recipe-app-c8ff3",
  storageBucket: "recipe-app-c8ff3.appspot.com",
  messagingSenderId: "227956972541",
  appId: "1:227956972541:web:7a04b96f4e894c4f841794",
  measurementId: "G-682WEEBY4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}