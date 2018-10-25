import React from 'react';
import Post from '../components/Post';
import { deletePost } from '../actions';
import { connect } from 'react-redux';

function PostList ({ posts, onDelete }) {
    return (
        <div>
            { posts.map((post) => {
                return (
                    <Post post={ post } onDelete={ onDelete } key={ post.id } />
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);