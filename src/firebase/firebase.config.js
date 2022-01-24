// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env["REACT_APP_FIREBASE_KEY"],
    authDomain: "soundof-bc447.firebaseapp.com",
    projectId: "soundof-bc447",
    storageBucket: "soundof-bc447.appspot.com",
    messagingSenderId: "127808799855",
    appId: "1:127808799855:web:1f5f3f360babdbcc5eb99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db;
