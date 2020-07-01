import { CREATE_POSTS, GET_ERRORS } from './types'

export const createPost = msg => {
    return {
        type: CREATE_POSTS,
        payload: msg
    };
};

// RETURN ERRORS

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}