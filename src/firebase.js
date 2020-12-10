import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqysijAIdQldRFOB_UTfHO7hZAWQ3efzA",
  authDomain: "instagram-clone-d45be.firebaseapp.com",
  projectId: "instagram-clone-d45be",
  storageBucket: "instagram-clone-d45be.appspot.com",
  messagingSenderId: "160675977057",
  appId: "1:160675977057:web:4bb7f668db00e8c7ee5720",
  measurementId: "G-5S4S0HMKMF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
