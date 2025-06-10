import './MovieCard.css';

const MovieCard = () => {
    return (
        <div className = "movieCardContainer">
            <img className = "movieIMG" src="https://picsum.photos/200/300" alt="image" />
            <p className = "movieName"> MOVIE NAME</p>
            <p className = "movieRating"> MOVIE RATING</p>
        </div>

    );
};

export default MovieCard