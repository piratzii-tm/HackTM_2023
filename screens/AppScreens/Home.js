import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from 'react'
import {
    signOut,
    auth, getDocuments
} from "../../firebase";
import {setData} from "../../helpers/asyncStorageFunctions";
import KCheck from "../../components/KCheck"
import KSpacer from "../../components/KSpacer";

export default function Home(){

    const [documents,setDocuments] = useState([])

    useEffect( ()=>{
        const get = async () => await getDocuments(auth.currentUser?.email).then(res=>{
            let aux = []
            res.map(e=>aux.push(e.data()))
            setDocuments(aux)
        })
        get()
    },)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("** Logged of" )
            })
            .catch(err => alert(err))
        setData("userInfo","false")
    }

    return (
        <View>
            <KSpacer height={50}/>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={()=>handleSignOut()}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
            <FlatList data={documents} renderItem={({item}) =>
                <KCheck link ={item.image_link} date={"6 months"} check_type={item.check_type}/>
            }/>
        </View>
    )
}