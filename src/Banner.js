import React, { useEffect, useState } from "react";
import axios from './axios'
import './Banner.css';
import requests from './requests';

const Banner = () => {
    const [ movie, setMovie ] = useState([]);

   
        useEffect(() => {
      async function fetchData() {
            const res = await axios.get(requests.fetchOriginals)
            setMovie(
                res.data.results[
                    Math.floor(Math.random() * res.data.results.length)
                ]
            );
             return res;
            }
            fetchData()
        },[]);
        
        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + "..." : str;
          }



    return ( 
        <div className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: "center",
            }}
            >
            <h1 className="banner_name">
                {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className="buttons">
            <button>Play</button>
            <button>My List</button>
            </div>
            <p> {truncate(movie?.overview, 200)}
            </p>
            <div className="banner_fade"></div>
        </div>
     );
}
 
export default Banner;