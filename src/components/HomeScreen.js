import React,{Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {listApointments} from '../actions';
import _ from 'lodash';

import BackgroundTask from 'react-native-background-task'

import { LocalNotification } from '../services/LocalPushController'

import {Button} from './common/'

  BackgroundTask.define(async() => {
        console.log('Hello from a background task slos')
    this._interval = setInterval(()=>{
        console.log('Hello from a background task')
        BackgroundTask.finish()
      },2000)
  })


import Tile from './Tile';

class HomeScreen extends Component {

    constructor(props){
        super(props);
           this.state={
   
            };
         }
     // componentDidRecieveProps(nextProps,nextState){
     //   this.setState({
     //    NavTitle:nextProps["title"],
     //     NavColor:nextProps["tintColor"]
     //    });
   
     //   }

    componentDidMount()
    {
        this.props.listApointments();
          BackgroundTask.schedule({
                period:900,
               });
            console.log("elsdaj");
            this.checkStatus();

    }


       async checkStatus() {
        const status = await BackgroundTask.statusAsync()
        console.log(status.available)
      }


    renderListItem(appointment)
    {
        console.log("i am single ",appointment)
        return (<Tile appointment={appointment} />);


    }

    showList()
    {
        console.log("*------------*",_.isEmpty(this.props.appointments))
        if(_.isEmpty(this.props.appointments))
        {
            return(<Text>LOADING</Text>)
        }
        else{
            
        return(
            <FlatList 
                data={this.props.appointments}
                renderItem={this.renderListItem}
                // keyExtractor={employee=>e.uid}
             />
            )
        }

    }

    render()
    {
        console.log("form render ",this.props);
        return(
            <View style={{flex:1}}>

            {this.showList()}

            <Button onPress={()=>LocalNotification("IT PARK","MR. Gates")}>show noti</Button>
            <Button buttonStyle={{borderRadius:100,backgroundColor:"#444",width:60,right:20,position:'absolute',bottom:30}} textStyle={{fontSize:30,color:"#fff"}}>+</Button>
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    const appointments = state.HomeScreen;

    return {appointments};
}

export default connect(mapStateToProps,{listApointments})(HomeScreen);