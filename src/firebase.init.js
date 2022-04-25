// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqbhD8D1NeFPx422SBN5GVIs0P3UwLDHw",
  authDomain: "genius-car-service-56f62.firebaseapp.com",
  projectId: "genius-car-service-56f62",
  storageBucket: "genius-car-service-56f62.appspot.com",
  messagingSenderId: "803186317267",
  appId: "1:803186317267:web:087fafcf25d6bd4c280126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth