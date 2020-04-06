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
import CreateNotes from './components/CreateNotes';
import LoginForm from './components/LoginForm';
import Welcome from './components/WelcomeScreen';


const Stack = createStackNavigator();

function App() {
  return (
	<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
		<NavigationContainer>

		<Stack.Navigator initialRouteName="Login"		>

			<Stack.Screen name="Home" component={HomeScreen}  
				options={{headerStyle:{
										backgroundColor:'#283593'
									},
							headerTintColor: '#fff',
					        headerTitleStyle: {fontWeight: 'bold',marginLeft:'auto'
          }}
				}/>
			<Stack.Screen name="Login" component={LoginForm} 
			 screenOptions={{
				headerMode:'none'
			  }}
			/>
			<Stack.Screen name="Welcome" component={Welcome} 
			 screenOptions={{
				headerMode:'none'
			  }}
			/>
			<Stack.Screen name="Note" component={Note}
<<<<<<< HEAD
			options={{headerStyle:{
										backgroundColor:'#283593'
									},
							headerTintColor: '#fff',
					        headerTitleStyle: {fontWeight: 'bold',marginLeft:'auto'
          }}
				}


			// {({ navigation,route }) => ({ title: "NOTE" })}
=======
			options={({ navigation,route }) => ({ title: "NOTE" }),
						{headerStyle:{
										backgroundColor:'#283593'
									},headerTintColor: '#fff'}

						}
>>>>>>> cae8d256ed666802f651520b0a14f2c6d2eb37f6
			 />
			 <Stack.Screen name="CreateNotes" component={CreateNotes}
			options={({ navigation,route }) => ({ title: "NOTE" }),{headerStyle:{
										backgroundColor:'#283593'
									},headerTintColor: '#fff'}}
			 />		
		</Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
}  

export default App;