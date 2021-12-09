import React from 'react';

export default function Produk() {
  return (
    <>
      <div className="container my-3 py-3">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">
            Cari Kendaraan mu
            <hr />
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2">Offroad</button>
            <button className="btn btn-outline-dark me-2">4-Door</button>
            <button className="btn btn-outline-dark me-2">2-Door</button>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="images/objek1.png" class="img-fluid rounded-start" alt="pajero" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pajero ini gais</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-outline-dark fw-bolder" type="button">
            Lihat produk selengkapnya di sini!
          </button>
        </div>
      </div>
    </>
  );
}
