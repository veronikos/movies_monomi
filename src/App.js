import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detailed } from "./components/Detailed.tsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>{" "}
      <Switch>
        <Route path="/" exact>
          <div className="content">
            <Content></Content>
          </div>
        </Route>
        <Route path="/:slug" children={<Detailed title="Film" paragraph="6"/>} />
      </Switch>
    </Router>
  );
}

export default App;
