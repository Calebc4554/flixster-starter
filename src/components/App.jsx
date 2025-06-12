import React, { useState, useEffect } from 'react';
import '../components-css/App.css';
import MovieList from './MovieList';
import Modal from './Modal';

const App = () => {
    const [movies, setMovies] = useState([]); 
    const [page, setPage] = useState(1); 
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isNowPlayingClicked, setIsNowPlayingClicked] = useState(true);
    const [sortOption, setSortOption] = useState('title');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

  const sortMovies = (movies, sortOption) => {
    if (sortOption === 'title') {
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'releaseDate') {
      return movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortOption === 'voteAverage') {
      return movies.sort((a, b) => b.vote_average - a.vote_average);
    } else {
      return movies;
    }
  };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
      setIsSearchClicked(true);
      setIsNowPlayingClicked(false);
      setPage(1);
    };

    const handleClearClick = () => {
      setSearchQuery('');
      setIsNowPlayingClicked(true);
      setIsSearchClicked(false);
      setPage(1);
    };


    const fetchMovies = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGYxOGUzOGRmYTc0YzFiZjBlZjU1MGJiZjk0M2U4MCIsIm5iZiI6MTc0OTUxMTY2Mi43MzUwMDAxLCJzdWIiOiI2ODQ3NmRlZWZjNjMwMGQ3YjMzZmNiZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ICuI9VPqBEqEyv2k-Wv5pPDKj0iGUGbIMFsI98cropc'
        }
      };

      let url;
      if (isSearchClicked) {
        url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&language=en-US&page=${page}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
      }

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (page === 1) {
            setMovies(data.results);
          } else {
            setMovies(prevMovies => [...prevMovies, ...data.results]);
          }
        })

        .catch(err => console.error(err))
        .finally(() => {
          setIsSearchClicked(false);
        });
    };


    const loadMore = () => {
      setPage(prevPage => prevPage + 1);
    }
    const handleMovieClick = (movie) => {
      fetchMoreMovieInformation(movie.id)
    };

    useEffect(() => {
      if (isSearchClicked || isNowPlayingClicked || page > 1) {
        fetchMovies();
      }
    }, [page, isSearchClicked, isNowPlayingClicked]);

    useEffect(() => {
      const sortedMovies = sortMovies(movies, sortOption);
      setMovies(sortedMovies);
    }, [sortOption]);

    const fetchMoreMovieInformation = (id) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGYxOGUzOGRmYTc0YzFiZjBlZjU1MGJiZjk0M2U4MCIsIm5iZiI6MTc0OTUxMTY2Mi43MzUwMDAxLCJzdWIiOiI2ODQ3NmRlZWZjNjMwMGQ3YjMzZmNiZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ICuI9VPqBEqEyv2k-Wv5pPDKj0iGUGbIMFsI98cropc'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(data => {
                setSelectedMovie(data);
                setIsModalOpen(true);
            })
            .catch(err => console.error(err));
    };
    

    
    return (
    <main className="App">
      <header className = "appHeader">
        <input className = "input" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
        <button className = "appButtons" onClick={handleSearchClick}> Search</button>
        <button className = "appButtons" onClick={handleClearClick}> Clear </button>
        <select className = "selectButton" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="title">Title (alphabetic, A-Z)</option>
          <option value="releaseDate">Release date (chronologically, most recent to oldest)</option>
          <option value="voteAverage">Vote average (descending, highest to lowest)</option>
        </select>
      </header>
      <MovieList movies={sortMovies(movies, sortOption)} onMovieClick={handleMovieClick} />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedMovie && (
          <article className = "modalArticle">
            <h2 className = "modalTitle" >{selectedMovie.title}</h2>
            <img className = "modalImg" src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`} alt={`${selectedMovie.title} poster`}/>
            <p className = "modalText" >Release Date: {selectedMovie.release_date}</p>
            <p className = "modalText">Runtime: {selectedMovie.runtime} minutes</p>
            <p className = "modalText">Genres: {selectedMovie.genres.map(g => g.name).join(', ')}</p>
            <p className = "modalText">{selectedMovie.overview}</p>
          </article>
        )}
      </Modal>
      <footer className = "appFooter" >
        <section>
          <button className = "appButtons" onClick={loadMore}>Load More</button>
        </section>
      </footer>
    </main>
  );
}

export default App;