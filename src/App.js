import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>

<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      <div className="App">
        <Header></Header>
        {/* <div className="content">
          <Content></Content>
        </div> */}
      </div>


      {/* <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
          <div>Users</div>
          </Route>
          <Route path="/">
          <div>Home</div>
          </Route>
        </Switch> */}
         <Switch>
          <Route path="/about">
            <About />
            <div className="content">
          <Content></Content>
        </div>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}