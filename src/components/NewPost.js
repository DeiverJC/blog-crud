import React, { Component } from 'react'
 
class NewPost extends Component {
    
    state = {
        title: '',
        body: ''
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
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
            <div className="card border-0 rounded-0 shadow">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        <span className="title-h5">Post</span>
                    </h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                value={this.state.title}
                                placeholder="Enter title" 
                                onChange={this.handleInputChange}
                                className="form-control form-control-lg border border-secondary"
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                rows="10" 
                                cols="30" 
                                name="body" 
                                value={this.state.body}
                                placeholder="Enter post"
                                onChange={this.handleInputChange}
                                className="form-control form-control-lg border border-secondary" 
                            />
                        </div>
                        <div className="form-group text-center">
                            <button 
                                type="submit" 
                                className="btn btn-primary rounded pl-5 pr-5"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;