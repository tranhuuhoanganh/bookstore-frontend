import React from 'react';
import './App.css';
import Navbar from "./layouts/Navbar";
import Footer from './layouts/Footer';
import HomePage from './layouts/HomePage/HomePage';
import { getSach } from './api/SachApi';

function App() {
  getSach().then().catch();
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
