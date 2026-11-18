import React, { useEffect, useRef, useState } from 'react'
import MoveList from '../Components/MoveList';

function Home() {
    const [movie , setmovie] =useState([]);
        const [loading , SetLoading] = useState(false);
    const inputRef = useRef();

    const fetchapi = async (query) =>{
      SetLoading(true)
    
          const res =await fetch(` http://www.omdbapi.com/?apikey=89d21766&s=${query}`);
        const data =await res.json();
        console.log(data);
        setmovie(data.Search || []);
        SetLoading(true);
    }
       useEffect(()=>{
        fetchapi("phool aur kaante");
       },[])

       const handlesubmit = (e) =>{
             e.preventDefault();

             const query = inputRef.current.value.trim();
             if(query)fetchapi(query);
       }
  return (
    <div className='home'>
      <form onSubmit={handlesubmit}>
        <input ref={inputRef} type='text' className='searchInput' placeholder='Search for movie' />
        <button className='searchButton' type='submit'>Search</button>
      </form>
    {loading? <MoveList movies={movie}/>:<p>loading</p>}
    </div>
  )
}

export default Home
