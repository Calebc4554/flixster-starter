import React, { useState } from 'react';
import '../components-css/MovieCard.css';

const MovieCard = ({ imgURL, name, rating, onClick }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setIsFavorited(!isFavorited);
    };

    const handleBookmarkClick = (e) => {
        e.stopPropagation();
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className="movieCardContainer" onClick={onClick}>
            <img className="movieIMG" src={imgURL} alt={name} />
            <div>
                <p className="movieName">{name}</p>
                <p className="movieRating">{rating}</p>
            </div>
            <div>
                <button className="heartAndFav" onClick={handleFavoriteClick}>
                    <i className={isFavorited ? 'fas fa-heart favorited' : 'far fa-heart'}></i>
                </button>
                <button className="heartAndFav" onClick={handleBookmarkClick}>
                    <i className={isBookmarked ? 'fas fa-bookmark bookmarked' : 'far fa-bookmark'}></i>
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
