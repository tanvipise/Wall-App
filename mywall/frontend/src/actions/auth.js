import axios from 'axios'
import { returnErrors } from './posts'

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types'
import { connect } from 'react-redux'

// Check token to load user

export const loadUser = () => (dispatch, getState) => {
    //User Loads...
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};


// Login User
export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // Request Body
    const body = JSON.stringify({ username, password });


    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

//Register User
export const register = ({ username, password, email }) => (dispatch) => {


    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // Request Body
    const body = JSON.stringify({ username, password, email });


    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};



//Logout User

export const logout = () => (dispatch, getState) => {


    axios.post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};


// Setup config with token - helper function
export const tokenConfig = getState => {
    //Getting token from state

    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // if token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config
}