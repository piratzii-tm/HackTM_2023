import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppMainNavigation from "./AppMainNavigation";
import Notification from "./Notification";
import Forum from "./Forum";
const Stack = createNativeStackNavigator()
import Home from "./Home";
import Docs from "./Docs";
import Calendar from "./Calendar";
import Settings from "./Settings";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {BLUE} from "../../styles/ColorManager";
import {Dimensions, StatusBar} from "react-native";
import Results from "./Results";


export default function AppNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen  options={{headerShown:false}} name={"AppMainNavigation"} component={AppMainNavigation}/>
            <Stack.Screen  options={{headerTitleAlign: "center"}} name={"Notifications"} component={Notification}/>
            <Stack.Screen options={{headerShown:false}} name={"Results"} component={Results}/>
            <Stack.Screen options={{headerTitleAlign: "center"}} name={"New Medical Record"} component={Forum}/>
        </Stack.Navigator>
    )
}
