import {Text,View} from "react-native";
import {Calendar_Style} from "../../styles/Calendar_Style";
import {Docs_Style} from "../../styles/Docs_Style";

export default function Calendar(){
    return(
        <View style={Calendar_Style.container}>
            <View style={{height: 50, width: "100%", backgroundColor: "white"}}>
            </View>

            <View style={Docs_Style.header}>
                <Text style={{fontSize: 24}}>Calendar</Text>
            </View>
            <Text>Calendar</Text>
        </View>
    )
}