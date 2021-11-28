import React from 'react';
import Topbar from './Components/Topbar/Topbar';
import About from './Menu/About/About';
import Produk from './Menu/Produk/Produk';
import Home from './Menu/Home/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Topbar />
      <Home />
      <Produk />
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes> */}
    </>
  );
}
