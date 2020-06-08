import {combineReducers} from 'redux';
import modal from './modal';
import things from './things';
import points from './points';

export default combineReducers({
	modal,
	things,
	points,
})