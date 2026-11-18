import React from 'react'

function MovieCards({movie}) {
  return (
    <div>
       

        

        <div className='movie-card'>
          <img
            src={movie.Poster}
            alt={movie.Tital}
          />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <a href=''>Details</a>
        </div>
    </div>
  )
}

export default MovieCards