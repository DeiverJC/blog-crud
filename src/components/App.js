import React, { Component } from 'react';
import AddPost from '../containers/AddPost';
import PostList from '../containers/PostList';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-dark bg-white shadow-sm p-3">
						<h2 className="text-dark">
							Blog CRUD
						</h2>
						<ul className="nav">
							<li className="nav-item">
								<a 
									target="blank" 
									className="nav-link color-linkedin" 
									href="https://www.linkedin.com/in/deiverjc/"
								>
									<i class="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li className="nav-item">
								<a 
									target="blank" 
									className="nav-link color-github" 
									href="https://github.com/DeiverJC"
								>
									<i class="fab fa-github"></i>
								</a>
							</li>
							<li className="nav-item">
								<a 
									target="blank" 
									className="nav-link color-instagram" 
									href="https://www.instagram.com/deiverjc/"
								>
									<i class="fab fa-instagram"></i>
								</a>
							</li>
							<li className="nav-item">
								<a 
									target="blank" 
									className="nav-link color-twitter" 
									href="https://twitter.com/DeiverJC">
									<i class="fab fa-twitter"></i>
								</a>
							</li>
							<li className="nav-item">
								<small className="nav-link text-muted">by @Deiverjc</small>
							</li>
						</ul>     
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
