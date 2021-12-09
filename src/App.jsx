import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import About from './Menu/About/About';
import Produk from './Menu/Produk/Produk';
import Home from './Menu/Home/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Topbar />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
