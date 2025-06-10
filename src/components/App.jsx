import React, { useState, useEffect } from 'react';
import '../components-css/App.css';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGYxOGUzOGRmYTc0YzFiZjBlZjU1MGJiZjk0M2U4MCIsIm5iZiI6MTc0OTUxMTY2Mi43MzUwMDAxLCJzdWIiOiI2ODQ3NmRlZWZjNjMwMGQ3YjMzZmNiZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ICuI9VPqBEqEyv2k-Wv5pPDKj0iGUGbIMFsI98cropc'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results); 
      })
      .catch(err => console.error(err));
  }, []); 


  return (
    <div className="App">
      <header>
      </header>
      <MovieList movies = {movies} />
      <div>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default App;