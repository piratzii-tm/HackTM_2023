import {Text,View,Image,TouchableOpacity} from "react-native";
import {KCheck_Style} from "../styles/KCheck_Style";
import {useState} from "react";

export default function KCheck({link, check_type, date}){

    const [source, setSource] = useState({uri:link})

    return(
        <TouchableOpacity style={KCheck_Style.container}>
            <View style={KCheck_Style.imageContainer}>
                <Image style={KCheck_Style.image} source={source}/>
            </View>

            <View style={KCheck_Style.rightContainer}>
                <Text style={{fontSize: 16 ,fontWeight: "bold"}}>{check_type}</Text>
                <Text style={{fontSize: 14 ,color: "#C0C0C0"}}>Last check: {date}</Text>
            </View>
        </TouchableOpacity>
    )
}