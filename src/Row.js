import axios from './axios';
import { useEffect, useState } from 'react';
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/w300"

const Row = ( {title, fetchUrl} ) => {
   const [movies, setMovies] = useState([])

   useEffect(() => {
       async function fetchMovie(){
           const response = await axios.get(fetchUrl)
           setMovies(response.data.results);
           return response;
       }
       console.log(movies)
       fetchMovie();
   }, [fetchUrl])


    return ( 
        <div className="row_container">

            <div className="row_item"><h3> {title} </h3></div>
            <div className="posters">
                {movies.map(movie => (
                    <img src={`${base_url}${movie?.backdrop_path}`} alt="" />
                ))}
            </div>
            
            
            
            
        </div>
     );
}
 
export default Row;