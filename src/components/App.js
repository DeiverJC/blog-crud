import React, { Component } from 'react';
import AddPost from '../containers/AddPost';
import PostList from '../containers/PostList';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-dark bg-white shadow-sm p-3">
						<h2 className="text-dark">Blog CRUD</h2>            
					</nav>
				</header>
				<div className="container-fluid">
					<div className="row mt-4">
						<div className="col-4 ">

							<AddPost />

						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-12">

									<PostList />

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
