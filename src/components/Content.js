import axios from "axios";
import React from "react";

export class Content extends React.Component {
  state = {
    movies: [],
    search: '',
  };

  componentDidMount() {
    axios
      .get(`https://wookie.codesubmit.io/movies`, {
        headers: { Authorization: `Bearer Wookie2021` },
      })
      .then((res) => {
        const movies = res.data.movies;
        this.setState({ movies });
        console.log(movies);
      });
  }

  handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    this.setState({
      search: e.target.value,
      movies: this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue)
      ),
    });
  };

  render() {
    // this.state.movies.forEach((movie) => console.log(movie.genres));

    return (
      <div>
        <input
          type="text"
          placeholder="Search films..."
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        {this.state.movies.map((movie) => (
          <div className="img__wrap" key={movie.id}>
            <img
              className="photoMovie"
              src={movie.backdrop}
              alt={movie.title}
            />
            <div className="img__description_layer">
              <p className="img__description">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
