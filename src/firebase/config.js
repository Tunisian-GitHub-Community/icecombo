import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA_rO1je89YwQiRUM8pTjmm8YWEmg5BgPE",
    authDomain: "icecombo-7b3f00.firebaseapp.com",
    projectId: "icecombo-7b3f00",
    storageBucket: "icecombo-7b3f00.appspot.com",
    messagingSenderId: "379621195061",
    appId: "1:379621195061:web:b3c513685b6f1a3e25e07c"
  };

// firebase init
firebase.initializeApp(firebaseConfig)

// services init
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
