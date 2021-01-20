import  firebase from 'firebase';
// import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm98uU0dtLQNh1U4U3bQyNp49qjDKXG6A",
  authDomain: "whatsapp-clone-a2a53.firebaseapp.com",
  projectId: "whatsapp-clone-a2a53",
  storageBucket: "whatsapp-clone-a2a53.appspot.com",
  messagingSenderId: "150283877683",
  appId: "1:150283877683:web:fe5cb53aa0911d284d5246",
  measurementId: "G-XTXB3T2ZZE"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider };
export default db;