import { combineReducers } from 'redux';
import wall from './wall';
import errors from './errors'


export default combineReducers({
    wall,
    errors
});