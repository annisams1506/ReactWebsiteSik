import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import History from './components/History';
import Beranda from './components/Beranda';
import Misi from './components/Misi';
import Tempat from './components/Tempat';
import Faq from './components/Faq';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar /> 
        <Routes>
        <Route path="/" element={<Beranda/>}/>
          <Route path="/beranda" element={<Beranda/>}/>
          <Route path="/sejarah" element={<History />} />
          <Route path="/visimisi" element={<Misi />} />
          <Route path="/tempat" element={<Tempat />} />
          <Route path="/faq" element={<Faq />} />
       </Routes>
     
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
