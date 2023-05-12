import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useState} from 'react'
import {
    addNewUser,
    auth,
    createUserWithEmailAndPassword,
} from "../../firebase"
import {useNavigation} from "@react-navigation/native";
export default function Register(){

    const [mail, setMail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigator = useNavigation();
    const handleRegistration = () =>{
        createUserWithEmailAndPassword(auth,mail,password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Registered with "+user.email)
                addNewUser(username,mail);
                setMail("")
                setPassword("")
                setUsername("")
                // navigation.replace("Home")
            }).catch(err => alert(err))
    }

    return (
        <View>
            <TextInput
                placeholder={"Enter your desired username..."}
                value={username}
                style={{}}
                onChangeText={text=>setUsername(text)}
            />
            <TextInput
                placeholder={"Enter your mail..."}
                value={mail}
                style={{}}
                onChangeText={text=>setMail(text)}
            />
            <TextInput
                placeholder={"Enter your password..."}
                value={password}
                style={{}}
                onChangeText={text=>setPassword(text)}/>
            <TouchableOpacity
                onPress={()=>handleRegistration()}
                style={{}}
            >
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> {
                    navigator.navigate("Login")
                }}
            >
                <Text>Already in?Login</Text>
            </TouchableOpacity>
        </View>
    )
}