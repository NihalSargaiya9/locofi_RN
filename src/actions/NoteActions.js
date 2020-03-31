import { LOCATION_CHANGED, MEETING_CHANGED ,NOTE_CHANGED,DATETIME_CHANGED} from './types';

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

export const dateTimeChanged = (text) =>{
	return{

		type: DATETIME_CHANGED,
		payload: text
	}
};