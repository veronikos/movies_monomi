import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export class Content extends React.Component {
  state = {
    movies: [],
    search: "",
  };

  componentDidMount() {
    axios
      .get(`https://wookie.codesubmit.io/movies`, {
        headers: { Authorization: `Bearer Wookie2021` },
      })
      .then((res) => {
        const movies = res.data.movies;
        this.setState({ movies });
        this.props.getmovies(movies)
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
    return (
      <div>
        {" "}
        <input
          type="text"
          placeholder="Search films..."
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        <div>
          {this.state.movies.map((movie) => (
            <div className="img__wrap" key={movie.id}>
              <Link to={movie.slug}>
                <img
                  className="photoMovie"
                  src={movie.backdrop}
                  alt={movie.title}
                />
                <div className="img__description_layer">
                  <p className="img__description">{movie.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


