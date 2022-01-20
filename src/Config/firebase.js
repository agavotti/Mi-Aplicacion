import firebase from 'firebase/compat/app'
//Agregar estas dos lineas
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9Lfsz-_ciXM5HpOnDrERNgNskBTla5I",
  authDomain: "proyectocursoreactintento.firebaseapp.com",
  projectId: "proyectocursoreactintento",
  storageBucket: "proyectocursoreactintento.appspot.com",
  messagingSenderId: "524800360025",
  appId: "1:524800360025:web:901304306ab3524c993b48"
};

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase;