import React, { useEffect, useState } from 'react'
import tmdbAxiosinstance from '../tmdbAxiosinstance';
import './row.css'

function Row({title,fetchUrl,isPoster}) {
    // console.log(fetchUrl);

const[allmovies,setAllmovies]=useState()
const base_url = "https://image.tmdb.org/t/p/original/"

    const  fetchData= async()=>{

     const {data}  = await tmdbAxiosinstance.get(fetchUrl)

     console.log(data.results);
     setAllmovies(data.results)
    }
console.log(allmovies);
    useEffect(()=>{
fetchData()
    },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {
          allmovies?.map(item=>(
            <img className={`${isPoster && 'movie-poster'} movies`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="" />
          ))
        }
         
      </div>
      </div>
  )
}

export default Row