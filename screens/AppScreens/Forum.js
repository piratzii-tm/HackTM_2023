import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import {Forum_Style} from "../../styles/Forum_Style";
import KSpacer from "../../components/KSpacer";
import * as DocumentPicker from 'expo-document-picker';
import {auth, getDocuments, uploadDocumentPdf, uploadPdf} from "../../firebase";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

const pickPdf = async () => {
    try {
        const pickDoc = await DocumentPicker.getDocumentAsync()
        return {uri: pickDoc.uri, name: pickDoc.name}
    } catch (err) {
        console.log(err);
    }
};

export default function Forum(){
    const [pdfDoc, setPdfDoc ] = useState("")
    const [pdfChecked, setPdfChecked] = useState(false)
    const [btnName,setBtnName] = useState("Upload file")
    const [specialStyle,setSpecialStyle] = useState({backgroundColor: "white"})
    const [checkType, setCheckType] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [documents,setDocuments] = useState([])

    const navigator = useNavigation()

    useEffect( ()=>{
        const get = async () => await getDocuments().then(res=>{
            let aux = []
            res.map(e=>aux.push(e.data()))
            setDocuments(aux)
        })
        get()
    },[])
    return(
        <ScrollView contentContainerStyle={Forum_Style.scrollView} style={Forum_Style.container}>
            <KSpacer height={5}/>
            <View style={Forum_Style.miniContainer}>
                <Text>1. Select file</Text>

                <KSpacer height={5}/>

            <TouchableOpacity style={Forum_Style.uploadBtn}
                onPress={()=>{
                    const pdf = pickPdf().then(res=>{
                        return res;
                    }).then(res=>{
                        setBtnName(res.name)
                        uploadPdf(res.uri,res.name).then(res=>{
                            setPdfDoc(res)
                            setPdfChecked(true)
                        })
                    })
                }}
            >
                <Text style={Forum_Style.uploadTxt}>{btnName}</Text>
            </TouchableOpacity>
            </View>
            <View style={Forum_Style.miniContainer}>
                <Text>2. Select category</Text>

                <KSpacer height={5}/>

            <View style={Forum_Style.grid}>
                <View style={Forum_Style.row}>
                    <TouchableOpacity style={[Forum_Style.gridElement,  checkType === "Blood Analysis" ? specialStyle:{backgroundColor: "white"}]}
                        onPress={()=>{
                            setSpecialStyle({backgroundColor: "gray"})
                            setCheckType("Blood Analysis")
                        }
                        }
                    >
                        <Image source={require("../../media/blood-test.png")} style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Blood</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[Forum_Style.gridElement,  checkType === "Lungs Check" ? specialStyle:{backgroundColor: "white"}]}
                        onPress={()=>{
                            setSpecialStyle({backgroundColor: "gray"})
                            setCheckType("Lungs Check")
                        }
                        }
                    >
                        <Image source={require("../../media/lungs.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Lungs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[Forum_Style.gridElement,  checkType === "Eyes Check" ? specialStyle:{backgroundColor: "white"}]}
                                       onPress={()=>{
                                           setSpecialStyle({backgroundColor: "gray"})
                                           setCheckType("Eyes Check")
                                       }
                                       }
                    >
                        <Image source={require("../../media/eye.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Eyes</Text>
                    </TouchableOpacity>
                </View>
                <View style={Forum_Style.row}>
                    <TouchableOpacity  style={[Forum_Style.gridElement,  checkType === "Dental Check" ? specialStyle:{backgroundColor: "white"}]}
                                       onPress={()=>{
                                           setSpecialStyle({backgroundColor: "gray"})
                                           setCheckType("Dental Check")
                                       }
                                       }
                    >
                        <Image source={require("../../media/dental-checkup.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Dental</Text>
                    </TouchableOpacity>
                    {/*de aici nu mai sunt functionale*/}
                    <TouchableOpacity  style={Forum_Style.gridElement}>
                        <Image source={require("../../media/heart.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Heart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={Forum_Style.gridElement}>
                        <Image source={require("../../media/ct-scan.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>CT Scan</Text>
                    </TouchableOpacity>
                </View>
                <View style={Forum_Style.row}>
                    <TouchableOpacity  style={Forum_Style.gridElement}>
                        <Image source={require("../../media/shoulder.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Inflammatory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={Forum_Style.gridElement}>
                        <Image source={require("../../media/vascular.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Arterial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={Forum_Style.gridElement}>
                        <Image source={require("../../media/bladder.png")}  style={Forum_Style.gridImage}/>
                        <KSpacer height={5}/>
                        <Text>Urine</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <KSpacer height={10}/>
            <View style={Forum_Style.miniContainer}>
                <Text>3. Date</Text>

                <KSpacer height={5}/>

            <TextInput
                style={Forum_Style.input}
                placeholder={"DD MMM YYYY"}

            />

            </View>
            <View style={Forum_Style.miniContainer}>
                <Text>4. Doctor Name</Text>

                <KSpacer height={5}/>

            <TextInput
                style={Forum_Style.input}
                placeholder={"Doctor Name"}

                value={doctorName}
                onChangeText={(text)=>setDoctorName(text)}
            />
            </View>
            <TouchableOpacity style={Forum_Style.saveBtn}
                              disabled={!pdfChecked}
                onPress={()=> {
                    uploadDocumentPdf(
                        auth.currentUser?.email,
                        pdfDoc,
                        new Date(),
                        doctorName,
                        checkType
                    )
                    navigator.goBack();
                    alert("File uploaded with success!")
                }}

            >
                <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>Save</Text>
            </TouchableOpacity>
            <KSpacer height={50}/>
        </ScrollView>
    )
}