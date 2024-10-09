// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1CdjrKz29bLKOFXZkTkc09DMMZYLaXAk",
  authDomain: "medicare-3ec1a.firebaseapp.com",
  databaseURL: "https://medicare-3ec1a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "medicare-3ec1a",
  storageBucket: "medicare-3ec1a.appspot.com",
  messagingSenderId: "748246390802",
  appId: "1:748246390802:web:d95475e3bc44ba9a7ce0cb",
  measurementId: "G-2F3Y2N70PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);