// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvTzel07V3Vxhf4EAxIEZ79kASxM---E",
  authDomain: "rblocks-64be8.firebaseapp.com",
  projectId: "rblocks-64be8",
  storageBucket: "rblocks-64be8.firebasestorage.app",
  messagingSenderId: "1067891917308",
  appId: "1:1067891917308:web:7766877882da342e977279",
  measurementId: "G-FFYMJ169QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);