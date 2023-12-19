import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJNHQb97TZJvEObJuOLlA4NB6eFYsSGY8",
  authDomain: "upshot-legalgen-5d6d3.firebaseapp.com",
  projectId: "upshot-legalgen-5d6d3",
  storageBucket: "upshot-legalgen-5d6d3.appspot.com",
  messagingSenderId: "1073253105581",
  appId: "1:1073253105581:web:181b95284b90b26bd76b24",
  measurementId: "G-3SHE1T5DXH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
