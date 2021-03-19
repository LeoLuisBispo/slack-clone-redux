import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-JIO6MA4sDRp7pbMG9kMMc3PjaqNyTq0",
  authDomain: "slack-clone-a2e68.firebaseapp.com",
  projectId: "slack-clone-a2e68",
  storageBucket: "slack-clone-a2e68.appspot.com",
  messagingSenderId: "1081223062768",
  appId: "1:1081223062768:web:ca5bc85aa151df80bb4e35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
