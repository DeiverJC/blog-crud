import React, { Component } from 'react';
import './styles/App.css';
import AddPost from './containers/AddPost';
import PostList from './containers/PostList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AddPost />
				<PostList />
			</div>
		);
	}
}

export default App;
