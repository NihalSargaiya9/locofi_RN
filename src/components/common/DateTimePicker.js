import React, {useState} from 'react';
import {View, Button, Platform,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };
 
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
 
  const showDatepicker = () => {
    showMode('date');
  };
 
  const showTimepicker = () => {
    showMode('time');
  };
 
  return (
    <View style={{flexDirection:"row",flex:1}}>
      <View style={{flex:2}}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View style={{flex:2}}>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
 
export default App;