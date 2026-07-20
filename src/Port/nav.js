import './nav.css';

export default function Navbarport() {

  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/a">About</a>
        <a href="/b">Skills</a>
        <a href="/c">Education</a>
        <a href="/d">Contact</a>
      </div>
    </nav>
  );
}