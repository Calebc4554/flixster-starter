import React from 'react';
import '../components-css/MovieCard.css';

const MovieCard = ({ imgURL, name, rating }) => {
    return (
    <div className="movieCardContainer">
        <img className="movieIMG" src={imgURL} alt={name} />
            <p className="movieName">{name}</p>
            <p className="movieRating">{rating}</p>
    </div>
    );
};

export default MovieCard;