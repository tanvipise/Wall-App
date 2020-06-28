import axios from 'axios';
import { GET_WALL, DELETE_POST, ADD_POST } from './types';

//GET WALL POSTS
export const getWall = () => dispatch => {

    axios.get("/api/wall/")
        .then(res => {
            dispatch({
                type: GET_WALL,
                payload: res.data
            })
        }).catch(err => console.log(err));
};

// DELETE POST
export const deletePost = (id) => dispatch => {

    axios.delete(`/api/wall/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        }).catch(err => console.log(err));
};

//ADD POST

export const addPost = (wall) => dispatch => {

    axios.post("/api/wall/", wall)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(err => console.log(err));
};