import {FlatList, Text, TouchableOpacity, View, ScrollView, Image, TextComponent} from "react-native";
import {useEffect, useState} from 'react'
import {
    signOut,
    auth, getDocuments
} from "../../firebase";
import {setData} from "../../helpers/asyncStorageFunctions";
import KCheck from "../../components/KCheck"
import KSpacer from "../../components/KSpacer";
import {Home_Style} from "../../styles/Home_Style";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {BLUE} from "../../styles/ColorManager";


export function getCurrent(startDate){
    let start = new Date(startDate)
    let current = new Date();
    return current.getMonth() - start.getMonth() +
        (12 * (current.getFullYear() - start.getFullYear()))
}

export default function Home(){
    const navigator = useNavigation()
    const [documents,setDocuments] = useState([])
    const navigator = useNavigation()


    useEffect( ()=>{
        const get = async () => await getDocuments().then(res=>{
            let aux = []
            res.map(e=>aux.push(e.data()))
            setDocuments(aux)
        })
        get()
    },)

    return (
        <View style={Home_Style.container}>
            <View style={{height: 30, width: "100%",backgroundColor: "white"}}>
                <Text></Text>
            </View>
            <View style={Home_Style.upContainer}>
                <View style={Home_Style.avatar}>
                    <Image style={Home_Style.avatarImage}
                        source={require("../../media/user-photo.jpg")}
                    />
                </View>

                <View style={Home_Style.upMidContainer}>
                    <Text style={{fontSize: 14}}>Hello,</Text>
                    <Text style={{color:BLUE, fontSize: 20, fontWeight: "bold"}}>Julia Anamaria</Text>
                </View>

                <View style={Home_Style.upRightContainer}>
                    <MaterialIcons name="notifications" size={30} color={BLUE}
                        onPress={() => navigator.navigate("Notification")}
                    />
                </View>
            </View>
            <View style={Home_Style.downContainer}>

            <Text style={Home_Style.subTitleText}>Explore Checkups</Text>

            <FlatList style={Home_Style.scrollContainer} data={documents} renderItem={({item}) => <>
                <KCheck link={item.image_link} date={getCurrent(item.start_date)} check_type={item.check_type}/>
            </>
            }/>
            </View>
        </View>
    )
}
