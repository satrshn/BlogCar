import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div class="card bg-dark text-black fw-bold border-0">
        <img src="images/bg.jpg" class="card-img" alt="latar" height="1080px" />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">BlogCar</h5>
            <p class="card-text lead fs-2">Your Penjual Mobil Choice</p>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">
          Mobil Populer Berdasarkan Tipe Body
            <hr />
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2">SUV</button>
            <button className="btn btn-outline-dark me-2">MPV</button>
            <button className="btn btn-outline-dark me-2">Coupe</button>
            <button className="btn btn-outline-dark me-2">Sedan</button>
            <button className="btn btn-outline-dark me-2">Hatchback</button>
            <button className="btn btn-outline-dark me-2">Crossover</button>
            <button className="btn btn-outline-dark me-2">Minivans</button>
            <button className="btn btn-outline-dark me-2">Van</button>
            <button className="btn btn-outline-dark me-2">Wagon</button>
            <button className="btn btn-outline-dark me-2">Station Wagon</button>
          </div>
          <div className="container py-3">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                Mobil Pilihan Terbaik
              </h1>
            </div>
          </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="https://static.carmudi.co.id/CDy1j15Yq3-agSZeK93EDyqySao=/285x175/https://trenotomotif.com/ncs/images/Hyundai/New-Santa-Fe-2021/New-santa-fe-2021.jpg" class="img-fluid rounded-start" alt="pajero" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Hyundai Santa FE</h5>
                <p class="card-text">Rp569 - 729 Juta | Transmisi Otomatis | Bahan Bakar Bensin | Mesin 2497 cc | 7 Tempat Duduk</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="https://static.carmudi.co.id/th8xkSolZEf1mCUWJN4vqZVpsxo=/285x175/http://trenotomotif.com/ncs/images/Mercedes-Benz/A200ProgressiveLineCKD/Mercedes-Benz-A-200-Progressive-Line.jpg" class="img-fluid rounded-start" alt="pajero" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Mercedes Benz A 200</h5>
                <p class="card-text">Rp699 - 820 Juta | Transmisi Otomatis | Bahan Bakar Bensin | Mesin 1332 cc | 5 Tempat Duduk</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="https://static.carmudi.co.id/cCf08Gc11U38SD2bdmuJ_1tSSfY=/285x175/http://trenotomotif.com/ncs/images/Mercedes-Benz/Sprinter/Mercedes-Benz-Sprinter.jpg" class="img-fluid rounded-start" alt="pajero" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Mercedes Benz Sprinter</h5>
                <p class="card-text">Rp1.03 Milyar | Transmisi Manual | Bahan Bakar Diesel | Mesin 2143 cc | 7 Tempat Duduk</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 justify-content-center">
        <Link to="/produk"><button class="btn btn-outline-dark fw-bolder" type="button">
            Lihat produk selengkapnya di sini!
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}