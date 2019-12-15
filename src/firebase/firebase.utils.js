// only import selected libraries
// because npm installed all firebase libraries 
// firebase must be imported to access firestore and auth

import firebase from "firebase/app"; 
import "firebase/firestore"; // database
import "firebase/auth"; // authentication 


const config = {
  apiKey: "AIzaSyDUq1g8mpMPI8VPrGoGfxvxusM71Xns3qo",
  authDomain: "react-project-db.firebaseapp.com",
  databaseURL: "https://react-project-db.firebaseio.com",
  projectId: "react-project-db",
  storageBucket: "react-project-db.appspot.com",
  messagingSenderId: "30616275440",
  appId: "1:30616275440:web:e4ba373933d5125b2bb535",
  measurementId: "G-1FEB4RYDBK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;