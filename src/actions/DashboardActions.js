import {Dashboard} from "./types";
import axios from 'axios';


export const listApointments=()=>
{

	return(dispatch)=>{
		dispatch(
			{
				type:Dashboard,
				payload:"ABIDATA NI AAYA"
			}
		)
	// axios.get('http://locofi.pythonanywhere.com/').then(function success(resp) {
	// 	dispatch({type:Dashboard,payload:resp.data});
	// }).catch(function error(err) {
	// 	console.log(err);
	// });

	}
}

export const tileClick=()=>
{
	console.log("i am clicked");
}