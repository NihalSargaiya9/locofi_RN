import { LOCATION_CHANGED , MEETING_CHANGED, NOTE_CHANGED,DATETIME_CHANGED,LOAD_VALUES,UPDATE_SUCCESS} from '../actions/types';

const INITIAL_STATE = {location:"2",meeting:'',datetime:'',note:"",note_id:""};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOCATION_CHANGED:
        console.log('in LOCATION_CHANGED REDUCER')
            return { ...state, location: action.payload}
        case MEETING_CHANGED:
         	console.log(action.payload)
         	return {...state, meeting: action.payload}
        case NOTE_CHANGED:
        	console.log(action.payload)
        	return {...state,note:action.payload}
        case DATETIME_CHANGED:
            console.log("date time payload ",action.payload)
            return {...state,datetime:action.payload}
        case LOAD_VALUES:
            console.log("val from home",action.payload)
            return {...state,...action.payload}
        case UPDATE_SUCCESS:
            return{...state}

        default:
            return state;
    }
};