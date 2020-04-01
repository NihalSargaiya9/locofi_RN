import {DASHBOARD} from "./types";
import axios from 'axios';
import {BASE} from './types';

export const listApointments=()=>
{

	return(dispatch)=>{

	axios.get(BASE+'appointments').then(function success(resp) {
		dispatch({type:DASHBOARD,payload:resp.data});
	}).catch(function error(err) {
		console.log(err);
	});

	}
}

export const tileClick=()=>
{
	console.log("i am clicked");
}