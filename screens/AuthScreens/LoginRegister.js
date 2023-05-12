import {Text, View, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import {
    addNewUser,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "../../firebase";
import {useNavigation} from "@react-navigation/native";
import {setData} from "../../helpers/asyncStorageFunctions";
export default function LoginRegister(){
    const [condition, setCondition] = useState(true)

    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    const handleLoginIn = ()=>{
        signInWithEmailAndPassword(auth,mail,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("** Logged in with "+user.email);
            })
            .catch(error => alert(error.message))
        setData("userInfo","true")
    }
    const handleRegistration = () =>{
        createUserWithEmailAndPassword(auth,mail,password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Registered with "+user.email)
                addNewUser(mail);
                setMail("")
                setPassword("")
            }).catch(err => alert(err))
    }

    return(
        <View>
            <TouchableOpacity
                onPress={()=>setCondition(true)}
            >
                <Text>Signin</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>setCondition(false)}
            >
                <Text>Signup</Text>
            </TouchableOpacity>
            {
                condition ?
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
                    </View>
                    :
                    <View>
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
                    </View>
            }
        </View>
    )
}