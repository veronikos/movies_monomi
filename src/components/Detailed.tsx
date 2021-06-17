import React from "react"; // we need this to make JSX compile
import { useParams } from "react-router-dom";

type DetailsProps = {
  title: string;
  backdrop: string;
  cast: any;
  classification: string;
  director: string;
  genres: string;
  id: string;
  imdb_rating: string;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  movies: any;
};

type necessary = {
  slug: any;
  movie: any;
  movies: any;
};

export function Detailed({ movies }: DetailsProps) {
  let { slug }: necessary = useParams();

  console.log(movies[0].slug, "from Detailed", slug, movies[0].slug === slug);

  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    if (movie.slug === slug) {
      return (
        <div className="Detailed_View">
          <img className="poster" src={movie.poster} alt={movie.title} />
          <div className="Detailed_Texts">
            <div className="Title_Stars">
              <h1>
                {movie.title} ({movie.imdb_rating}){" "}
              </h1>
              <div className="stars">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <p>
              {movie.released_on.slice(0, 4)} | {movie.length} |{" "}
              {movie.director}
            </p>
            <p>cast: {movie.cast.join(", ").toLowerCase()}</p>
            <p>Movie Description: {movie.overview}</p>
            <div></div>
          </div>
        </div>
      );
    }
  }
}
