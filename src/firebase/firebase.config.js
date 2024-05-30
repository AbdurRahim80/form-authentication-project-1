// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCktgob0mbFu9Xpf3DwekPDAKmgh8hRB8",
  authDomain: "form-authentication-project1.firebaseapp.com",
  projectId: "form-authentication-project1",
  storageBucket: "form-authentication-project1.appspot.com",
  messagingSenderId: "688672238091",
  appId: "1:688672238091:web:1ac09f3d8053f0837fb50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;