import React, {Component} from 'react';
import {View, Platform,Text,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Button} from './Button';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class App extends Component{

  async onButtonPressLocal()
  {
    this.setState({mode:"date"});
    let dateResp = new Promise((r,x)=>{
      this.setState({show:true})

    })
    let res = await dateResp;

      this.setState({mode:"time"})
   }
  state = {
    show:false,
    mode:"date",
    date:new Date()
  }
  onChange=(event,selectedDate)=>
  {
    // date = Moment(selectedDate).utcOffset(330);
    this.setState({date:selectedDate,mode:"time"})
    this.props.dateTimeChanged(this.state.date)
  }
render(){
  
  return (
    <View style={[{flexDirection:"row",flex:2}]}>
      {this.state.show &&
        <DateTimePicker
          value={this.state.date}
          mode={this.state.mode}
          is24Hour={false}
          timeZoneOffsetInMinutes={0}
          display="default"
          onChange={this.onChange}
        />
      }
      <Button onPress={this.onButtonPressLocal.bind(this)} buttonStyle={{flex:1}} textStyle={{fontSize:16}}> {Moment(this.state.date).format('DD/MM  h:m A')} </Button>
    <View>
    </View>
    </View>
  );
}
}
const mapStateToProps = state => {
    const { location } = state.note;
    return { location };
};
 
export default connect(mapStateToProps,actions)(App);