import {View, Text, Image, TouchableOpacity} from 'react-native'
import KSpacer from "./KSpacer";
import {KNotif_Style} from "../styles/KNotif_Style";
import {AntDesign} from "@expo/vector-icons";
import {useState} from "react";
import {GRAY} from "../styles/ColorManager";

export default function KNotif({link,check,date}){
    const [source, setSource] = useState({uri:link})
    const [d,setD] = useState(new Date(date))
    const [months, setMonths] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    return(
        <View style={KNotif_Style.container}>

                <View style={KNotif_Style.imageContainer}>
                    <Image style={KNotif_Style.image} source={source}/>
                </View>

                <View style={KNotif_Style.desc}>
                    <Text style={{fontSize: 16 ,fontWeight: "bold"}}>{check}</Text>
                    <Text>Please check your health!</Text>
                    <Text style={{fontSize: 14 ,color: GRAY}}>{d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</Text>
                </View>
        </View>
    )
}