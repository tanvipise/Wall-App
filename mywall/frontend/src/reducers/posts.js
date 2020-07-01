import { CREATE_POSTS } from '../actions/types';

const initialState = {
    msg: {},
    status: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_POSTS:
            return (state = action.payload)
        default:
            return state;
    }
}