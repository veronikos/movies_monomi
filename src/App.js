import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detailed } from "./components/Detailed.tsx";
import { useState } from "react";

function App() {
  const [movies, setmovies] = useState('')

  function getmovies(movies) {
    setmovies(movies)
  }

  return (
    <Router>
      <div className="App">
        <Header></Header>
      <Switch>
        <Route path="/" exact>
          <div className="content">
            <Content getmovies={getmovies}></Content>
          </div>
        </Route>
        <Route path="/movies_monomi">
          <div className="content">
            <Content getmovies={getmovies}></Content>
          </div>
        </Route>
        <Route path="/:slug" children={<Detailed movies={movies}/>} />
        {console.log("movies:", movies)}
      </Switch>
      </div>{" "}
    </Router>
  );
}

export default App;