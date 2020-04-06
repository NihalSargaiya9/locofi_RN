import React, {Component} from 'react';
import {View, Platform,Text,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Button} from './Button';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class App extends Component{

  onButtonPressLocal()
  {
    this.setState({mode:"date"});
    this.setState({clicks:1});
//     let dateResp = new Promise((r,x)=>{
    this.setState({show:true})

//     })
//     let res = await dateResp;
// ??

      
   }
   componentDidMount()
   {
    console.log("I am from date ",this.props.datetime)

   // const setDate = this.props.datetime;
   // return setDate;
   }

  state = {
    show:false,
    mode:"date",
    date:new Date(),
    clicks:0
  }
  
  onChange=(event,selectedDate)=>
  {

    // date = Moment(selectedDate).utcOffset(330);
    if(event.type=="set")
    {
      this.setState({date:selectedDate,mode:"time"})
      this.props.dateTimeChanged(this.state.date)
    }
    this.setState({mode:"time"})

    this.setState({clicks:(this.state.clicks-1)})
    // if(this.state.clicks==1)
    // {
    //   this.setState({mode:"time"})
    // }

    if(this.state.clicks==0)
    {
      this.setState({show:false})
    console.log(this.state,event)
      
    }
    console.log(this.state,event)
  }
render(){
  return (
    <View style={[{flexDirection:"row",flex:2}]}>
      {this.state.show &&
        <DateTimePicker
          value={this.state.date}
          mode={this.state.mode}
          is24Hour={false}
          display="default"

          onChange={this.onChange}
        />
      }
      <Button onPress={this.onButtonPressLocal.bind(this)} buttonStyle={{flex:1,backgroundColor:'#C5CAE9',borderColor:'#283593'}} textStyle={{fontSize:16,color:'#283593'}}> {Moment(this.state.date).format('DD/MM  h:m A')} </Button>
    <View>
    </View>
    </View>
  );
}
}
const mapStateToProps = state => {
    const { datetime } = state.note;
    return { datetime };
};
 
export default connect(mapStateToProps,actions)(App);