import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

  state = {
    greeting: 'Hello',
    movies: [
      {
        title: "Matrix",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
      },
      {
        title: "Full Metal Jacket",
        poster: "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
      },
      {
        title: "Star Wars",
        poster: "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: 'Trainspotting',
            poster: "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
           }
        ]
      })
    }, 1000);
  }

  render() {
    var stat = this.state;

    return (
      <div className="App">
        {stat.greeting}
        {stat.movies.map((movie, index) => {
          return <Movie title={movie.title} posterUrl={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
