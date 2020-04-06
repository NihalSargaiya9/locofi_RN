import React,{Component} from 'react';
import {Text, View,FlatList,PermissionsAndroid,Alert} from 'react-native';
import {connect} from 'react-redux';
import {listApointments,getLocation} from '../actions';
import _ from 'lodash';
import Geolocation from '@react-native-community/geolocation';


import {NavigationEvents} from '@react-navigation/native';

import { LocalNotification } from '../services/LocalPushController'



import {setNav} from './navigator'
import {Button} from './common/'

  // BackgroundTask.define( () => {
  //       console.log('Hello from a background task slos')
  //       LocalNotification("IT PARK","MR. Gates")
  //   // this._interval = setInterval(()=>{
  //   //     console.log('Hello from a background task')
  //   //   },2000)
  //       BackgroundTask.finish()
  // })


import Tile from './Tile';
import CreateNotes from './CreateNotes';

class HomeScreen extends Component {

    constructor(props){
        super(props);
           this.state={
                    lastPosition:{lat:0,long:0},
                    initialPosition:{lat:0,long:0},
   
            };
         }
     // componentDidRecieveProps(nextProps,nextState){
     //   this.setState({
     //    NavTitle:nextProps["title"],
     //     NavColor:nextProps["tintColor"]
     //    });
   
     //   }

    checkLocation()
    {
      if(PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)){

        Geolocation.getCurrentPosition(
          position => {
            const initialPosition = position;
        this.props.getLocation(initialPosition.coords.latitude,initialPosition.coords.longitude);
        // this.props.getLocation(22.685941,75.872163);
        this.setState({initialPosition:{lat:initialPosition.coords.latitude,long:initialPosition.coords.longitude}})
        },
        error => Alert.alert('Error', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        this.watchID = Geolocation.watchPosition(position => {
          const lastPosition =position;
          if(lastPosition.coords.latitude != this.state.lastPosition.lat && lastPosition.coords.longitude != this.state.lastPosition.long)
              {
          this.setState({lastPosition:{lat:lastPosition.coords.latitude,long:lastPosition.coords.longitude}});
        this.props.getLocation(lastPosition.coords.latitude,lastPosition.coords.longitude);
        }
      });
      }

    }
      //  async checkStatus() {
      //   const status = await BackgroundTask.statusAsync()
      //   console.log(status.available)
      // }


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
                keyExtractor={appointment=>{parseInt(appointment[0])}}

             />
            )
        }

    }

    componentDidMount()
    {
        this.props.listApointments();

            setNav(this.props.navigation);
            this.checkLocation();

    }


    renderNotes(){
      this.props.navigation.navigate("CreateNotes");
    }
    render()
      // return <CreateNotes navigatin = {navigation}/>
    {
      if(this.props.notification!=-1)
      {
        LocalNotification("IT PARK","MR. Gates")

      }
        return(
            <View style={{backgroundColor:'#FFFFFF',flex:1}}>
            {this.showList()}

            <Button buttonStyle={{borderRadius:100,borderColor:'transparent',backgroundColor:"#283593",width:60,right:20,position:'absolute',bottom:30}}
                    textStyle={{fontSize:30,color:"#fff"}}
                    onPress={this.renderNotes.bind(this)}>+</Button>
            </View>
            // <Button onPress={this.checkLocation.bind(this)}>show noti</Button>
        )
    } 
}

const mapStateToProps = state =>{
    const {appointments,Location,notification} = state.HomeScreen;

    return {appointments,Location,notification};
}

export default connect(mapStateToProps,{listApointments,getLocation })(HomeScreen);