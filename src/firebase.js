import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCerZ1ZePITIdEOpnBRwX-ta_YZO4dJYhY",
  authDomain: "donfiles-movies.firebaseapp.com",
  projectId: "donfiles-movies",
  storageBucket: "donfiles-movies.appspot.com",
  messagingSenderId: "8465675534",
  appId: "1:8465675534:web:1a5fa59a9fde63e10e535f",
  measurementId: "G-4S0K5C16WM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db;