import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz0nDAjBNfTtXTJ_ww4TdoU3xvc_DxMoI",
    authDomain: "my-portfolio-f05af.firebaseapp.com",
    projectId: "my-portfolio-f05af",
    storageBucket: "my-portfolio-f05af.appspot.com",
    messagingSenderId: "1063686424863",
    appId: "1:1063686424863:web:001823aec02b4fff11c82a"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };