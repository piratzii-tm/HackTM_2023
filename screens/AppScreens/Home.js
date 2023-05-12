import {Text, TouchableOpacity, View} from "react-native";
import {useState} from 'react'
import {
    signOut,
    auth
} from "../../firebase";

export default function Home(){

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("** Logged of" )
            })
            .catch(err => alert(err))
    }

    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={()=>handleSignOut()}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}