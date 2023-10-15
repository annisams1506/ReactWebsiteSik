import React from "react";
import annisa from './../IMG/annisa.jpg';

const TestimoniMahasiswa = () => {
  return (
    <div className="bg-gray-100 p-8">
         <p className="text-xl font-bold mb-4">
          Testimoni Mahasiswa
        </p>
      <div className="max-w-2xl mx-auto bg-white rounded p-6 shadow-md">
       
        <p className=" mb-4 text-black font-semibold">
          Saya sangat senang dan sangat suka masuk jurusan Sistemm Informasi Kelautan.
          Saya suka ngoding dan renang. Setelah saya masuk sik saya jadi bisa berenang meskipun belum jago
          Walau serang alias tempat kuliahnya panas saya tetap suka berada dijurusan ini!!
        </p>
        <div class="logo">
                    <img src={annisa} alt="Logo 1" className="border-1 border-black rounded-full h-auto w-10 mx-2"/> <span className=" text-xs text-slate-500 text-center">Annisa Maulana Sabilla <br></br>Mahasiswa Angkatan 2022</span>
                </div>
      </div>
    </div>
  );
};

export default TestimoniMahasiswa;
