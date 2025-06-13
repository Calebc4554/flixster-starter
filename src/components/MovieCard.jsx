import React, { useState } from 'react';
import '../components-css/MovieCard.css';

const MovieCard = ({ imgURL, name, rating, onClick }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isWatched, setIsWatched] = useState(false);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setIsFavorited(!isFavorited);
    };

    const handleBookmarkClick = (e) => {
        e.stopPropagation();
        setIsBookmarked(!isBookmarked);
    };

    const handleWatchedClick = (e) => {
        e.stopPropagation();
        setIsWatched(!isWatched);
    };

    return (
    <article className='movieCardContainer' onClick={onClick}>
        <img className='movieIMG' src={imgURL} alt={name} />
        <section className='movieContent'>
            <div>
                <h2 className='movieName'>{name}</h2>
                <p className='movieRating'>{rating}</p>
            </div>
            <div>
                <button type='button' className='heartFavWatched' onClick={handleFavoriteClick}>
                    <i className={isFavorited ? 'fas fa-heart favorited' : 'far fa-heart'}></i>
                </button>
                <button type='button' className='heartFavWatched' onClick={handleBookmarkClick}>
                    <i className={isBookmarked ? 'fas fa-bookmark bookmarked' : 'far fa-bookmark'}></i>
                </button>
                <button type='button' className='heartFavWatched' onClick={handleWatchedClick}>
                    <i className={isWatched ? 'fas fa-eye watched' : 'fas fa-eye-slash'}></i>
                </button>
            </div>
        </section>
    </article>
    );
};
export default MovieCard;
