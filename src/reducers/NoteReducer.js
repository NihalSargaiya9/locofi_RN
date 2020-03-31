import { LOCATION_CHANGED , MEETING_CHANGED, NOTE_CHANGED,DATETIME_CHANGED} from '../actions/types';

const INITIAL_STATE = {location:''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOCATION_CHANGED:
        console.log('in LOCATION_CHANGED REDUCER')
            return { ...state, location: action.payload}
        case MEETING_CHANGED:
         	console.log(action.payload)
         	return {...state, meeting_with: action.payload}
        case NOTE_CHANGED:
        	console.log(action.payload)
        	return {...state,note:action.payload}
        case DATETIME_CHANGED:
            console.log("date time payload ",action.payload)
            return {...state,note:action.payload}

        default:
            return state;
    }
};