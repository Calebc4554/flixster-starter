import React, { useState, useEffect } from 'react';
import '../components-css/App.css';
import MovieList from './MovieList';

  const App = () => {
    const [movies, setMovies] = useState([]); 
    const [page, setPage] = useState(1); 
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isNowPlayingClicked, setIsNowPlayingClicked] = useState(true);

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
      setIsSearchClicked(true);
      setIsNowPlayingClicked(false);
    };

    const handleClearClick = () => {
      setSearchQuery('');
      setIsNowPlayingClicked(true);
      setIsSearchClicked(false);
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

    useEffect(() => {
      if (isSearchClicked || isNowPlayingClicked || page > 1) {
        fetchMovies();
      }

    }, [page, isSearchClicked, isNowPlayingClicked]);

    return (
    <div className="App">
      <header>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
        <button onClick={handleSearchClick}> Search</button>
        <button onClick={handleClearClick}> Clear </button>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </header>
      <MovieList movies = {movies} />
      <div>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default App;