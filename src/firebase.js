import * as firebase from "firebase";
import dotenv from "dotenv";
import "firebase/database";

dotenv.config();

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "lockey-d41ff.firebaseapp.com",
  databaseURL: "https://lockey-d41ff.firebaseio.com",
  projectId: "lockey-d41ff",
  storageBucket: "lockey-d41ff.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
export const auth = firebase.auth();
export const dbRef = firebase.database().ref();
export const store = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
