import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbarport from './Port/nav';
import Firstpg from './Port/firstpg';
import Aboutport from './Port/about';
import Contactport from './Port/contact';
import Education from './Port/education';
import Cert from './Port/cert';
import Skillport from './Port/skill';

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

export default App;