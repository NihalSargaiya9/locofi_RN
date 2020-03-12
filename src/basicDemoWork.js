import React,{Component} from 'react';
import {Text,View,StyleSheet,Alert, BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Geolocation from '@react-native-community/geolocation';
import reducers from './reducers';
// import {createStackNavigator, createAppContainer} from 'react-navigation';


import {CardSection,Card,Button} from './components/common';




class App extends Component{
	state = {
		initialPosition: 'unknown',
		lastPosition: 'unknown',
	  };
	
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