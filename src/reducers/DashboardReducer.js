import {Dashboard} from '../actions/types';

const INITIAL_STATE = {};


export default(state=INITIAL_STATE,action)=>{
	switch(action.type)
	{
		case Dashboard:
			return action.payload;
		default:
			return state;
	}
}