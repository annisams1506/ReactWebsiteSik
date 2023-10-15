import React from "react";
import hei from './../components/image1.jpg';
const Berita = () => {
  return (
    <main className="pt-[40px]">
      <h1 className="text-sky-950 font-semibold text-2xl ml-16">Berita Terbaru</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {/* Frame 1 */}
      <div className="border rounded-lg overflow-hidden">
        <img
          src={hei}
          alt="News 1"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Registrasi Terbuka untuk INCOMA 2: Menuju Poros Maritim Dunia</h3>
          <p className="text-blue-500 mt-2" >
            Baca Selengkapnya
          </p>
        </div>
      </div>

      {/* Frame 2 */}
      <div className="border rounded-lg overflow-hidden">
        <img
        src={hei}
              alt="News 2"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Prodi Sistem Informasi Kelautan UPI Serang Membuka Penndaftaran Calon Aparatur Sipil Negara Tahun 2023</h3>
          <p  className="text-blue-500 mt-2" >
            Baca Selengkapnya
          </p>
        </div>
      </div>

      {/* Frame 3 */}
      <div className="border rounded-lg overflow-hidden">
        <img
          src={hei}
          alt="News 3"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Himataska UPI Serang: Mewujudkan Kebahagian Melalui Pengabdian di Desa Tejang, Pulau Sebesi</h3>
          <p className="text-blue-500 mt-2">
            Deskripsi singkat tentang berita ketiga.
          </p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Berita;
