// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdr0jrqzJow1HV3C4uTKkcHm-dTf4I22M",
  authDomain: "craft-haven.firebaseapp.com",
  projectId: "craft-haven",
  storageBucket: "craft-haven.appspot.com",
  messagingSenderId: "360877755228",
  appId: "1:360877755228:web:dd8d0b5c05719197da0f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;