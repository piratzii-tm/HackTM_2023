import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useState} from 'react'
import {PostRegister_Style} from "../../styles/PostRegister_Style";
import Spacer from "../../components/KSpacer";

export default function PostRegister(){
    return (
        <View style={PostRegister_Style.container}>
            <Spacer height={50}/>
            <Text style={{fontWeight: "bold", fontSize: 24}}>Personal Information</Text>
            <Spacer/>
            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>First Name</Text>
                <TextInput placeholder="First Name" style={PostRegister_Style.textInput}/>
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Last Name</Text>
                <TextInput placeholder="Last Name" style={PostRegister_Style.textInput}/>
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Gender</Text>
                <TextInput placeholder="Gender" style={PostRegister_Style.textInput}/>
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Age</Text>
                <TextInput placeholder="Age" style={PostRegister_Style.textInput}/>
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Height(cm)</Text>
                <TextInput placeholder="Height" style={PostRegister_Style.textInput}/>
            </View>

            <View style={PostRegister_Style.textInputContainer}>
                <Text style={PostRegister_Style.text}>Weight(km)</Text>
                <TextInput placeholder="Weight" style={PostRegister_Style.textInput}/>
            </View>

            <Spacer/>
            <TouchableOpacity style={PostRegister_Style.saveButton}
                onPress={()=>{}}
            >
                <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>Save</Text>
            </TouchableOpacity>
        </View>

    )
}