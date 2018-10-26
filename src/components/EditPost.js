import React, { Component } from 'react';

class EditPost extends Component {

    state= {
        title: this.props.post.title,
        body: this.props.post.body,
        isEditing: false
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onUpdate({id: this.props.post.id, data: this.state});
            this.handleReset();
            console.log(this.state);
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: '',
            isEditing: false
        });
    };

    render () {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={ this.handleInputChange }
                    defaultValue={ this.props.post.title }
                />
                <br />
                <br />
                <textarea 
                    name="body"
                    placeholder="body"
                    onChange={ this.handleInputChange }
                    defaultValue={ this.props.post.body }
                />
                <hr />
                <button type="submit" onClick={ this.handleSubmit }>
                    update
                </button>
            </form>
        );
    }
}

export default EditPost;
