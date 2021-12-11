import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          BlogCar
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item fw-bold text-dark ms-2">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item fw-bold text-dark ms-2">
              <Link className="nav-link" to="/produk">
                Produk
              </Link>
            </li>
            <li className="nav-item fw-bold text-dark ms-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item fw-bold text-dark ms-2">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark">
              <i className="fa fa-login">Login</i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
