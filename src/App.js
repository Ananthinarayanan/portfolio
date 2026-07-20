import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <HashRouter>
        <Navbarport />
        <Routes>
          <Route path="/" element={<Firstpg />} />
          <Route path="/a" element={<Aboutport />} />
          <Route path="/b" element={<Skillport />} />
          <Route path="/c" element={<Education />} />
          <Route path="/certificate" element={<Cert />} />
          <Route path="/d" element={<Contactport />} />
        </Routes>
      </HashRouter>
    </div>
  );
}