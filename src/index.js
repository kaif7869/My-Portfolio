import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Contact />
  </React.StrictMode>
);


