import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import FilterMovies from './components/FilterMovies';
import MovieList from './components/MovieList';
import { Data } from './Data';

function App() {
  const [movies,setMovies]=useState(Data)
  const addMovie =(movie)=>{
    setMovies([...movies,movie])
  }
  const deleteMovie = (id)=>{
    setMovies(movies.filter((movie)=> movie.id !== id))
  }


  return (
    <div className="App">
      <MovieList movies={movies} deleteMovie={deleteMovie} addMovie={addMovie}/>
      
      
    </div>
  );
}

export default App;