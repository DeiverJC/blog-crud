import { addPost } from '../actions/index';
import NewPost from '../components/NewPost';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(addPost(post))
        }
    };
}

export default connect(null, mapDispatchToProps)(NewPost);