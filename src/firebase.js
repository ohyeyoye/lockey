import * as firebase from "firebase";
import firebaseConfig from "./config/dev";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
