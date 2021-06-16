import './App.css';
import { Header } from './components/Header';
// import { MoviesList } from './components/MoviesList';
import { Content } from './components/Content';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Content></Content>
        {/* <MoviesList></MoviesList> */}
      </div>
    </div>
  );
}

export default App;
