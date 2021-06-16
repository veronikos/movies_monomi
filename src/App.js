import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
