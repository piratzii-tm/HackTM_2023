import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Docs from "./Docs";
import Calendar from "./Calendar";
import Settings from "./Settings";

const Tab = createBottomTabNavigator()

export default function AppNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false}} name={"Home"} component={Home}/>
            <Tab.Screen options={{headerShown:false}} name={"Docs"} component={Docs}/>
            <Tab.Screen options={{headerShown:false}} name={"Calendar"} component={Calendar}/>
            <Tab.Screen options={{headerShown:false}} name={"Settings"} component={Settings}/>
        </Tab.Navigator>
    )
}