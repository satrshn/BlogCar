import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 bg-dark">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">BlogCar</h5>
            <p className="small text-muted">Copyright 2021 by Kelompok Desain Web 6.</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted text-decoration-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Social Media</h5>
            <li><a href="#"><i class="fa fa-facebook"><j class="text-blue"> Facebook</j></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"><j class="text-blue"> Twitter</j></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"><j class="text-blue"> Instagram</j></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"><j class="text-blue"> Youtube</j></i></a></li>
          </div>
        </div>
      </div>
    </footer>
  );
}