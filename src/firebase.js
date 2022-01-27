import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVrsy6syuJi9ocZBCVUQH6m-MhGKQum4o",
    authDomain: "linkedin-clone-6bf86.firebaseapp.com",
    projectId: "linkedin-clone-6bf86",
    storageBucket: "linkedin-clone-6bf86.appspot.com",
    messagingSenderId: "2186058015",
    appId: "1:2186058015:web:89ad1943a8c1d0b8beb82a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth,provider,storage};
export default db;