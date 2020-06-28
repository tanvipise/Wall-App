import { GET_WALL, DELETE_POST, ADD_POST } from '../actions/types.js'

const initialState = {

    wall: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WALL:
            return {
                ...state,
                wall: action.payload
            };
        case DELETE_POST:
            return {
                ...state,
                wall: state.wall.filter(wall => wall.id !== action.payload)
            };
        case ADD_POST:
            return {
                ...state,
                wall: [...state.wall, action.payload]
            }
        default:
            return state;
    }
}