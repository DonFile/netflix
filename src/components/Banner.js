import axios from 'axios';
import React, { useState, useEffect } from 'react'
import requests from '../Request';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState();
    // const [readmore,setReadmore] = useState()
    
    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movie)
  return (
      <header className='banner' style={{
          backgroundSize:"cover",
          backgroundImage: `url("https://media.wired.co.uk/photos/606d9b84751ea43ccd9886ea/16:9/w_3024,h_1701,c_limit/ac4.jpg/${movie?.backdrop_path}")`,
          backgroundPosition:"center center"}}>
          <div className='banner__contents'>
              <h1 className='banner__title'>{ movie?.title|| movie?.name || movie?.original_name}</h1>
              <div className='banner__buttons'>
                  <button className='banner__button'>Play</button>
                  <button className='banner__button'>My List</button>
              </div>
              {/* <h1 className='banner__description'>{ readmore?.info:`${info.subString(0,150)}`...}<button onClick={()=>setReadMore(!readmore)}></button></h1> */}
          </div>
          <div className='banner__fadeBottom'></div>
          </header>
  )
}

export default Banner