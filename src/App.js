import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Home from './routes/home/Home';
import Music from './routes/music/Music';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='music' element={<Music />} />
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
