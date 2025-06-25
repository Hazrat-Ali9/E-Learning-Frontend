import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyIW2-szqnYjFb2JNIdCG3iLAghTbp5vc",
  authDomain: "learning-management-syst-1b841.firebaseapp.com",
  projectId: "learning-management-syst-1b841",
  storageBucket: "learning-management-syst-1b841.firebasestorage.app",
  messagingSenderId: "1067518544217",
  appId: "1:1067518544217:web:fa781706a5105c6c302448",
  measurementId: "G-J9H4Z4HV2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

