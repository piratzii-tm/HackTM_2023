import {Text, TouchableOpacity, View, ScrollView} from "react-native";
import {auth, signOut} from "../../firebase";
import {setData} from "../../helpers/asyncStorageFunctions";
import {Settings_Style} from "../../styles/Settings_Style";
import KSpacer from "../../components/KSpacer";
import {AntDesign, FontAwesome5, Fontisto, Foundation, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {BLUE, GRAY} from "../../styles/ColorManager";

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
        <ScrollView style={Settings_Style.container}>
            <View style={{height: 30, width: "100%", backgroundColor: "white",}}>

            </View>
            <View style={Settings_Style.header}>
                <Text style={{fontSize: 24}}>Settings</Text>
            </View>

            {/*INCEPE PRIMA PARTE*/}

            <KSpacer height={15}/>

            <View style={Settings_Style.combinatie}>
                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <FontAwesome5 name="pen" size={15} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Edit Profile</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <MaterialCommunityIcons name="cellphone-cog" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Permissions</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <Ionicons name="notifications" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Notifications</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <AntDesign name="like1" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Send feedback</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>
                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <Fontisto name="persons" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Partner whit us</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>
            </View>


            {/*INCEPE PARTEA A DOUA*/}

            <KSpacer height={15}/>

            <View style={Settings_Style.combinatie}>
                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <Foundation name="info" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  About this service</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <Ionicons name="shield-checkmark" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Terms and Conditions</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <Ionicons name="eye-off" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Privacy Policy</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>

                <TouchableOpacity style={Settings_Style.minComponent}>
                    <View style={Settings_Style.minComponentLeft}>
                        <View style={Settings_Style.iconContainer}>
                            <AntDesign name="filetext1" size={20} color={"white"} />
                        </View>
                        <Text style={{fontSize: 16}}>  Software Licences</Text>
                    </View>

                    <AntDesign name="arrowright" size={20} color={GRAY}/>
                </TouchableOpacity>
            </View>

            <KSpacer height={15}/>

            <Text style={{fontSize: 14, alignSelf: "center",}}>App version: 1.0.0.1</Text>

            <KSpacer height={15}/>

            <TouchableOpacity style={Settings_Style.logOut} onPress={()=>handleSignOut()}>
                <Text style={{fontSize: 24, color: "red"}}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}