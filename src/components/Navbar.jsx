import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="nav-brand">
            <Link to="/">CineVerse</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
            <Link to="/about" className="nav-link">About</Link>
        </div>
    </nav>
  );
}

export default NavBar;