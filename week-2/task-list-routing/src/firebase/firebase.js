// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2eW3iorCxhIMRZHTdZ2H3efDB49OzM9M",
  authDomain: "ix-task-list-3b95d.firebaseapp.com",
  projectId: "ix-task-list-3b95d",
  storageBucket: "ix-task-list-3b95d.appspot.com",
  messagingSenderId: "202239639470",
  appId: "1:202239639470:web:ddb24800b02f0e2a59d23f",
  measurementId: "G-66FWBD97CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}