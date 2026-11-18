import React from 'react'
import MovieCards from './MovieCards'

function MoveList({movies}) {
    if(movies.length === 0){
        return <p>no movies found </p>

    }

  return (
    <div>

         <div className='movie-list'>

            {movies.map((movie)=>(
        <MovieCards key={(movie.imdbID)} movie={movie}/>
            
            ))}
      </div>
    </div>
  )
}

export default MoveList