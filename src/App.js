import React,{Component} from 'react';
import {Text,View,StyleSheet,Alert, BackHandler} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {CardSection,Card,Button} from './components/common';

class App extends Component{
	state = {
		initialPosition: 'unknown',
		lastPosition: 'unknown',
	  };
	
	  
	componentDidMount() {

	  }
	getGeoLocation()
	{
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

	render()
	{

		return(
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
			);
	}


}
const styles = StyleSheet.create({
	title: {
	  fontWeight: '600',
	},
  });

export default App;