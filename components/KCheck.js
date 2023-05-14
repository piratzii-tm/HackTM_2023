import {Text,View,Image,TouchableOpacity} from "react-native";
import {KCheck_Style} from "../styles/KCheck_Style";
import {useState} from "react";
import KSpacer from "./KSpacer";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {GRAY} from "../styles/ColorManager";

export default function KCheck({link, check_type, date}){

    const [source, setSource] = useState({uri:link})
    const navigator = useNavigation()
    return(
        <View>
            <KSpacer height={10}/>

        <TouchableOpacity style={KCheck_Style.container} onPress={() => navigator.navigate("Results", {title: check_type, date: date})}>
            <View style={KCheck_Style.imageContainer}>
                <Image style={KCheck_Style.image} source={source}/>
            </View>


            <View style={KCheck_Style.midContainer}>

                <Text style={{fontSize: 16 ,fontWeight: "bold"}}>{check_type}</Text>
                <KSpacer height={10}/>
                <Text style={{fontSize: 14 ,color: GRAY}}>Last check: {date} month(s)</Text>
            </View>
            <View style={KCheck_Style.rightContainer}>
                <AntDesign name="arrowright" size={25} color = {GRAY}/>
            </View>
        </TouchableOpacity>
        </View>
    )
}