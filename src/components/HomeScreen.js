import React,{Component} from 'react';
import {Text, View,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {listApointments} from '../actions';
import _ from 'lodash';

import {NavigationEvents} from '@react-navigation/native';
import BackgroundTask from 'react-native-background-task'

import { LocalNotification } from '../services/LocalPushController'



import {setNav} from './navigator'
import {Button} from './common/'

  BackgroundTask.define(() => {
        console.log('Hello from a background task slos')
    this._interval = setInterval(()=>{
        LocalNotification("IT PARK","MR. Gates")
        console.log('Hello from a background task')
        BackgroundTask.finish()
      },2000)
  })


import Tile from './Tile';
import CreateNotes from './CreateNotes';

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
            this.checkStatus();
            setNav(this.props.navigation);

    }


       async checkStatus() {
        const status = await BackgroundTask.statusAsync()
        console.log(status.available)
      }


    renderListItem(appointment,navigation)
    {
        // console.log("i am single ",appointment)
        return (<Tile navigation={navigation} appointment={appointment} />);


    }


    showList()
    {
        // console.log("*------------*",_.isEmpty(this.props.appointments))
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

    renderNotes(){
      this.props.navigation.navigate("CreateNotes");
    }
    render()
      // return <CreateNotes navigatin = {navigation}/>
    {
        return(
            <View style={{flex:1}}>

            {this.showList()}

            <Button onPress={()=>LocalNotification("IT PARK","MR. Gates")}>show noti</Button>
            <Button buttonStyle={{borderRadius:100,backgroundColor:"#444",width:60,right:20,position:'absolute',bottom:30}}
                    textStyle={{fontSize:30,color:"#fff"}}
                    onPress={this.renderNotes.bind(this)}>+</Button>
            </View>
        )
    } 
}

const mapStateToProps = state =>{
    const appointments = state.HomeScreen.data;

    return {appointments};
}

export default connect(mapStateToProps,{listApointments})(HomeScreen);