import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import {auth, getDocuments, uploadDocumentPdf, uploadPdf} from "../../firebase";
import KSpacer from "../../components/KSpacer";
import { Platform } from 'react-native';
import {useEffect, useState} from "react";
import {Docs_Style} from "../../styles/Docs_Style";
import {useNavigation} from "@react-navigation/native";

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
    cropping: true,
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WITH,
};

const pickPdf = async () => {
    try {
        const pickDoc = await DocumentPicker.getDocumentAsync()
        return {uri: pickDoc.uri, name: pickDoc.name}
    } catch (err) {
        console.log(err);
    }
};

export default function Docs(){

    const navigator = useNavigation()

    const [pdfDoc, setPdfDoc ] = useState("")
    const [isUploaded,setIsUploaded] = useState(false)
    const [name, setName] = useState("")
    const [specialStyle,setSpecialStyle] = useState({backgroundColor: "#70c468"})
    const [documents,setDocuments] = useState([])
    const [acces, setAcces ] = useState(true)


    useEffect( ()=>{
        const get = async () => await getDocuments(auth.currentUser?.email).then(res=>{
            let aux = []
            res.map(e=>aux.push(e.data()))
            setDocuments(aux)
        })
        get()
    },)

    return(
        <View style={Docs_Style.container}>
            <KSpacer height={50}/>
            <View style={Docs_Style.uploadContainer}>
                <View style={Docs_Style.oneLiner}>
                    <TextInput
                        style={Docs_Style.textInput}
                        placeholder={"Document name ..."}
                        onChangeText={text=>setName(text)}
                        value={name}
                    />
                    <TouchableOpacity
                        disabled={isUploaded}
                        style={[Docs_Style.uploadBtn,specialStyle]}
                        onPress={ ()=>{
                            const pdf = pickPdf().then(res=>{
                                return res;
                            }).then(res=>{
                                uploadPdf(res.uri,res.name).then(res=>{
                                    setPdfDoc(res)
                                    setIsUploaded(true)
                                    setSpecialStyle({backgroundColor: "#c48868"})

                                })
                            })

                        }}
                    >
                        {
                            isUploaded?
                                <Text>Uploaded</Text>
                                :
                                <Text>Upload</Text>
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={Docs_Style.addBtn}
                    disabled={!isUploaded}
                    onPress={()=>{
                        uploadDocumentPdf(name,auth.currentUser?.email,pdfDoc).then(res=>{
                            setPdfDoc("")
                            setName("")
                            setIsUploaded(false)
                            setSpecialStyle({backgroundColor: "#70c468"})
                        });
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={documents} renderItem={({item}) =>
                <Text>{item.doc_name}</Text>
            }/>
        </View>
    )
}