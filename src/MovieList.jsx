import './MovieList.css';
import MovieCard from './MovieCard';

const MovieList = () => {
    return (
        <div className = "movieContainer">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>

    );
};

export default MovieList