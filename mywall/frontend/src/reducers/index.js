import { combineReducers } from 'redux';
import wall from './wall';
import errors from './errors'
import posts from './posts'
import auth from './auth'


export default combineReducers({
    wall,
    errors,
    posts,
    auth
});