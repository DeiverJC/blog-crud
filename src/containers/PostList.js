import React from 'react';
import Post from '../components/Post';
import EditPost from '../components/EditPost';
import { deletePost, editPost, updatePost } from '../actions';
import { connect } from 'react-redux';

function PostList ({ posts, onDelete, onEdit, onUpdate }) {
    return (
        <div>
            { posts.map((post) => {
                return (
                    post.isEditing ?
                    <EditPost
                        key={ post.id } 
                        post={ post }
                        onUpdate={ onUpdate }
                    /> :
                    <Post 
                        post={ post } 
                        onEdit={ onEdit } 
                        onDelete={ onDelete } 
                        key={ post.id } 
                    />
                );
            }) }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        },
        onEdit: id => {
            dispatch(editPost(id))
        },        
        onUpdate: post => {
            dispatch(updatePost(post))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);