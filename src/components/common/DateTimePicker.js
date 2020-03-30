import React, {useState} from 'react';
import {View, Platform,Text,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 import Moment from 'moment';
 import {Button} from './Button';

const App = ({style}) => {
  const [date, setDate] = useState(new Date());
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
  Moment.locale('en');
 
  return (
    <View style={[{flexDirection:"row"},style]}>
      
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
      <Button buttonStyle={{flex:1}} textStyle={{fontSize:16}}> {Moment(date).format('DD/MM  h:m A')} </Button>
    <View>
    </View>
    </View>
  );
};
 
export default App;