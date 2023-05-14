import {FlatList, Text, TouchableOpacity, View, ScrollView, Image, TextComponent, Platform} from "react-native";
import {useContext, useEffect, useRef, useState} from 'react'
import {
    signOut,
    auth, getDocuments, addNotification
} from "../../firebase";
import {getData, setData} from "../../helpers/asyncStorageFunctions";
import KCheck from "../../components/KCheck"
import KSpacer from "../../components/KSpacer";
import {Home_Style} from "../../styles/Home_Style";
import {AntDesign, Entypo, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import {PostRegisterContext} from "../../helpers/context/PostRegisterContext";
import {BLUE, GRAY} from "../../styles/ColorManager";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});
async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Stay healthy!",
            body: 'Go and check the life of yours!',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}

export function getCurrent(startDate){
    let start = new Date(startDate)
    let current = new Date();
    return current.getMonth() - start.getMonth() +
        (12 * (current.getFullYear() - start.getFullYear()))
}

export default function Home(){

    const {notification ,setNotification,todayDate,setTodayDate} = useContext(PostRegisterContext)

    const navigator = useNavigation()
    const [documents,setDocuments] = useState([])

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notificatioN, setNotificatioN] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect( ()=>{
        const get = async () => await getDocuments().then(res=>{
            let aux = []
            res.map(e=> {
                aux.push(e.data())
            })
            setDocuments(aux)

            //pt testul notificatiilor
            let date = new Date();
            date.setDate(date.getDate()-2);

            if(todayDate !== new Date().getDate()){
                setData("notification","false")
                setNotification(false)
            }
            if(!notification){
                aux.map(d=>{
                    let final = new Date(d.final_date)
                    let today = new Date()
                    console.log(final.getFullYear(),final.getMonth(),final.getDate())
                    if(final.getFullYear() < today.getFullYear()){
                        schedulePushNotification()
                        addNotification(String(today),d.check_type,d.image_link,auth.currentUser?.email)
                        setData("notification","true")
                        setData("today",String(today.getDate()))
                        setNotification(true)
                        setTodayDate(today.getDate())
                    }else if(final.getFullYear() == today.getFullYear() && final.getMonth() < today.getMonth()){
                        schedulePushNotification()
                        addNotification(String(today),d.check_type,d.image_link,auth.currentUser?.email)
                        setData("notification","true")
                        setData("today",String(today.getDate()))
                        setNotification(true)
                        setTodayDate(today.getDate())
                    }else if(final.getFullYear() == today.getFullYear() && final.getMonth() == today.getMonth() && final.getDate() <= today.getDate()){
                        schedulePushNotification()
                        addNotification(String(today),d.check_type,d.image_link,auth.currentUser?.email)
                        setData("notification","true")
                        setData("today",String(today.getDate()))
                        setNotification(true)
                        setTodayDate(today.getDate())
                    }
                })
            }

        },[])
        get()



        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotificatioN(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    },[])

    return (
        <View style={Home_Style.container}>
            <View style={{height: 30, width: "100%",backgroundColor: "white"}}>
                <Text></Text>
            </View>
            <View style={Home_Style.upContainer}>
                <View style={Home_Style.avatar}>
                    <Image style={Home_Style.avatarImage}
                        source={require("../../media/user-photo.jpg")}
                    />
                </View>

                <View style={Home_Style.upMidContainer}>
                    <Text style={{fontSize: 14}}>Hello,</Text>
                    <Text style={{color:BLUE, fontSize: 20, fontWeight: "bold"}}>Iulian Pop</Text>
                </View>

                <View style={Home_Style.upRightContainer}>
                    <MaterialIcons name="notifications" size={30} color={BLUE}
                        onPress={() => navigator.navigate("Notification")}
                    />
                </View>
            </View>
            <View style={Home_Style.downContainer}>

            <Text style={Home_Style.subTitleText}>Explore Checkups</Text>

            <FlatList style={Home_Style.scrollContainer} data={documents} renderItem={({item}) => <>
                <KCheck link={item.image_link} date={getCurrent(item.start_date)} check_type={item.check_type}/>
            </>
            }/>
            </View>
            <View style={Home_Style.dorcorsContainer}>

                <Text style={{fontSize: 16 ,alignSelf: "center"}}>Explore Doctors</Text>
                <KSpacer height={10}/>
            <ScrollView pagingEnabled={true} horizontal={true} howsHorizontalScrollIndicator={false}>

                <KSpacer height={10}/>
                <View style={Home_Style.doctorComponent}>
                    <View style={Home_Style.doctorLeft}>
                        <Image style={{height: 70, width: 70, borderRadius: 10}} source={require("../../media/doctor2.jpg")}/>
                    </View>

                    <View style={Home_Style.doctorRight}>
                        <Text style={{fontSize: 12, color: GRAY}}>Ophthalmology</Text>
                        <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>Dr. Stella Amanda</Text>
                        <View style={{flexDirection: "row"}}>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star-outlined" size={20} color="#FFD700"/>
                        </View>
                    </View>
                </View>

                <KSpacer height={10}/>

                <View style={Home_Style.doctorComponent}>
                    <View style={Home_Style.doctorLeft}>
                        <Image style={{height: 70, width: 70, borderRadius: 10}} source={require("../../media/doctor1.jpg")}/>
                    </View>

                    <View style={Home_Style.doctorRight}>
                        <Text style={{fontSize: 12, color: GRAY}}>Neurology</Text>
                        <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>Dr. Marian Andrei</Text>
                        <View style={{flexDirection: "row"}}>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                        </View>
                    </View>
                </View>

                <KSpacer height={10}/>

                <View style={Home_Style.doctorComponent}>
                    <View style={Home_Style.doctorLeft}>
                        <Image style={{height: 70, width: 70, borderRadius: 10}} source={require("../../media/doctor3.jpg")}/>
                    </View>

                    <View style={Home_Style.doctorRight}>
                        <Text style={{fontSize: 12, color: GRAY}}>Neurology</Text>
                        <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>Dr. Oana Anamaria</Text>
                        <View style={{flexDirection: "row"}}>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star" size={20} color="#FFD700"/>
                            <Entypo name="star-outlined" size={20} color="#FFD700"/>
                            <Entypo name="star-outlined" size={20} color="#FFD700"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </View>
        </View>
    )
}
