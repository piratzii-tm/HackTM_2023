import {Text,View,Image,TouchableOpacity} from "react-native";
import {KCheck_Style} from "../styles/KCheck_Style";
import {useState} from "react";

export default function KCheck({link, check_type, date}){

    const [source, setSource] = useState({uri:link})

    return(
        <TouchableOpacity>
            <Image style={{width:30,height:30}}source={source}/>
            <View>
                <Text>{check_type}</Text>
                <Text>{date} months</Text>
            </View>
        </TouchableOpacity>
    )
}