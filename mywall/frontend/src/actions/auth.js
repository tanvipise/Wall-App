import axios from 'axios'
import { returnErrors } from './posts'

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types'
import { connect } from 'react-redux'

// Check token to load user

export const loadUser = () => (dispatch, getState) => {
    //User Loads...
    dispatch({ type: USER_LOADING });

    //Getting token from state

    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // if token, add to headers config
    if (token) {
        config.header['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.reponse.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}
