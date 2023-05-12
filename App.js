import {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  auth,
  onAuthStateChanged
} from "./firebase";

import Home from "./screens/AppScreens/Home";
import PostRegister from "./screens/AppScreens/PostRegister";
import Login from "./screens/AuthScreens/Login";
import Register from "./screens/AuthScreens/Register";
import {PostRegisterContext} from "./helpers/context/PostRegisterContext";
import {
    getData,
    setData
} from "./helpers/asyncStorageFunctions";

const Stack = createNativeStackNavigator()

const AppStack = (userInfo,setUserInfo)=>{

  return(
      <PostRegisterContext.Provider value={{userInfo,setUserInfo}}>
          <Stack.Navigator>
              {
                  userInfo?
                      <Stack.Screen name={"Home"} component={Home}/>
                      :
                      <Stack.Screen name={"PostRegister"} component={PostRegister} options={{headerShown: false}}/>
              }
          </Stack.Navigator>
      </PostRegisterContext.Provider>
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
    const [userInfo, setUserInfo] = useState(false);

    const get = async () => {
        await getData("userInfo").then(res => {
            setUserInfo(res === true);
        })
    }


  useEffect(()=>{
        onAuthStateChanged(auth, user=>{
          if(user){
            setIsLogged(true)
          }else{
            setIsLogged(false)
          }
        })
        get()
  })

  return (
      <NavigationContainer>
        {
          isLogged?AppStack(userInfo,setUserInfo):AuthStack()
        }
      </NavigationContainer>
  );
}


