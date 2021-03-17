import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAwzyxXN5Xfb41hpoXhfyjvsceVovAQrrg",
  authDomain: "crown-db-f056c.firebaseapp.com",
  projectId: "crown-db-f056c",
  storageBucket: "crown-db-f056c.appspot.com",
  messagingSenderId: "1015437993805",
  appId: "1:1015437993805:web:3156faa1891807959cb904",
  measurementId: "G-SZD58RVXRD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;