import React from "react";
import "../components-css/MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
	if (!movies || movies.length === 0) {
		return <p>Loading movies...</p>;
	}
	return (
		<div className="movieContainer">
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					imgURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					name={movie.title}
					rating={`Rating: ${movie.vote_average}`}
					onClick={() => onMovieClick(movie)}
					alt={`${movie.title} poster`}
				/>
			))}
		</div>
	);
};
export default MovieList;
