import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
      <Navbarport/>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Firstpg/>}></Route>
       <Route path='/a' element={<Aboutport/>}></Route>
       <Route path='/b' element={<Skillport/>}></Route>
       <Route path='/c' element={<Education/>}></Route>
        <Route path="/certificate" element={<Cert />} />
       <Route path='/d' element={<Contactport/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
