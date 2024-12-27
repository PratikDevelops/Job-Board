// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL2fYjz4UAFzZRhaj9r1fQajqNCqWPt_k",
  authDomain: "job-board-3edd5.firebaseapp.com",
  projectId: "job-board-3edd5",
  storageBucket: "job-board-3edd5.appspot.com", // Corrected storageBucket URL
  messagingSenderId: "24026515256",
  appId: "1:24026515256:web:d5df82e8b87912997423cd"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Export the app
export default app;
