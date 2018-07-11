import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

/**
 * Movie box
 * @param {string} title movie title
 * @param {stirng} posterUrl movie poster image url 
 */
function Movie({title, posterUrl}) {
    return (
        <div className="wrap-movie">
            <div className="box-movie">
                <MoviePoster poster={posterUrl}/>
            </div>
            <div className="box-movie">
                <h1>Hello movies!</h1>
                <h6>{title}</h6>
        </div>
    )
}

/**
 * Movie poster component
 * @param {string} poster movie poster image 
 */
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};


export default Movie;
