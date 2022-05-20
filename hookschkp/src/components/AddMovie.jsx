import React, { useState } from 'react'

export default function AddMovie({addMovie}) {
    // const [input,setInput]=usestate({

    // })
    const [newMovie,setNewMovie]=useState({
        id:Math.random(),
        title:'',
        description:'',
        posterUrl:'',
        rate:''

    })
    const handleChange =(e)=>{
        setNewMovie({...newMovie,[e.target.name]: e.target.value, })
    }

    
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='movie title' name='title' />
        <input type="text" onChange={handleChange} placeholder='movie description' name='description'/>
        <input type="text" onChange={handleChange} placeholder='movie posterUrl' name='posterUrl'/>
        <input type="text" onChange={handleChange} placeholder='movie rate' name='rate'/>
        <button  onClick={()=> addMovie(newMovie)}>add movie</button>
    </div>
  )
}
