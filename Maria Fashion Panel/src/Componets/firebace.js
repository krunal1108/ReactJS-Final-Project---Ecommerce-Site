// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAOYY918BQbQDg4pd2DNop4KqVe1SzbIk",
  authDomain: "mariafashion-b6b23.firebaseapp.com",
  projectId: "mariafashion-b6b23",
  storageBucket: "mariafashion-b6b23.appspot.com",
  messagingSenderId: "814694278901",
  appId: "1:814694278901:web:279437b37881f455cd47bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

