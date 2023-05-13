import {Text, View, TextInput, TouchableOpacity, Vibration} from "react-native";
import {useState} from "react";
import {
    addNewUser, addUserInfo,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "../../firebase";
import {useNavigation} from "@react-navigation/native";
import {setData} from "../../helpers/asyncStorageFunctions";
import KSpacer from "../../components/KSpacer";
import {IfRegister, IfSignIn, LoginRegister_Style, TextRegister, TextSignIn} from "../../styles/LoginRegister_Style";
import {PostRegister_Style} from "../../styles/PostRegister_Style";

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

        <View style={LoginRegister_Style.container}>
            <KSpacer/>
            <View style={LoginRegister_Style.up}>

            </View>
            <View style={LoginRegister_Style.down}>
                <View style={LoginRegister_Style.sign_reg_container}>

                    <TouchableOpacity style={condition ?  IfSignIn(): IfRegister()}
                                      onPress={()=>setCondition(true)}
                    >
                        <Text style={condition ? TextSignIn(): TextRegister()}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={condition ? IfRegister() : IfSignIn()}
                                      onPress={()=>setCondition(false)}
                    >
                        <Text style={condition ? TextRegister() : TextSignIn()}>Register</Text>
                    </TouchableOpacity>

                </View>
                <View style={LoginRegister_Style.textInputContainer}>
                    <Text style={LoginRegister_Style.text}>E-mail</Text>
                    <TextInput placeholder="Type e-mail here..." style={LoginRegister_Style.textInput}
                               value = {mail}
                               onChangeText={text=>setMail(text)}/>
                </View>

                <View style={LoginRegister_Style.textInputContainer}>
                    <Text style={LoginRegister_Style.text}>Password</Text>
                    <TextInput placeholder="Type password here..." style={LoginRegister_Style.textInput}
                               value = {password}
                               onChangeText={text=>setPassword(text)}/>
                </View>

                    {condition ? <>
                            <TouchableOpacity style={LoginRegister_Style.saveButton} onPress={()=>handleLoginIn()}>
                             <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>Sign In</Text>
                            </TouchableOpacity>
                        </>:<>
                            <TouchableOpacity style={LoginRegister_Style.saveButton} onPress={()=>handleRegistration()}>
                            <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>Register</Text>
                            </TouchableOpacity>
                         </>
                    }
                <KSpacer height={20}/>
            </View>
        </View>

        // <View>
        //     <TouchableOpacity
        //         onPress={()=>setCondition(true)}
        //     >
        //         <Text>Signin</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //         onPress={()=>setCondition(false)}
        //     >
        //         <Text>Signup</Text>
        //     </TouchableOpacity>
        //     {
        //         condition ?
        //             <View>
        //                 <TextInput
        //                     placeholder={"Enter your email..."}
        //                     style={{}}
        //                     value={mail}
        //                     onChangeText={text => setMail(text)}
        //                 />
        //                 <TextInput
        //                     placeholder={"Enter your password..."}
        //                     style={{}}
        //                     value={password}
        //                     onChangeText={text=>setPassword(text)}
        //                 />
        //                 <TouchableOpacity
        //                     style={{}}
        //                     onPress={()=>handleLoginIn()}
        //                 >
        //                     <Text style={{}}>Login</Text>
        //                 </TouchableOpacity>
        //             </View>
        //             :
        //             <View>
        //                 <TextInput
        //                     placeholder={"Enter your mail..."}
        //                     value={mail}
        //                     style={{}}
        //                     onChangeText={text=>setMail(text)}
        //                 />
        //                 <TextInput
        //                     placeholder={"Enter your password..."}
        //                     value={password}
        //                     style={{}}
        //                     onChangeText={text=>setPassword(text)}/>
        //                 <TouchableOpacity
        //                     onPress={()=>handleRegistration()}
        //                     style={{}}
        //                 >
        //                     <Text>Register</Text>
        //                 </TouchableOpacity>
        //             </View>
        //     }
        // </View>
    )
}