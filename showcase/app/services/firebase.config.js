import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVpt7SEopLxsR60hNAow99lhDuKQuUx-I",
    authDomain: "analyticsportfolio-fdf8e.firebaseapp.com",
    projectId: "analyticsportfolio-fdf8e",
    storageBucket: "analyticsportfolio-fdf8e.appspot.com",
    messagingSenderId: "648257917534",
    appId: "1:648257917534:web:27e86c2738cc96af96dacf",
    measurementId: "G-7W8794EP7L"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);