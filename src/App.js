import './App.css';
import { moviesData } from './Movies'
import React, { useState } from 'react';
import MovieList from './Movie-list'
import SearchMovie from './SearchMovie';
import AddMovie from './Add-movie';

function App() {
  const [data, setData] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addHandler = (newMovie) => {
    setData([...data, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie setSearchName={setSearchName}  setSearchRating={setSearchRating} />
      <MovieList movies={data} searchName={searchName} searchRating={searchRating} />
      <AddMovie addHandler={addHandler} />
    </div>
  );
}

export default App;
