import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export function MoviesList() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wookie.codesubmit.io/movies`, {
        headers: { Authorization: `Bearer Wookie2021` },
      })
      .then((resp) => {
        const allMovies = resp.data.movies;
        setmovies(allMovies);
      });
  }, [setmovies]);

  console.log(movies)
  console.log(movies.map((movie) => movie.genres));

  return (
    <div>
      {movies.map((movie) => (
        <div className="img__wrap" key={movie.id}>
          <img className="photoMovie" src={movie.backdrop} alt={movie.title} />
          <div className="img__description_layer">
            <p className="img__description">{movie.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
