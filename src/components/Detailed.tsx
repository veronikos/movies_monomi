import React from "react"; // we need this to make JSX compile
import { useParams } from "react-router-dom";

type DetailsProps = {
  title: string;
  movies: any;
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
};

export function Detailed({ movies }: DetailsProps) {
  let { slug }: DetailsProps = useParams();
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    if (movie.slug === slug) {
      return (
        <aside>
          <h2> {movie.title} </h2>{" "}
          <div>
            <h3>ID: {slug}</h3>
            <div>
              <p>{movie.title}</p>
            </div>
          </div>{" "}
        </aside>
      );
    }
  }
}
