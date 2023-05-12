import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"

import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';

import {
    getFirestore,
    addDoc,
    collection
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKl7xeyIteMVFqfNg5APpuSifk5xCjjzs",
    authDomain: "hacktm-2023.firebaseapp.com",
    projectId: "hacktm-2023",
    storageBucket: "hacktm-2023.appspot.com",
    messagingSenderId: "906556736610",
    appId: "1:906556736610:web:93c2c461b999d0c201bd3b",
    measurementId: "G-K8T03P1G2H"
};



const app = initializeApp(firebaseConfig);
const firestore = getFirestore()

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

async function addNewUser(mail){
    await addDoc(collection(firestore, "Users"),{
        mail:mail,
        first_name:"",
        last_name:"",
        height:"",
        weight:"",
        gender:""
    })

}

export {

    //functii pt autentificare
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getAuth,

    //firestore
    addNewUser
}