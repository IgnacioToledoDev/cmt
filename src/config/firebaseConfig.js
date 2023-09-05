const APIKEY = import.meta.env.VITE_FIREBASE_APIKEY
const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECTID;
const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGIN_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGIN_SENDERID;
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const DB_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "@firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGIN_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);