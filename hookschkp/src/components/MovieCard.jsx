import React from 'react'
import './components.css'
import ReactStars from "react-rating-stars-component";
import Rating from 'react-star-rating-lite';

export default function MovieCard({movie ,deleteMovie}) {
  
  
  return (
      
      <div className='box1'>
            <h1>{movie.title}</h1>
            <h1>{movie.description}</h1>
            <img style={{width:"200px"}} src={movie.posterUrl} alt="" />
            <h1>{movie.rate}</h1>
            <button onClick={()=>deleteMovie(movie.id)} >remove card</button>
            <Rating value={movie.rate} readonly />
 
    </div>
    
  )
}
