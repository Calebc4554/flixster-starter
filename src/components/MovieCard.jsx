import React from 'react';
import '../components-css/MovieCard.css';

const MovieCard = ({ imgURL, name, rating, onClick }) => {
    return (
    <div className="movieCardContainer" onClick={onClick}>
        <img className="movieIMG" src={imgURL} alt={name} />
            <p className="movieName">{name}</p>
            <p className="movieRating">{rating}</p>
    </div>
    );
};

export default MovieCard;