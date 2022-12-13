import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url='baseURL:"https://api.themoviedb.org/3/movie/550?",'
    
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        } 
        fetchData()
    }, [fetchUrl]);
  return (
      <div>
          <h2 className='row'>{title}</h2>
          <div className='row__posters'>
               {movies.map(movie =>(isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path && (
                   <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                       key={movie.id} src={`${base_url}${isLargeRow ?
                           movie.poster_path : movie.backdrop_path}`} alt={movie.name} />)
          ))}
          </div>
    </div>
  )
}

export default Row