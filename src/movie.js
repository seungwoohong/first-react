import React, {Component} from 'react';
import './movie.css';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster posterUrl={this.props.posterUrl}/>
                <h1>Hello movies!</h1>
                <h6>{this.props.title}</h6>
            </div>
        )
    }   
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.posterUrl}/>
        );
    }
}

export default Movie;