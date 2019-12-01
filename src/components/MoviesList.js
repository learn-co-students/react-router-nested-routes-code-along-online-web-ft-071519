import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({movies}) => {
    console.log(Object.keys(movies))
    console.log(movies)
    const renderMovies = Object.keys(movies).map(movieID => 
        <li key={movieID}><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
        );
       
        return (
          <div>
            <ul>
            {renderMovies}
            </ul>
          </div>
        );
    };
       
export default MoviesList;