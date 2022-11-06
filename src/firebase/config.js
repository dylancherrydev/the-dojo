import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBbZGwq8YYPF7otgUcYv4wExRrz2RSUiMo",
  authDomain: "thedojosite-94989.firebaseapp.com",
  projectId: "thedojosite-94989",
  storageBucket: "thedojosite-94989.appspot.com",
  messagingSenderId: "327682614060",
  appId: "1:327682614060:web:0e824a8a0d88ce6c9a0289"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, projectStorage, timestamp }