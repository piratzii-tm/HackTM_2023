import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppMainNavigation from "./AppMainNavigation";
import Notification from "./Notification";


const Stack = createNativeStackNavigator()

import Home from "./Home";
import Docs from "./Docs";
import Calendar from "./Calendar";
import Settings from "./Settings";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {BLUE} from "../../styles/ColorManager";
import {Dimensions, StatusBar} from "react-native";

export default function AppNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"AppMainNavigation"} component={AppMainNavigation}/>
            <Stack.Screen name={"Notification"} component={Notification}/>
        </Stack.Navigator>
    )
}
