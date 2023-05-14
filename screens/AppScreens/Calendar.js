import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {View} from "react-native";
import {Calendar_Style} from "../../styles/Calendar_Style";
import {Docs_Style} from "../../styles/Docs_Style";

const CalendarScreen = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={Calendar_Style.container}>

            <View style={{height: 50, width: "100%", backgroundColor: "white"}}>
            </View>

            <View style={Docs_Style.header}>
                <Text style={{fontSize: 24}}>Calendar</Text>
            </View>

            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                style={{
                    height: 350,
                    width:300
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
            />
        </View>
    );
};

export default CalendarScreen;