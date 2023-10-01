// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCo34_ngff6E5_lAdt9nE9dcBA6GRCUUuM",
    authDomain: "netflix-clone-85995.firebaseapp.com",
    projectId: "netflix-clone-85995",
    storageBucket: "netflix-clone-85995.appspot.com",
    messagingSenderId: "282035038138",
    appId: "1:282035038138:web:c70651c3f3db18670cdf83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;