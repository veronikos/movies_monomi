import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';

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
