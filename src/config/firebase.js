

import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDz81lAijLoqG5M1hbYlCHgSQafe7X_TKY",
  authDomain: "fir-cloneassignment.firebaseapp.com",
  projectId: "fir-cloneassignment",
  storageBucket: "fir-cloneassignment.appspot.com",
  messagingSenderId: "572059168267",
  appId: "1:572059168267:web:2de9fdf829b35482fb610e",
  measurementId: "G-R9NCRPQ3FW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export const storage = firebase.storage();
//   export const auth = firebase.auth();






















