import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER,LOGOUT_USER, BASE} from './types';
import axios from 'axios';
// import requests
// import json;
// import firebase from 'firebase';
// import {Actions} from 'react-native-router-flux';

export const emailChanged =(text)=>{
	return {
		type:EMAIL_CHANGED,
		payload:text
	};
};

export const passwordChanged = (text)=>{
	return {
		type:PASSWORD_CHANGED,
		payload:text
	};
};

export const loginUser=({email,password},navigation)=>
{  
	return(dispatch)=>{
		console.log("iam here in login user")
		
		axios.get(BASE+'login',{params:{email:email,password:password}})
			.then( user=>{ user=user.data
						console.log(user)
						if (user){loginUserSuccess(dispatch,user,navigation)}
							else{loginUserFail(dispatch)}})
					
				.catch(()=> loginUserFail(dispatch));


				// console.log(res['user'])

		

		// loginUserSuccess(dispatch,navigation)
		

		// dispatch({type:loginUserSuccess})


		// firebase.auth().signInWithEmailAndPassword(email,password)
		// .then(user=> loginUserSuccess(dispatch,user))
		// .catch(()=>{
		// 	firebase.auth().createUserWithEmailAndPassword(email,password)
		// 	.then(user=>loginUserSuccess(dispatch,user))
		// 	.catch(()=>loginUserFail(dispatch));
		// });

		;
	};
};

export const logoutUser =()=>
{
	// firebase.auth().signOut();
	return(dispatch)=>{


		// Actions.pop();
		// dispatch({
		// type:LOGOUT_USER
		// });
	}
}



const loginUserSuccess=(dispatch,user,navigation)=>
{
	console.log("CLICKED",user);
	dispatch({
		type:LOGIN_USER_SUCCESS,
		payload:user
	});
	navigation.navigate("Home");
};


const loginUserFail = (dispatch)=>
{
	dispatch({
		type:LOGIN_USER_FAIL,
	});


}
