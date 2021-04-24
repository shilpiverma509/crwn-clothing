import firebase from "./firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore;

firestore.collection('users').doc('YB6I7Hr11c6IohpjzR39').collection('cartItems').doc('2e1cqrkeYpIxzB2oFUYq');

//to access collection
firestore.collection('/users/YB6I7Hr11c6IohpjzR39/cartItems');
//to access document

firestore.doc('/users/YB6I7Hr11c6IohpjzR39/cartItems/2e1cqrkeYpIxzB2oFUYq');
