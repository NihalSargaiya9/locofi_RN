import React, { Component }from 'react';


import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


import { Text, Dimensions,View, Alert, Image, ScrollView,PermissionsAndroid} from 'react-native';
import { Card, CardSection, Input ,Button, Spinner } from './common';


class welcome extends Component {

constructor(props){
        super(props);
           this.state={
   
            };
         }
     componentDidRecieveProps(nextProps,nextState){
       this.setState({
        NavTitle:nextProps["title"],
         NavColor:nextProps["tintColor"]
        });
  
       }


     componentDidMount()
     {
     	console.log(this.props)
		RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
		.then(data => {
		  // alert(data);
		}).catch(err => {
		  // The user has not accepted to enable the location services or something went wrong during the process
		  // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
		  // codes : 
		  //  - ERR00 : The user has clicked on Cancel button in the popup
		  //  - ERR01 : If the Settings change are unavailable
		  //  - ERR02 : If the popup has failed to open
		  alert("Error " + err.message + ", Code : " + err.code);
		});
		let that = this;
       	setTimeout(function (props) {
       		// body...

       		that.props.navigation.navigate("Login");
       	},3000)
     }

				
	render(){
		    this.props.navigation.setOptions({headerShown:false,});
	
		return(
	    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	      <Text style={{ fontSize: 30 }}>LOGO</Text>
	    </View>

			);
	}
}



export default welcome;
