// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNzEmqxUZtY9cr7S4q75-ZnLoUJZy2h2M',
  authDomain: 'react-course-81b78.firebaseapp.com',
  projectId: 'react-course-81b78',
  storageBucket: 'react-course-81b78.appspot.com',
  messagingSenderId: '1022046188988',
  appId: '1:1022046188988:web:aa4f1bfcc81778d6a7a7b9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
