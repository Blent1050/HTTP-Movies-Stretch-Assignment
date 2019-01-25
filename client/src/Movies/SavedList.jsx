import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="saved-list">
				<h3>Saved Movies:</h3>
				{this.props.list.map((movie) => {
					return (
						<NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
							<span className="saved-movie">{movie.title}</span>
						</NavLink>
					);
				})}
				<Button variant="contained">
					<Link to="/">Home</Link>
				</Button>
			</div>
		);
	}
}


