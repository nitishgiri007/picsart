import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDiOeqFktxz0IG5iKGh03oRfk9pzEejwog",
  authDomain: "dexter-pic.firebaseapp.com",
  projectId: "dexter-pic",
  storageBucket: "dexter-pic.appspot.com",
  messagingSenderId: "1002091068539",
  appId: "1:1002091068539:web:cd80974ecd36785ae9f6de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };