import { useNavigate } from 'react-router-dom';
import './home.css';


export default function Homeport() {

  const navigate=useNavigate();
  function Skills(){
    navigate('/b');
  }
  return (
    <div className="home-container fade-in">
      <h1>Hi, I'm Ananthi 👋</h1>
      <h2>Frontend Developer</h2>
      <p>Fresher passionate about React & Web Development</p>

      <button onClick={Skills}>View Skills</button>
    </div>
  );
}