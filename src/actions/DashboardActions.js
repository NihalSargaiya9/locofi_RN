import {DASHBOARD,LOCATION,NOTIFY} from "./types";
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
export const getLocation=(lat,long)=>
{
	console.log("AHHM BRAMHA ASMI")
	return(dispatch)=>{

	axios.get(BASE+'pointInGeo',{params:{lat:lat,long:long}}).then(function success(resp) {
		// dispatch({type:DASHBOARD,payload:[]});
		console.log(resp.data)
	// console.log("AHHM BRAMHA ASMI 2")
		if(resp.data.geo_id!=-1)
		{
			dispatch(
			{
				type:NOTIFY,
				payload:resp.data.geo_id
			}
				)
		}
		else
		{
			dispatch(
			{
				type:NOTIFY,
				payload:-1
			})
		}
	}).catch(function error(err) {
		console.log(err);
	});

	}
}

export const tileClick=()=>
{
	console.log("i am clicked");
}