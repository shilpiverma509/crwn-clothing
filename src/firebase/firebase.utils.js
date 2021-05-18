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

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }else {
//   firebase.app(); // if already initialized, use that one
// }


//take the user object back from the auth library and store it in database
export const createUserProfileDocument = async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef= firestore.doc(`users/123abcdefxy`);
  const collectionRef =  firestore.collection('users');
  // console.log("colle",collectionRef);
  const snapshot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  // console.log("collectionSnapshot",collectionSnapshot.docs.map((doc)=>doc.data()));

  if(!snapshot.exists){
    const {displayName,email}= userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName:"Test user",
        email:"test@gmail.com",
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log("error creating data",error.message);
    }

  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
  console.log("object",objectsToAdd);
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj)=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
    // console.log("newDocRef",newDocRef);
  })
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot)=>{
  const transformedCollections = collectionsSnapshot.docs.map(doc=>{
    const {title,items} = doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    };
  });
  console.log("cs",collectionsSnapshot);
  // console.log("transformedCollections",transformedCollections);
  return transformedCollections.reduce((accumulator,collection) => {
    console.log("colle",collection);
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
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