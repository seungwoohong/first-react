import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];

const moviePosters = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
  "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} posterUrl={moviePosters[0]}/> 
        <Movie title={movieTitles[1]} posterUrl={moviePosters[1]}/> 
        <Movie title={movieTitles[2]} posterUrl={moviePosters[2]}/> 
        <Movie title={movieTitles[3]} posterUrl={moviePosters[3]}/> 
      </div>
    );
  }
}

export default App;
