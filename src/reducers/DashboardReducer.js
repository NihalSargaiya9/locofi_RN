import {DASHBOARD,LOCATION,NOTIFY} from '../actions/types';

const INITIAL_STATE = {appointments:{},notification:-1,location:""};


export default(state=INITIAL_STATE,action)=>{
	switch(action.type)
	{
		case DASHBOARD:
			return {...state,appointments:action.payload};
		case LOCATION:
			return {...state,location:action.payload}
		case NOTIFY:
			return{...state,notification:action.payload}
		default:
			return state;
	}
}