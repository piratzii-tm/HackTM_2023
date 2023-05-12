import {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  auth,
  onAuthStateChanged
} from "./firebase";

import Home from "./screens/AppScreens/Home";
import Login from "./screens/AuthScreens/Login";
import Register from "./screens/AuthScreens/Register";

const Stack = createNativeStackNavigator()

const AppStack = ()=>{
  return(
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home}/>
      </Stack.Navigator>
  )
}

const AuthStack =()=>{
  return(
      <Stack.Navigator>
        <Stack.Screen name={"Login"} component={Login}/>
        <Stack.Screen name={"Register"} component={Register}/>
      </Stack.Navigator>
  )
}
export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      if(user){
        setIsLogged(true)
      }else{
        setIsLogged(false)
      }
    })
  })

  return (
      <NavigationContainer>
        {
          isLogged?AppStack():AuthStack()
        }
      </NavigationContainer>
  );
}


