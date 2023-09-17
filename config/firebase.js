// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth , GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAq7eqrChOPEcVikaD57q8KjoZB3GcYo4",
  authDomain: "sih-hackathon-82bce.firebaseapp.com",
  projectId: "sih-hackathon-82bce",
  storageBucket: "sih-hackathon-82bce.appspot.com",
  messagingSenderId: "12585775872",
  appId: "1:12585775872:web:ccb467b9d178f6670439e5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider();
const auth = getAuth(app);
export{auth , provider};