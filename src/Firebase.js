// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZtZko0QIz5C_alpmy3Xy50jM7prcJjk",
  authDomain: "ello-72ad4.firebaseapp.com",
  projectId: "ello-72ad4",
  storageBucket: "ello-72ad4.appspot.com",
  messagingSenderId: "861103911805",
  appId: "1:861103911805:web:107578d4f3ac72514d9214"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db = getFirestore()