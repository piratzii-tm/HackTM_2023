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
    collection,
    updateDoc,
    doc,
    query,
    where,
    getDocs
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

async function addUserId(mail,id){

    await updateDoc(doc(firestore,"Users",id),{
        mail:mail,
        first_name:"",
        last_name:"",
        height:"",
        weight:"",
        gender:"",
        id:id
    })
}

async function addNewUser(mail){
    await addDoc(collection(firestore, "Users"),{
        mail:mail,
        first_name:"",
        last_name:"",
        height:"",
        weight:"",
        gender:"",
        id:""
    }).then(res=>addUserId(mail,res.id))
}
async function addUserInfo(mail,firstName,lastName,height,weight,gender){
    const user = query(
        collection(firestore,"Users"),
        where("mail","==",mail)
    )
    const querySnapshot = await getDocs(user)
    const allDocs = querySnapshot.docs
    let userId = allDocs[0].data().id
    let aux = "";
    for(let i=0;i<userId.length;i++){
        aux = aux + userId[i]
    }
    userId=aux;

    await updateDoc(doc(firestore,"Users",userId),{
        mail:mail,
        first_name:firstName,
        last_name:lastName,
        height:height,
        weight:weight,
        gender:gender,
        id:userId
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
    addNewUser,
    addUserInfo
}