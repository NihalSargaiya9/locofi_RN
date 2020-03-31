import React, { Component }from 'react';


import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


import { Text, Dimensions,View, Alert, Image, ScrollView,PermissionsAndroid} from 'react-native';
import { Card, CardSection, Input ,Button, Spinner } from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';


class LoginForm extends Component {

	onEmailChange(text){
		 this.props.emailChanged(text);
	}
	onPasswordChange(text){
		 this.props.passwordChanged(text);
	}
	onButtonPress()
	{
		console.log("local");
		const {email,password}= this.props;
		console.log(this.props)
		this.props.loginUser({email,password},this.props.navigation);
	}
	renderError()
	{
		if(this.props.error)
			return(
					<View style={{background:"#fff"}}>
					<Text style={{color:'red',alignSelf:'center',fontSize:20}}>
						{this.props.error}
					</Text>
					</View>
				);
	}

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
		// RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
		// .then(data => {
		//   alert(data);
		// }).catch(err => {
		//   // The user has not accepted to enable the location services or something went wrong during the process
		//   // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
		//   // codes : 
		//   //  - ERR00 : The user has clicked on Cancel button in the popup
		//   //  - ERR01 : If the Settings change are unavailable
		//   //  - ERR02 : If the popup has failed to open
		//   alert("Error " + err.message + ", Code : " + err.code);
		// });
     }

		
	
	// state={ email: '', password: ''};

  	onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

	getGeoLocation()
	{
		try{

			  if(PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)){


				console.log('Location permission accepted.')
				Geolocation.getCurrentPosition(
					position => {
						const initialPosition = JSON.stringify(position);
				this.setState({initialPosition});
				},
				error => Alert.alert('Error', JSON.stringify(error)),
				{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
				);
				this.watchID = Geolocation.watchPosition(position => {
					const lastPosition = JSON.stringify(position);
				this.setState({lastPosition});

			});
		
			}
			else{
				console.log("Location permission denied")
			  }
			} catch (err) {
			  console.warn(err)
			}


			// 	Geolocation.getCurrentPosition(
			// 		position => {
			// 			const initialPosition = JSON.stringify(position);
			// 	this.setState({initialPosition});
			// 	},
			// 	error => Alert.alert('Error', JSON.stringify(error)),
			// 	{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
			// 	);
			// 	this.watchID = Geolocation.watchPosition(position => {
			// 		const lastPosition = JSON.stringify(position);
			// 	this.setState({lastPosition});
			// });
		}
	render(){
		// this.getGeoLocation();
		    this.props.navigation.setOptions({headerShown:false,});
		return(

			<ScrollView contentContainerStyling={{ alignItems:'center',
												   justifyContent:'center'}}>
			<View style={ styles.container }>
			
				<View style={ styles.logoStyle }>

					<Image style={{ width:100,
									height:100,
									marginTop:200
								}}
								source={{uri: "https://img.icons8.com/offices/80/000000/worldwide-location.png" }} />

						 <Text style={styles.welcomeTextStyle} >Welcome</Text>
				</View>

				<View style={styles.cardStyle}>
				
					<CardSection style={styles.cardSectionStyle}>
						<Input 
							imageUrl ="https://img.icons8.com/ultraviolet/40/000000/filled-message.png"
							placeholder="Email" 
							style={styles.inputContainerStyle}
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
							/>
					</CardSection>

					<CardSection style={styles.cardSectionStyle}>
						<Input 
							secureTextEntry
							imageUrl = "https://img.icons8.com/ultraviolet/40/000000/key.png"
							placeholder="password"
							style={styles.inputContainerStyle}
							onChangeText={ this.onPasswordChange.bind(this)}
							value={this.props.password}
							/>
					</CardSection>

						<Button buttonStyle={styles.buttonContainerStyle.buttonStyle} textStyle={styles.buttonContainerStyle.textStyle} 
						onPress={this.onButtonPress.bind(this)}>
						Log In
					 	</Button>
					 	{this.renderError()}
						

				</View>
					
			</View>
			</ScrollView>


			);
	}
}

const styles = {
	container: {
		backgroundColor: '#E1F5FE',
		height:Dimensions.get('window').height    
  },

	logoStyle:{
		paddingBottom:70,
		juntifyContent:'center',
		alignItems:'center'
		},

	welcomeTextStyle: {
		fontSize:30,
		paddingTop:5,
		color:'#546E7A'
  },

 	inputContainerStyle:{
	    inputStyle:{
		    fontSize:17,
			height:45,
		    marginLeft:7,
		    paddingTop:2,
		    flex:1
			},
	    containerStyle:{
	    	paddingRight: 5,
			paddingLeft: 5,
			borderBottomColor: 'transparent',
		    borderRadius:30,
		    borderBottomWidth: 1,
		    width:300,
		    height:55,
		    marginBottom:20,
		    flexDirection: 'row',
		    alignItems:'center'
				}
	},

	cardSectionStyle: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'relative',
		borderRadius:30,
		width:300,
		height:63,
		marginBotton:15,
		borderWidth: 5,
		borderColor: 'transparent',

	},

	cardStyle:{	
	alignItems:'center',
	justifyContent:'center',
	marginBottom: 100,
	},

	buttonContainerStyle:{
		textStyle:{
			fontSize: 16,
			alignSelf: 'center',
			fontWeight: '600',
			color: '#fff',
			paddingTop: 10,
			paddingBottom: 10
	},

		buttonStyle: {
			height:50,
			paddingTop:10,
	    	justifyContent: 'center',
	    	alignItems: 'center',
	    	marginBottom:20,
	    	marginTop:5,
	    	width:300,
			borderColor:'transparent',
	    	backgroundColor: "#64B5F6",
	    	borderRadius:30,
  }
}
};

const mapStateToProps = state =>{
	return {
		email:state.auth.email,
		password:state.auth.password,
		error:state.auth.error,
		loading:state.auth.loading
	};
};

export default connect(mapStateToProps,actions)(LoginForm);
