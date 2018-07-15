import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

/**
 * Movie box
 * @param {string} title movie title
 * @param {stirng} posterUrl movie poster image url 
 */
function Movie({title, posterUrl, genres, synopsis}) {
    return (
        <div className="wrap-movie">
            <div className="movie-poster">
                <MoviePoster poster={posterUrl}/>
            </div>
            <div className="box-movie">
                <span className="movie-title">{title}</span>
                <div className="movie-genres">
                    {genres.map((genre, idx) => {<MovieGenre genres={genre} index={idx}/>})}
                </div>
                <p className="movie-synopsis">
                    {synopsis}
                </p>
            </div>
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

/**
 * Movie genres component 
 * @param {[string]} genres movie genres
 */
function MovieGenre({genres}) {
    return (
        <span className="movie-genre">{genres}</span> 
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

MovieGenre.propTypes = {
    genres: PropTypes.string.isRequired
};


export default Movie;
