import {View, Text, Image} from "react-native";
import {Results_Style} from "../../styles/Resuts_Style";
import {BLUE, GRAY} from "../../styles/ColorManager";
import {AntDesign, Feather, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {KCheck_Style} from "../../styles/KCheck_Style";
import KSpacer from "../../components/KSpacer";


export default function Results() {
    const navigation = useNavigation();
    return (
        <View style={Results_Style.container}>
            <View style={{height: 25, backgroundColor: "white"}}></View>
            <View style={Results_Style.header}>
                <View style={Results_Style.headerLeft}>
                    <AntDesign name="arrowleft" color={BLUE} size={25}
                        onPress={() => {navigation.goBack()}}
                    />
                </View>

                <View style={Results_Style.headerMid}>
                    <Text style={{fontSize: 24}}>Results</Text>
                    <Text style={{color: GRAY}}>Last check: 6 months</Text>
                </View>

                {/*NU SCOATE ASTA*/}
                <View style={{flex: 1}}>

                </View>
            </View>

            <View style={Results_Style.bodyContainer}>
                <Text style={{fontSize: 16}}>Results</Text>

                <KSpacer height={10}/>

                <View style={Results_Style.componenta}>
                    <View style={Results_Style.imageContainer}>
                        <Image style={Results_Style.image} source={require("../../media/blood-test.png")}/>
                    </View>

                    <View style={Results_Style.midContainer}>
                        <Text style={{fontSize: 16 ,fontWeight: "bold"}}>Blood Count</Text>
                        <Text style={{fontSize: 14 ,color: "green"}}>Very good</Text>
                    </View>
                    <View style={Results_Style.rightContainer}>
                        <Octicons name="download" size={30} color = {BLUE}/>
                    </View>
                </View>

                <KSpacer height={10}/>

                <View style={Results_Style.componenta}>
                    <View style={Results_Style.imageContainer}>
                        <Image style={Results_Style.image} source={require("../../media/blood-test.png")}/>
                    </View>

                    <View style={Results_Style.midContainer}>
                        <Text style={{fontSize: 16 ,fontWeight: "bold"}}>Enzyme Test</Text>
                        <Text style={{fontSize: 14 ,color: "orange"}}>Medium</Text>
                    </View>
                    <View style={Results_Style.rightContainer}>
                        <Octicons name="download" size={30} color = {BLUE}/>
                    </View>
                </View>

                <KSpacer height={10}/>

                <View style={Results_Style.componenta}>
                    <View style={Results_Style.imageContainer}>
                        <Image style={Results_Style.image} source={require("../../media/blood-test.png")}/>
                    </View>

                    <View style={Results_Style.midContainer}>
                        <Text style={{fontSize: 16 ,fontWeight: "bold"}}>Cholesterol test</Text>
                        <Text style={{fontSize: 14 ,color: "black"}}>Normal</Text>
                    </View>
                    <View style={Results_Style.rightContainer}>
                        <Octicons name="download" size={30} color = {BLUE}/>
                    </View>
                </View>

                <KSpacer height={10}/>

                <Text style={{fontSize: 16}}>Recommendations</Text>

                <KSpacer height={15}/>

                <View style={Results_Style.infoContainer}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Feather name="info" size={30} color = "black"/>
                        <Text style={{fontWeight: "bold"}}>  Enzyme Test</Text>
                    </View>
                    <Text style={{fontSize: 12}}>Based on lastest results, iCheck recommends to
                        eat more fruits, exercise daily and drink water.
                    </Text>
                </View>
            </View>
        </View>
    )
}