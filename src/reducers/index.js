import {combineReducers} from 'redux';
import DashboardReducer from './DashboardReducer';
import AuthReducer from './AuthReducer';
export default combineReducers({


	auth : AuthReducer,
    HomeScreen:DashboardReducer
});