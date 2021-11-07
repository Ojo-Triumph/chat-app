// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWhyk2rlF9HIs22_3BAUBdMITKLpG0Tu0",
  authDomain: "chat-app-ab30b.firebaseapp.com",
  databaseURL: "https://chat-app-ab30b-default-rtdb.firebaseio.com",
  projectId: "chat-app-ab30b",
  storageBucket: "chat-app-ab30b.appspot.com",
  messagingSenderId: "203655314352",
  appId: "1:203655314352:web:f20378d442874782bf3475",
  measurementId: "G-CJJ1CXETQ6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);


export default firebase;