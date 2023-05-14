import {FlatList, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {auth, getNotifications} from "../../firebase";
import KNotif from "../../components/KNotif";
import KSpacer from "../../components/KSpacer";

export default function Notification() {

    const [notifications, setNotifications] =useState([])

    useEffect(()=>{
        const get = async () => await getNotifications(auth.currentUser?.email).then(res=>{
            let aux = []
            res.map(e=> {
                aux.push(e.data())
            })
            setNotifications(aux)
        })

        get()
    })


    return (
       <View style={{width:"100%",alignItems:"center"}}>
           <FlatList style={{width:"100%"}} data={notifications} renderItem={({item})=>
              <View style={{width: "100%",alignItems:"center"}}>
                  <KSpacer height={10}/>
                  <KNotif link={item.image_link} check={item.check_type} date={item.date}/>
                  <KSpacer height={10}/>
              </View>
           }/>
       </View>
    );
}


