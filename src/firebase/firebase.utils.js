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
  measurementId: "G-SZD58RVXRD",
};

//take the user object back from the auth library and store it in database
export const createUserProfileDocument = async(userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef= firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName,email}= userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log("error creating data",error.message);
    }

  }
  return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

googleProvider.setCustomParameters({prompt:'select_account'});
twitterProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(googleProvider);
export const signInWithTwitter = ()=>auth.signInWithPopup(twitterProvider);

export default firebase;