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
      </div>
    </>
  );
}
