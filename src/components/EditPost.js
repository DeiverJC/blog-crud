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
            <div className="card border-0 rounded-0 shadow">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        <span className="title-h5">Editing post</span>
                    </h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                placeholder="Enter title" 
                                onChange={this.handleInputChange}
                                defaultValue={this.props.post.title}
                                className="form-control form-control-lg border border-secondary"
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                rows="3" 
                                cols="30" 
                                name="body" 
                                placeholder="Enter post"
                                onChange={this.handleInputChange}
                                defaultValue={this.props.post.body}
                                className="form-control form-control-lg border border-secondary" 
                            />
                        </div>
                        <div className="form-group text-center">
                            <button 
                                type="submit" 
                                onClick={this.handleSubmit}
                                className="btn btn-success rounded pl-5 pr-5"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPost;
