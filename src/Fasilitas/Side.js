import React from "react";
import biru  from './biru.jpg';
import gedung from './gedung.jpg';
import kantin from './kantin.jpg';
import labo from './labo.jpg';
import lapangan from './lapangan.jpg';
import taman from './taman.jpg';

const Side = () => {
  const images = [
    {
      url: biru,
      caption: "Lab Komputer",
    },
    {
      url:gedung,
      caption: "Gedung Kelas",
    },
    {
      url:kantin,
      caption: "Kantin",
    },
    {
      url:labo,
      caption: "Labotarium",
    },
    {
      url:lapangan,
      caption: "Lapangan",
    },
    {
      url:taman,
      caption: "Taman",
    },
  ];

  return (
    <div className="relative w-full h-[1100px] mb-6 mt-16 shadow-3xl ">
          <h1 className="text-sky-950 font-bold text-2xl ml-16">Fasilitas Prodi Sistem Informasi Kelautan</h1>
          <h2 className="text-yellow-700 font-serif text-lg ml-16 mr-16">Sistem Informasi Kelautan (SIK) terus meningkatkan administrasi dan pelayanan kepada
           mahasiswa. Peningkatan pelayanan kepada mahasiswa bertujuan untuk memperlancar kegiatan belajar mengajar dan kehidupan sosial mahasiswa di
            lingkungan kampus. Lingkungan kehidupan kampus ini diharapkan 
          mampu membantu menghasilkan mahasiswa yang cakap secara teknis, terampil, dan berwawasan humanis.</h2>

    <div className="flex flex-wrap justify-center  gap-56  mt-24">
        
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <img src={image.url} alt={image.caption} className="w-64 h-64" />
          <p className="text-sm font-semibold mt-2">{image.caption}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Side;
