import React, { Component } from 'react';
import './App.css';
import Movie from './movie/movie';

class App extends Component {
  state = {};

  /**
   * Life cycle of React
   */
  componentDidMount() {
    this._getMovies();
  }

  /** 
   * Main Component of Movie chart 
   * @return Template - Movie Component
   */
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english}
        posterUrl={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
       />
    });

    return movies;
  }

  /**
   * get Movie info Data
   */
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  /**
   * Get moive data from movie api 
   * @returns {Promise}
   */
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(movies => movies.json())
    .then(moviesJson => {
      return moviesJson.data.movies;
    }) 
    .catch(err => console.log(err));
  }

  /**
   * App template rendering
   */
  render() {
    return (
      <div className="App">
        <div className="header">Movie Charts</div>
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
