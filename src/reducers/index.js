import { ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from '../actions/types';

export default function postReducer (state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                action.payload
            ];
        case EDIT_POST:
            return state.map( 
                (post) => post.id === action.payload.id ?
                        { ...post, isEditing: !post.isEditing } : post
            );
        case UPDATE_POST:
            return state.map(
                (post) => {
                    if (post.id === action.payload.id) {
                        return {
                            ...post,
                            title: action.payload.data.title,
                            body: action.payload.data.body,
                            isEditing: action.payload.data.isEditing
                        };
                    } else {
                        return post;
                    }
                }
            );
        case DELETE_POST:
            return state.filter( post => post.id !== action.payload.id );
        default:
            return state;
    }
}