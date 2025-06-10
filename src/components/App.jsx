import React, { useState, useEffect } from 'react';
import '../components-css/App.css';
import MovieList from './MovieList';

const App = () => {
  const [movieDbConfig, setMovieDbConfig] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGYxOGUzOGRmYTc0YzFiZjBlZjU1MGJiZjk0M2U4MCIsIm5iZiI6MTc0OTUxMTY2Mi43MzUwMDAxLCJzdWIiOiI2ODQ3NmRlZWZjNjMwMGQ3YjMzZmNiZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ICuI9VPqBEqEyv2k-Wv5pPDKj0iGUGbIMFsI98cropc'
      }
    };

    fetch('https://api.themoviedb.org/3/configuration', options)
      .then(res => res.json())
      .then(data => {
        setMovieDbConfig(data);
        console.log(data)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header>
        {movieDbConfig ? <p>Configuration Loaded</p> : <p>Loading...</p>}
      </header>
      <MovieList />
    </div>
  );
}

export default App;