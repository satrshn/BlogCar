import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import About from './Menu/About/About';
import Produk from './Menu/Produk/Produk';
import Home from './Menu/Home/Home';
import Help from './Menu/Help/Help';
import Login from './Components/Login/Login';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}