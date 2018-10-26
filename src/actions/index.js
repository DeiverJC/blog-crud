import uuidv4 from 'uuid/v4';
import { ADD_POST, EDIT_POST, UPDATE_POST, DELETE_POST } from './types';

export const addPost = ({ title, body }) => ({
    type: ADD_POST,
    payload: {
        id: uuidv4(),
        title,
        body,
        isEditing: false
    }
});

export const editPost = (id) => ({
    type: EDIT_POST,
    payload: {
        id
    }
});

export const updatePost = ({id, data}) => ({
    type: UPDATE_POST,
    payload: { 
        id,
        data
    }
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: {
        id
    }
});