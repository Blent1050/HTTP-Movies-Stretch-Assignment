import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    console.log(id)
    axios.get(`/api/movies/${id}`)
    .then(res => this.setState({ movie: res.data }))
    .catch(err => console.log(err))
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <Button variant="contained" onClick={this.saveMovie}>
          Save
        </Button>
        <MovieCard movie={this.state.movie} />

      </div>
    );
  }
}
