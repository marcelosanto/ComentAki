import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCnrQaooiuUrqLQerpc1EH-8IG_eCRu0cE",
  authDomain: "comentaki-appweb.firebaseapp.com",
  databaseURL: "https://comentaki-appweb.firebaseio.com",
  projectId: "comentaki-appweb",
  storageBucket: "",
  messagingSenderId: "657548948739",
  appId: "1:657548948739:web:33c99a0bb19465db876536"
};
firebase.initializeApp(firebaseConfig)

export default firebase