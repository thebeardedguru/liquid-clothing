import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBpDrXLD2qOtBrcjE8XTsYDVQ9XJnN8_kg",
  authDomain: "liquid-clothing-db.firebaseapp.com",
  projectId: "liquid-clothing-db",
  storageBucket: "liquid-clothing-db.appspot.com",
  messagingSenderId: "684472194535",
  appId: "1:684472194535:web:244338030b7f3f162f9942",
  measurementId: "G-DR1FH2JESG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
