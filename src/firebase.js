// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyf10Xai54vJ4QQ3Z4FGUgk_hpoQqrJGw',
  authDomain: 'react-messenger-b8227.firebaseapp.com',
  database: 'https://react-messenger-b8227.firebaseio.com',
  projectId: 'react-messenger-b8227',
  storageBucket: 'react-messenger-b8227.appspot.com',
  messagingSenderId: 372345841451,
  appId: '1:372345841451:web:35c250e477934f4c44076e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
