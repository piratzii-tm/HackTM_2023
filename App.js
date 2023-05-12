import {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  auth,
  onAuthStateChanged
} from "./firebase";

import AppNavigation from "./screens/AppScreens/AppNavigation";
import PostRegister from "./screens/AppScreens/PostRegister";
import {PostRegisterContext} from "./helpers/context/PostRegisterContext";
import {
    getData,
    setData
} from "./helpers/asyncStorageFunctions";
import LoginRegister from "./screens/AuthScreens/LoginRegister";

const Stack = createNativeStackNavigator()

const AppStack = (userInfo,setUserInfo)=>{

  return(
      <PostRegisterContext.Provider value={{userInfo,setUserInfo}}>
          <Stack.Navigator>
              {
                  userInfo?
                      <Stack.Screen options={{headerShown:false}} name={"Home"} component={AppNavigation}/>
                      :
                      <Stack.Screen options={{headerShown:false}} name={"PostRegister"} component={PostRegister}/>
              }
          </Stack.Navigator>
      </PostRegisterContext.Provider>
  )
}

const AuthStack =()=>{
  return(
      <Stack.Navigator>
          <Stack.Screen name={"Auth"} component={LoginRegister}/>
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


