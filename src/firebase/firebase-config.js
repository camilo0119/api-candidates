import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDISlGoQQfa6wXu10Uc_Hu3g7b1x3aWsIQ",
    authDomain: "zemoga-api.firebaseapp.com",
    projectId: "zemoga-api",
    storageBucket: "zemoga-api.appspot.com",
    messagingSenderId: "169011299939",
    appId: "1:169011299939:web:dec8b42b257598194fda56"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}