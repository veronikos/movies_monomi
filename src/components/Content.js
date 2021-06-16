import axios from 'axios';

import React from 'react';

export class Content extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`https://wookie.codesubmit.io/movies`, { headers: {"Authorization" : `Bearer Wookie2021`} })
      .then(res => {
        const movies = res.data.movies;
        this.setState({ movies });
        console.log(movies[0])
      })
  }

  render() {
    return (
        <div>
            {/* {this.state.movies.map(movie => <li>{movie.title}</li>)} */}
        {this.state.movies.map(movie => <img className="photoMovie" src={movie.backdrop} alt={movie.title}/>)}
        </div>
    )
  }
}