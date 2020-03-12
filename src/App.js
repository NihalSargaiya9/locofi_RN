// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
	<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
}

export default App;