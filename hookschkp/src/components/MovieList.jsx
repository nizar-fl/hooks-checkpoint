import React, { useState } from 'react'
import AddMovie from './AddMovie'
import FilterMovies from './FilterMovies'
import MovieCard from './MovieCard'

export default function MovieList({movies , deleteMovie ,addMovie}) {
  const [filtered , setFilterd] = useState('')
  const [star , setStar] = useState(0)
  var filteredMovies = movies.filter((movie)=> movie.title.toLowerCase().includes(filtered.toLocaleLowerCase()))
  if(star !== 0){filteredMovies = movies.filter((movie)=>   movie.rate ==star )}
      
  return (
    <div>
      <FilterMovies setFilterd={setFilterd} setStar={setStar}/>
        {filteredMovies.map((movie) => {
          return(
            <div>
               
               <MovieCard movie={movie} key={movie.id} deleteMovie={deleteMovie}/>
               
            </div>
            
        )})}
        <AddMovie  addMovie={addMovie}/>
    </div>
  )
}
