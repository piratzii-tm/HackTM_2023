import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
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

import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCqZIrX56Z5kX7_rjtRkjhMQe3vkTlMWy4",
    authDomain: "hacktm23-28b03.firebaseapp.com",
    projectId: "hacktm23-28b03",
    storageBucket: "hacktm23-28b03.appspot.com",
    messagingSenderId: "826732405496",
    appId: "1:826732405496:web:88c4b32e63a30188ca910d"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const app = firebase.initializeApp(firebaseConfig);

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
const uploadPdf = async (pdfUri, pdfName) => {
    const storageRef = firebase.storage().ref(`pdfs/${pdfName}`);
    const response = await fetch(pdfUri);
    const blob = await response.blob();
    const snapshot = await storageRef.put(blob);
    return snapshot.ref.getDownloadURL();
};

function getDaysCheckup(check){
    let checks = ["Blood Analysis" , "Lungs Check" , "Eyes Check" , "Dental Check"]
    let days = [120,500,90,30]

    let index = checks.findIndex(i=>i===check)
    console.log(days[index])
    return days[index]


}
async function uploadDocumentPdf(mail,link,startDate,doctor,check){
    const image = query(
        collection(firestore,"Checkups"),
        where("check_type","==",check)
    )
    const querySnapshot = await getDocs(image)
    const allDocs = querySnapshot.docs
    let check_image = allDocs[0].data().image_link

    let result = new Date(startDate);
    result.setDate(result.getDate() + getDaysCheckup(check));

    await addDoc(collection(firestore, "Users_documents"),{
        pdf_link:link,
        user_mail:mail,
        check_type:check,
        check_results:"",
        doctor:doctor,
        start_date:String(startDate),
        final_date:String(result),
        image_link:check_image
    })
}

async function getDocuments(){
    const getDocumentsQ = query(
        collection(firestore,"Checkups"),
    )

    const querySnapshot = await getDocs(getDocumentsQ)
    const allDocs = querySnapshot.docs
    return allDocs
}

async function addNotification(date,check,check_image,mail){
    await addDoc(collection(firestore, "Notifications"),{
        date:date,
        check_type:check,
        image_link:check_image,
        mail:mail
    })}

async function getNotifications(mail){
    const getDocumentsQ = query(
        collection(firestore,"Notifications"),
        where("mail" , "==",mail)
    )

    const querySnapshot = await getDocs(getDocumentsQ)
    const allDocs = querySnapshot.docs
    return allDocs
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
    addUserInfo,

    //firestore
    uploadPdf,
    uploadDocumentPdf,
    getDocuments,
    addNotification,
    getNotifications
}