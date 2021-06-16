import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <MoviesList></MoviesList>
      </div>
    </div>
  );
}

export default App;
