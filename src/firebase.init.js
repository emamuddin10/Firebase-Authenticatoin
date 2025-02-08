

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkWl4bdSw3oxY3yFc3kYFWBa8aWDsHkw0",
  authDomain: "milon-mela-firebase-auth.firebaseapp.com",
  projectId: "milon-mela-firebase-auth",
  storageBucket: "milon-mela-firebase-auth.firebasestorage.app",
  messagingSenderId: "178910741824",
  appId: "1:178910741824:web:3e751ee4ef1c7917ea66a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);