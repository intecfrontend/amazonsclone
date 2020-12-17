import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBn-XY55Wum3SPYDK2bDsyqhVrX7xAWW5A",
  authDomain: "clone-94bba.firebaseapp.com",
  databaseURL: "https://clone-94bba.firebaseio.com",
  projectId: "clone-94bba",
  storageBucket: "clone-94bba.appspot.com",
  messagingSenderId: "1039068884516",
  appId: "1:1039068884516:web:9f9afd575f08161ae1f2b1",
  measurementId: "G-3JVV351W11",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
