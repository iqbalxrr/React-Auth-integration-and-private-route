
// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpdErro6ctdk9A6_s8n1RPFPw1UEo2SMU",
  authDomain: "integral-and-private-data.firebaseapp.com",
  projectId: "integral-and-private-data",
  storageBucket: "integral-and-private-data.firebasestorage.app",
  messagingSenderId: "383734025164",
  appId: "1:383734025164:web:f9f11d0cfeb18a01102b69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;