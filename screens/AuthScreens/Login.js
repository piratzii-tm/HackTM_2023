import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useState} from 'react'
import {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "../../firebase";
import {useNavigation} from "@react-navigation/native";

export default function Login(){

    const navigator = useNavigation()

    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    const handleLoginIn = ()=>{
        signInWithEmailAndPassword(auth,mail,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("** Logged in with "+user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <View>
            <TextInput
                placeholder={"Enter your email..."}
                style={{}}
                value={mail}
                onChangeText={text => setMail(text)}
            />
            <TextInput
                placeholder={"Enter your password..."}
                style={{}}
                value={password}
                onChangeText={text=>setPassword(text)}
            />
            <TouchableOpacity
                style={{}}
                onPress={()=>handleLoginIn()}
            >
                <Text style={{}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> {
                    navigator.navigate("Register")
                }}
            >
                <Text>No account?Register</Text>
            </TouchableOpacity>
        </View>
    )
}