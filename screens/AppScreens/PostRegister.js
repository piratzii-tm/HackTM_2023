import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useContext, useState} from 'react'
import {
    addUserInfo, auth,
} from "../../firebase";
import {PostRegisterContext} from "../../helpers/context/PostRegisterContext";
import {setData} from "../../helpers/asyncStorageFunctions";

import {PostRegister_Style} from "../../styles/PostRegister_Style";
import Spacer from "../../components/KSpacer";

export default function PostRegister(){

    const {userInfo,setUserInfo} = useContext(PostRegisterContext)

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")

    return (
        <View style={PostRegister_Style.container}>
            <Spacer height={50}/>
            <Text style={{fontWeight: "bold", fontSize: 24}}>Personal Information</Text>
            <Spacer/>
            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>First Name</Text>
                <TextInput placeholder="First Name" style={PostRegister_Style.textInput}/>
                value = {firstName}
                onChangeText={text=>setFirstName(text)}
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Last Name</Text>
                <TextInput placeholder="Last Name" style={PostRegister_Style.textInput}/>
                value = {lastName}
                onChangeText={text=>setLastName(text)}
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Gender</Text>
                <TextInput placeholder="Gender" style={PostRegister_Style.textInput}/>
                value = {gender}
                onChangeText={text=>setGender(text)}
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Age</Text>
                <TextInput placeholder="Age" style={PostRegister_Style.textInput}/>
                value = {age}
                onChangeText={text=>setAge(text)}
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Height(cm)</Text>
                <TextInput placeholder="Height" style={PostRegister_Style.textInput}/>
                value = {height}
                onChangeText={text=>setHeight(text)}
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Weight(km)</Text>
                <TextInput placeholder="Weight" style={PostRegister_Style.textInput}/>
                value = {weight}
                onChangeText={text=>setWeight(text)}
            </View>

            <Spacer/>
            <TouchableOpacity style={PostRegister_Style.saveButton}
                              onPress={()=>{
                                  addUserInfo(auth.currentUser?.email, firstName, lastName, height, weight, gender)
                                  setUserInfo(true)
                                  setData("userInfo","true")
                              }}
            >
                <Text>Save</Text>
                <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>Save</Text>
            </TouchableOpacity>
        </View>

    )
}