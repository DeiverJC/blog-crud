import React, { Component } from 'react'
 
class NewPost extends Component {
    
    state = {
        title: '',
        body: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: ''
        });
    };

    render () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={ this.handleInputChange }
                    value={ this.state.title }
                />
                <br />
                <br />
                <textarea 
                    name="body"
                    placeholder="body"
                    onChange={ this.handleInputChange }
                    value={ this.state.body }
                />
                <hr />
                <button type="submit">
                    Add post
                </button>
                <button type="button" onClick={ this.handleReset }>
                    Reset
                </button>
            </form>
        );
    }
}

export default NewPost;