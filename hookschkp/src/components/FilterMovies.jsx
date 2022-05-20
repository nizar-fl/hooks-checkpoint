import React from 'react'
import Rating from 'react-star-rating-lite'


export default function FilterMovies({setFilterd , setStar}) {
  const handleChange = (e) => {
      setFilterd (e.target.value) 
    }
    const onClickHandler = (ratedVal)=>
    {
        setStar(ratedVal)
    }
  return (
    <div>
        
        <Rating   onClick={onClickHandler}/>
        <input type="text" placeholder='search for movie' onChange={handleChange}/>
    </div>
  )
}
