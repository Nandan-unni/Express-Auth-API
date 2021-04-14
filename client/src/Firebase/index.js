import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWKqyP9I-KZmBWkW5fjzBczFrUsZ_qRzw",
    authDomain: "twitter-clone-mern-project.firebaseapp.com",
    projectId: "twitter-clone-mern-project",
    storageBucket: "twitter-clone-mern-project.appspot.com",
    messagingSenderId: "717528522463",
    appId: "1:717528522463:web:9ce77ccd6a8a13678cd36a",
    measurementId: "G-73432E0C0M"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(GoogleAuthProvider);
