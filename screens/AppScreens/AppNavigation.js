import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppMainNavigation from "./AppMainNavigation";
import Notification from "./Notification";
import Forum from "./Forum";

const Stack = createNativeStackNavigator()

export default function AppNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"AppMainNavigation"} component={AppMainNavigation}/>
            <Stack.Screen name={"Notification"} component={Notification}/>
            <Stack.Screen name={"Forum"} component={Forum}/>
        </Stack.Navigator>
    )
}