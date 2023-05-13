import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Docs from "./Docs";
import Calendar from "./Calendar";
import Settings from "./Settings";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {BLUE} from "../../styles/ColorManager";
import {Dimensions, StatusBar} from "react-native";

const Tab = createBottomTabNavigator()

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 100;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function AppNavigation(){
    return(
        <Tab.Navigator tabBarOptions={{activeTintColor: BLUE, inactiveTintColor: 'white'}}>
            <Tab.Screen  options={{headerShown:false, tabBarIcon: ({ focused }) => (
                <FontAwesome name="home" size={30} color={focused? "#123dff": "black"} /> ),
            }}
                        name={"Home"} component={Home}
            />
            <Tab.Screen options={{headerShown:false, tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="description" size={30} color={focused? BLUE: "black"} /> )}}
                        name={"Docs"} component={Docs}/>
            <Tab.Screen options={{headerShown:false, tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="event" size={30} color={focused? BLUE: "black"} /> )}}
                        name={"Calendar"} component={Calendar}/>
            <Tab.Screen options={{headerShown:false, tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="settings" size={30} color={focused? BLUE: "black"} /> )}}
                        name={"Settings"} component={Settings} />
        </Tab.Navigator>
    )
}

