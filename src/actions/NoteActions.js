import { LOCATION_CHANGED,
		 MEETING_CHANGED,
		 BASE,
		 DASHBOARD ,
		 NOTE_CHANGED,
		 DATETIME_CHANGED,
		 LOAD_VALUES,
		 UPDATE_SUCCESS,
		 INSERT_SUCCESS,
		 CREATE_NOTE,
		 DELETE_SUCCESS} from './types';


import {getNav} from '../components/navigator';
import axios from 'axios';
import Moment from 'moment';

export const createNote= ()=>{
	return {
		type:CREATE_NOTE
	};
}


export const locationChanged = (value) => {
    return{
        type: LOCATION_CHANGED,
        payload: value
    }
    };

export const meetingChanged = (text) =>{
	return{

		type: MEETING_CHANGED,
		payload: text
	}
};

export const noteChanged = (text) =>{
	return{

		type: NOTE_CHANGED,
		payload: text
	}
};

export const insertDetails = (location,meeting,note,datetime,user) =>{
	// value['s_no'],value['content'],value['geo_id'],value['meeting_with'],value['time']
	console.log("check here : " ,location,meeting,note,datetime,user)
	const navigation = getNav();
	
	return(dispatch)=>{
		parameters = {
			e_id:1,
			content:note,
			geo_id:location,
			meeting_with:meeting,
			time:datetime
		}
	axios.get(BASE+'insertAppointment',{params:parameters}).then((data)=>{
		console.log(data)
			dispatch({
			type: INSERT_SUCCESS,
		})
		navigation.navigate("Home")
	}).catch((err)=>{console.log(err)});
}

};

export const deleteNote = (note_id,user) =>{
	// value['s_no'],value['content'],value['geo_id'],value['meeting_with'],value['time']
	const navigation = getNav();
	console.log(note_id,user," hello world")
	return(dispatch)=>{
		parameters = {
			sno:note_id,
			e_id:user
		}
	axios.get(BASE+'deleteNotes',{params:parameters}).then((data)=>{
		console.log(data)
			dispatch({
			type: DELETE_SUCCESS,
		})
		navigation.navigate("Home")
	}).catch((err)=>{console.log(err)});
}

};


export const updateDetails = (location,meeting,note,datetime,sno,note_id) =>{
	// value['s_no'],value['content'],value['geo_id'],value['meeting_with'],value['time']
	const navigation = getNav();
	
	return(dispatch)=>{
		parameters = {
			s_no:sno,
			content:note,
			geo_id:location,
			meeting_with:meeting,
			time:datetime,
			note_id:note_id
		}
			console.log(location,meeting,note,datetime,sno)
	axios.get(BASE+'updateAppointment',{params:parameters}).then((data)=>{
		console.log(data)
			dispatch({
			type: UPDATE_SUCCESS,
		})
		navigation.navigate("Home")
	}).catch((err)=>{console.log(err)});
}

};

// export const loadValues = (obj) =>{
// 	return
// 	{
// 		type: LOAD_VALUES,
// 		payload: obj

// 	}
// }

export const dateTimeChanged = (text) =>{
	return{

		type: DATETIME_CHANGED,
		payload: text
	}
};
export const loadValues = (obj) =>{
		// firebase.auth().signOut();
	const navigation = getNav();
	return(dispatch)=>{


		// Actions.pop();
		// dispatch({
		// type:LOGOUT_USER
		// });
		axios.get(BASE+'appointmentDetails',{params:{appointment_id:obj[0]}})
			.then( user=>{
				user=user.data[0]
				console.log(user)
				data = {sno:user[0],note_id:user[7],location:user[3],meeting:user[4],datetime:user[6],note:user[1]};
				dispatch(
				{
					type:LOAD_VALUES,
					payload:data
				}
				)
				navigation.navigate("Note")

			}).catch((err)=> console.log(err));


	}
};
