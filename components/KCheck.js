import {Text,View,Image,TouchableOpacity} from "react-native";
import {KCheck_Style} from "../styles/KCheck_Style";
import {useState} from "react";
import KSpacer from "./KSpacer";
import {AntDesign} from "@expo/vector-icons";

export default function KCheck({link, check_type, date}){

    const [source, setSource] = useState({uri:link})

    console.log(link)
    return(
        <View>
            <KSpacer height={10}/>

        <TouchableOpacity style={KCheck_Style.container} onPress={() => navigator.navigate("Results")}>
            <View style={KCheck_Style.imageContainer}>
                <Image style={KCheck_Style.image} source={source}/>
            </View>

            <View style={KCheck_Style.midContainer}>
                <Text style={{fontSize: 16 ,fontWeight: "bold"}}>{check_type}</Text>
                <Text style={{fontSize: 14 ,color: "#C0C0C0"}}>Last check: {date} month(s)</Text>
            </View>
            <View style={KCheck_Style.rightContainer}>
                <AntDesign name="arrowright" size={25} color = "#E8E8E8"/>
            </View>
        </TouchableOpacity>
        </View>
    )
}