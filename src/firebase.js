import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBFEziu4_WGDNwgm2xf3vdKVz-SvjNNsas",
  authDomain: "linkedin-clone-72ac6.firebaseapp.com",
  projectId: "linkedin-clone-72ac6",
  storageBucket: "linkedin-clone-72ac6.appspot.com",
  messagingSenderId: "989846420955",
  appId: "1:989846420955:web:e17621af77126f2f303bfe",
  measurementId: "G-CFHGCB17ZW"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
