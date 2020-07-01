import axios from 'axios';
import { createPosts, returnErrors } from './posts'

import { GET_WALL, DELETE_POST, ADD_POST } from './types';

//GET WALL POSTS
export const getWall = () => dispatch => {

    axios.get("/api/wall/")
        .then(res => {
            dispatch({
                type: GET_WALL,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE POST
export const deletePost = (id) => dispatch => {

    axios.delete(`/api/wall/${id}/`)
        .then(res => {
            dispatch(createPosts({ deletePost: 'Post Deleted' }));

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
            dispatch(createPosts({ addPost: 'Post Added' }));

            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

