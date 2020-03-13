import React,{Component} from 'react';
import {Text,View,StyleSheet,Alert, BackHandler, PermissionsAndroid} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Geolocation from '@react-native-community/geolocation';
import reducers from './reducers';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import {CardSection,Card,Button} from './components/common';





class App extends Component{
	state = {
		initialPosition: 'unknown',
		lastPosition: 'unknown',
	};
	componentDidMount(){
		// try {
		//   const granted =PermissionsAndroid.request(
		// 	PermissionsAndroid.PERMISSIONS.CAMERA,
		// 	{
		// 	  title: 'Cool Photo App Camera Permission',
		// 	  message:
		// 		'Cool Photo App needs access to your camera ' +
		// 		'so you can take awesome pictures.',
		// 	  buttonNeutral: 'Ask Me Later',
		// 	  buttonNegative: 'Cancel',
		// 	  buttonPositive: 'OK',
		// 	},
		//   );
		//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		// 	  console.log('You can use the camera');
		// 	  console.log('You can use the camera');
		// 	} else {
		// 		console.log('You NOOO');
		// 	}
		// } catch (err) {
		// 	console.warn(err);
		// }
		RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
		.then(data => {
		  alert(data);
		}).catch(err => {
		  // The user has not accepted to enable the location services or something went wrong during the process
		  // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
		  // codes : 
		  //  - ERR00 : The user has clicked on Cancel button in the popup
		  //  - ERR01 : If the Settings change are unavailable
		  //  - ERR02 : If the popup has failed to open
		  alert("Error " + err.message + ", Code : " + err.code);
		});


			// try{
			//   const granted = PermissionsAndroid.request(
			// 	PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			// 	{
			// 	  title: 'Location Permission',
			// 	  message: 'You must to accept this to make it work.'
			// 	}
			//   )
			//   if(granted === PermissionsAndroid.RESULTS.GRANTED){
			// 	console.log('Location permission accepted.')
			//   }else{
			// 	console.log("Location permission denied here")
			//   }
			// } catch (err) {
			//   console.warn(err)
			// }
			


	}
	getGeoLocation()
	{
		try{

			  if(PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)){


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
		
		render()
		{

		return(

			<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <View>
                    <CardSection style={{}}>
                        <Card style={{flex:1}}> 
                            <Text>
                            <Text style={styles.title}>Initial position: </Text>
                            {this.state.initialPosition}
                            </Text>
                            <Text>
                            <Text style={styles.title}>Current position: </Text>
                            {this.state.lastPosition}
                            </Text>

                        <Button onPress={this.getGeoLocation.bind(this)} >Load Location</Button>
                        </Card>
                    </CardSection>			
                </View>
			</Provider>
			);
	}


}
const styles = StyleSheet.create({
	title: {
	  fontWeight: '600',
	},
  });

export default App;