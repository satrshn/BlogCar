import React from 'react';

export default function Help() {
  return (
    <section>
        <h3 class="text-center py-5 mb-4 pb-2 text-primary fw-bold">Pusat Bantuan</h3>
        <p class="text-center mb-5">
        Temukan jawaban untuk pertanyaan yang paling sering diajukan di bawah ini.
        </p>
    <div className="container py-5 mb-5">
        <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
                <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i>Bagaimana cara membeli di BlogCar</h6>
                <p>
                <strong>Gampang!</strong> Buka menu produk, lalu pilih mobil yang anda inginkan dari katalog dan hubungi kami via Whatsapp
                tinggal tunggu balasan lalu diproses.
                </p>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i> Informasi Hukum dan Privasi</h6>
            <p>
                <strong>Aman!</strong> Tentunya berberlanja di website kami dijamin aman dan terlindungi. Data anda aman dan tidak
                kami bagikan kepada pihak manapun.
            </p>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i> Pengaturan Akun dan Profil</h6>
            <p>
                Anda bisa Login dan Registrasi apabila belum memiliki akun. Pengguna yang memiliki akun akan merasakan fitur-fitur
                yang disediakan di website kami.
            </p>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i> Bagaimana cara pemasangan iklan</h6>
            <p>
                Untuk pemasangan iklan anda bisa menghubungi kami via email atau Whatsapp yang tertera di halaman About.
            </p>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i> Panduan Keamanan</h6>
            <p><strong><u>Klik</u></strong> untuk membaca Panduan Keamanan selengkapnya.</p>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="text-primary pe-2"></i> Metode Pembayaran</h6>
            <p>
                Kami menyediakan segala macam metode pembayaran yang pastinya mudah dan menguntungkan bagi anda.
            </p>
        </div>
    </div>
    </div>
    </section>
  );
}
