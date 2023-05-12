import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useContext, useState} from 'react'
import {
    addUserInfo, auth,
} from "../../firebase";
import {PostRegisterContext} from "../../helpers/context/PostRegisterContext";
import {setData} from "../../helpers/asyncStorageFunctions";

export default function PostRegister(){

    const {userInfo,setUserInfo} = useContext(PostRegisterContext)

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [gender, setGender] = useState("")

    return (
        <View>
            <Text>PostRegister</Text>
            <TextInput
                placeholder={"First name ..."}
                value = {firstName}
                onChangeText={text=>setFirstName(text)}
            />
            <TextInput
                placeholder={"Last name ..."}
                value = {lastName}
                onChangeText={text=>setLastName(text)}
            />
            <TextInput
                placeholder={"Insert your height ..."}
                value = {height}
                onChangeText={text=>setHeight(text)}
            />
            <TextInput
                placeholder={"Insert your weight ..."}
                value = {weight}
                onChangeText={text=>setWeight(text)}
            />
            <TextInput
                placeholder={"Insert your gender ..."}
                value = {gender}
                onChangeText={text=>setGender(text)}
            />
            <TouchableOpacity
                onPress={()=> {
                    addUserInfo(auth.currentUser?.email, firstName, lastName, height, weight, gender)
                    setUserInfo(true)
                    setData("userInfo","true")
                }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>

    )
}