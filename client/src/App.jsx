import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
    };
    
	}

	addToSavedList = movie => {
		const savedList = this.state.savedList;
		const movieTitles = savedList.map(item => item.title)
		if (!movieTitles.includes(movie.title)) {
		  savedList.push(movie)
		  this.setState({ savedList });
		}
	  };
    
	render() {
		return (
			<div>
				<AppBar position="sticky">
					<Toolbar className='navbar'>
						<Typography variant="h6" color="inherit">
							<Link className="home" to="/">
								Home
							</Link>
						</Typography>
					</Toolbar>
				</AppBar>
				<Route exact path="/" component={MovieList} />
				<Route
					path="/movies/:id"
					render={(props) => {
						return <Movie {...props} addToSavedList={this.addToSavedList} />;
					}}
				/>
				<SavedList list={this.state.savedList} />
			</div>
		);
	}
}
