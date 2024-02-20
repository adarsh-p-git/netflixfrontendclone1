import React, { useEffect, useState } from 'react'
import tmdbAxiosinstance from '../tmdbAxiosinstance';
import './banner.css'

function Banner({fetchUrl}) {

    const[movie,setMovie]=useState()

    const base_url= "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{
      const {data} = await tmdbAxiosinstance.get(fetchUrl)

console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
      useEffect(()=>{
        fetchData()
            },[])
        
    
  return (
    <div style={{
      height:"600px",
      backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
      backgroundSize:"cover",
      backgroundAttachment:"fixed"
    }}>
      <div className='banner_content'>
<h1>{movie?.name}</h1>
<h5>{movie?.overview}</h5>
      </div>

    </div>
  )
}

export default Banner