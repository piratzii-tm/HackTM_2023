import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {View} from "react-native";
import {Calendar_Style} from "../../styles/Calendar_Style";

const CalendarScreen = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={Calendar_Style.container}>
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