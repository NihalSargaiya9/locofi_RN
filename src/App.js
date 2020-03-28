// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import HomeScreen from './components/HomeScreen';
import Note from './components/Note';
import LoginForm from './components/LoginForm';


const Stack = createStackNavigator();

function App() {
  return (
	<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Note"
		//  screenOptions={{
		// headerShown: false
		//   }}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Login" component={LoginForm} 
			 screenOptions={{
				headerMode:'none'
			  }}
			/>
			<Stack.Screen name="Note" component={Note}
			options={({ navigation,route }) => ({ title: "NOTE" })}
			 />
		</Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
}  

export default App;