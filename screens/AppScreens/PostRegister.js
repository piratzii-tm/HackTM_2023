import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useState} from 'react'

export default function PostRegister(){
    return (
        <View>
            <Text>PostRegister</Text>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TextInput/>
            <TouchableOpacity
                onPress={()=>{}}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>

    )
}