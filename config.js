import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBBT3lb8dsflJcd8zJs4B98VAIp4eyuN-A",
    authDomain: "mochilerosrddatabase.firebaseapp.com",
    databaseURL: "https://mochilerosrddatabase.firebaseio.com",
    projectId: "mochilerosrddatabase",
    storageBucket: "mochilerosrddatabase.appspot.com",
    messagingSenderId: "913546418414",
    appId: "1:913546418414:web:3aae37c1c8a78e78653bff",
    measurementId: "G-SY7H1MMPCD"
  };

  const app = Firebase.initializeApp(firebaseConfig);

  export const db = app.firestore();