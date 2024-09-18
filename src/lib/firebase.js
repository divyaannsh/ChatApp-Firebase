
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:  "AIzaSyCj0Yi7Mj4vdIhw8rKArmpiRnxRDmFt65E",
  authDomain: "react-chatapp-adcfe.firebaseapp.com",
  projectId: "react-chatapp-adcfe",
  storageBucket: "react-chatapp-adcfe.appspot.com",
  messagingSenderId: "482670276271",
  appId: "1:482670276271:web:0354ef1b85572316c5ae5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()