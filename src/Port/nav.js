import './nav.css';
import { Link } from 'react-router-dom';

export default function Navbarport() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/a">About</Link>
        <Link to="/b">Skills</Link>
        <Link to="/c">Education</Link>
        <Link to="/d">Contact</Link>
      </div>
    </nav>
  );
}