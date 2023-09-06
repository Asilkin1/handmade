// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBacusyA1uwnzifae1YR9r1VEF24Nx9hzw",
  authDomain: "lastdays-2d6c4.firebaseapp.com",
  projectId: "lastdays-2d6c4",
  storageBucket: "lastdays-2d6c4.appspot.com",
  messagingSenderId: "568715132624",
  appId: "1:568715132624:web:c8f007f6fb85b30113a8d5",
  measurementId: "G-EFF98HBZ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);