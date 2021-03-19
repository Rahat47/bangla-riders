import firebase from "firebase/app";
import "firebase/auth";

const fbase = firebase.initializeApp({
    apiKey: "AIzaSyBEAtupc1UpGT-k3Qsj3YGrO2AOdLRbiD0",
    authDomain: "bangla-riders.firebaseapp.com",
    projectId: "bangla-riders",
    storageBucket: "bangla-riders.appspot.com",
    messagingSenderId: "414419502745",
    appId: "1:414419502745:web:4e0cad77bdc77d59031a08",
});



export const auth = fbase.auth()
export default firebase