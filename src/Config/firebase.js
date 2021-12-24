// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf4GtUT1D-ftzNg1rTrLrE4SbRJFvocoE",
  authDomain: "cerebroxmenpage.firebaseapp.com",
  projectId: "cerebroxmenpage",
  storageBucket: "cerebroxmenpage.appspot.com",
  messagingSenderId: "331000969378",
  appId: "1:331000969378:web:f3142df4e41e39e8523ffb",
  measurementId: "G-XBPD192X3L"
};

firebase.initializeApp(firebaseConfig);
export default firebase;