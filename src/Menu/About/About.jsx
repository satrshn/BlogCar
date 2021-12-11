import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container-fluid ml-3 py-3 d-inline-block justify-content-center">
      <div className="card-body bg-light">
        <div className="row">
          <div className="col">
            <img src="images/objek1.png" className="img-fluid rounded-start h-200" alt="pajero" height="1080px" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <h5 className="card-title display-3 fw-bolder mb-0">BlogCar</h5>
              <p className="card-text lead fs-2">Your Penjual Mobil Choice</p>
              <p className>
                Halo, kami adalah sebuah start-up yang bergerak untuk membantu anda dalam mencari mobil impian anda, <b>mau bentuk apapun itu anda dapat mencari-nya di sini</b>
              </p>
            </div>
            <div class="d-grid gap-2">
              <Link to="/">
                <button class="btn btn-outline-dark fw-bolder p-3 w-100" type="button">
                  Lihat produk selengkapnya di sini!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
