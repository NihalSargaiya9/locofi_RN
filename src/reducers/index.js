import {combineReducers} from 'redux';
import DashboardReducer from './DashboardReducer';
import AuthReducer from './AuthReducer';
import NoteReducer from './NoteReducer';

export default combineReducers({


	auth : AuthReducer,
    HomeScreen:DashboardReducer,
    note:NoteReducer
});