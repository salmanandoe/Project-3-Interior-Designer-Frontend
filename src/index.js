import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/stylesheet.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>
);