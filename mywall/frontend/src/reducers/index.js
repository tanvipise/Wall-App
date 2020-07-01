import { combineReducers } from 'redux';
import wall from './wall';
import errors from './errors'
import posts from './posts'


export default combineReducers({
    wall,
    errors,
    posts
});