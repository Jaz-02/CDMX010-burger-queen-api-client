import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyGj5eDKGc6IfUQduS6QnzcQKaGHrO1ao",
    authDomain: "burger-queen-d820a.firebaseapp.com",
    projectId: "burger-queen-d820a",
    storageBucket: "burger-queen-d820a.appspot.com",
    messagingSenderId: "100630255731",
    appId: "1:100630255731:web:1e8374db0123d34afe3206",
    //measurementId: "G-YMXYKWCXP4"
  };

  //  Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const auth = fb.auth();

  export {auth, fb}
