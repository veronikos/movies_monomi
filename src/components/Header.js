import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="Header">
      <div className="blueLine">
        <div className="square"></div>
        <div className="square yellowSquare"></div>
        <div className="square greenSquare"></div>
      </div>
      <header className="App-header">
        <div className="logo">
          <Link to="/" className="logo_homepage_link">
            <div>WOOKIE</div>
            <div>MOVIES</div>
          </Link>
        </div>
        <div className="inputHolder">
          <input></input>
        </div>
      </header>
    </div>
  );
}
