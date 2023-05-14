import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import {auth, getDocuments, uploadDocumentPdf, uploadPdf} from "../../firebase";
import KSpacer from "../../components/KSpacer";
import { Platform } from 'react-native';
import {useEffect, useState} from "react";
import {Docs_Style} from "../../styles/Docs_Style";
import {useNavigation} from "@react-navigation/native";
import {BLUE} from "../../styles/ColorManager";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Home_Style} from "../../styles/Home_Style";
import KCheck from "../../components/KCheck";
import {getCurrent} from "./Home";



export default function Docs(){

    const navigator = useNavigation()

    const [pdfDoc, setPdfDoc ] = useState("")
    const [isUploaded,setIsUploaded] = useState(false)
    const [name, setName] = useState("")
    const [specialStyle,setSpecialStyle] = useState({backgroundColor: "#70c468"})
    const [documents,setDocuments] = useState([])

    useEffect( ()=>{
        const get = async () => await getDocuments().then(res=>{
            let aux = []
            res.map(e=>aux.push(e.data()))
            setDocuments(aux)
        })
        get()
    },[])

    return(
        <View style={Docs_Style.container}>
            <View style={{height: 50, width: "100%", backgroundColor: "white"}}>
            </View>

            <View style={Docs_Style.header}>
                <Text style={{fontSize: 24}}>Medical Records</Text>
            </View>

            <View style={Docs_Style.midContainer}>

                <FlatList style={Docs_Style.scrollContainer} data={documents} renderItem={({item}) => <>
                    <KCheck link={item.image_link} date={getCurrent(item.start_date)} check_type={item.check_type}/>
                </>
                }/>


            </View>

            <View style={Docs_Style.footer}>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity style={[Docs_Style.uploadButton, {backgroundColor: BLUE}]}
                                  onPress={() => navigator.navigate("New Medical Record")}
                >
                    <MaterialCommunityIcons  name="camera" size={15} color="white"/>
                    <Text style={{color: "white", fontWeight: "bold"}}> Camera</Text>
                </TouchableOpacity>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity style={Docs_Style.uploadButton}
                                      onPress={() => navigator.navigate("New Medical Record")}
                    >
                        <MaterialCommunityIcons  name="image" size={15} color={BLUE}/>
                        <Text style={{color: BLUE, fontWeight: "bold"}}> Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>







        // <View style={Docs_Style.container}>
        //     <KSpacer height={50}/>
        //     <View style={Docs_Style.uploadContainer}>
        //         <View style={Docs_Style.oneLiner}>
        //             <TextInput
        //                 style={Docs_Style.textInput}
        //                 placeholder={"Document name ..."}
        //                 onChangeText={text=>setName(text)}
        //                 value={name}
        //             />
        //             <TouchableOpacity
        //                 disabled={isUploaded}
        //                 style={[Docs_Style.uploadBtn,specialStyle]}
        //                 onPress={ ()=>{
        //                     const pdf = pickPdf().then(res=>{
        //                         return res;
        //                     }).then(res=>{
        //                         uploadPdf(res.uri,res.name).then(res=>{
        //                             setPdfDoc(res)
        //                             setIsUploaded(true)
        //                             setSpecialStyle({backgroundColor: "#c48868"})
        //
        //                         })
        //                     })
        //
        //                 }}
        //             >
        //                 {
        //                     isUploaded?
        //                         <Text>Uploaded</Text>
        //                         :
        //                         <Text>Upload</Text>
        //                 }
        //             </TouchableOpacity>
        //         </View>
        //
        //         <TouchableOpacity
        //             style={Docs_Style.addBtn}
        //             disabled={!isUploaded}
        //             onPress={()=>{
        //                 uploadDocumentPdf(name,auth.currentUser?.email,pdfDoc, String(new Date())).then(res=>{
        //                     setPdfDoc("")
        //                     setName("")
        //                     setIsUploaded(false)
        //                     setSpecialStyle({backgroundColor: "#70c468"})
        //                 });
        //             }}
        //         >
        //             <Text>Add</Text>
        //         </TouchableOpacity>
        //     </View>
        //     <FlatList data={documents} renderItem={({item}) =>
        //         <Text>{item.doc_name}</Text>
        //     }/>
        //     <TouchableOpacity
        //         onPress={()=>{
        //             navigator.navigate("Forum")
        //         }}
        //     >
        //         <Text>Upload</Text>
        //     </TouchableOpacity>
        // </View>
    )
}