import {Text, TouchableOpacity, View} from "react-native";
import {auth, signOut} from "../../firebase";
import {setData} from "../../helpers/asyncStorageFunctions";
import {Settings_Style} from "../../styles/Settings_Style";

export default function Settings(){

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("** Logged of" )
            })
            .catch(err => alert(err))
        setData("userInfo","false")
    }

    return(
        <View style={Settings_Style.container}>
            <TouchableOpacity onPress={()=>handleSignOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}