import React from "react";
import foto from './bgupi.jpg';

const Side1 = () => {
return (
    <main className="pt-[50px] bg-white">
    <div className="relative w-full h-[1300px] mb-6 mt-20 shadow-3xl flex">
        <div className='absolute brightness-[.35] bg-coral2 bg-fixed w-full h-[400px]'></div>
        <div className="ml-10 w-4/6 relative">
        <h2 className="translate-y-[-30%] text-lg text-yellow-500 font-semibold font-mono pl-4">
        Program Studi Sistem Informasi Sistem Kelautan merupakan bagian dari Ilmu Kelautan yang fokus pada analisis data kelautan baik numerik 
        maupun spasial untuk kemudian diintegrasikan berbasis sistem informasi yang dikembangkan sebagai dasar pengambilan keputusan. <br></br> 
        <span className="text-sm text-slate-500">Bidang kajian dari prodi SIK terdiri dari Ilmu Kelautan, Ilmu Perikanan, Sistem Informasi, Sistem Informasi Geografis, serta Penginderaan Jauh Keluatan dan Ilmu Kelautan. 
        Pembelajaran di SIK selain dilaksanakan di ruang kelas juga dilaksanakan di laboratorium, e-learning, field study ke pesisir dan laut.</span> </h2>
        
        
        <img
            src={foto}
            alt="Pendirian Prodi S1 Sistem Informasi Kelautan yaitu pada tanggal 1 bulan februari tahun 2019, dan SK Prodi UPI BHMN yaitu nomor 4090/UN40/HK/2019. Prodi Sistem Informasi Kelautan(SIK) dibangun oleh pimpinan dan dosen Kampus UPI di Serang yang ditugaskan untuk membuat proposal pendirian. Unsur pimpinan adalah Drs. Herli Salim, M.Ed., Ph. D Sebagai Direktur Kampus UPI di Serang dan Dr Encep Supriatna sebagai wakil Direktur sedangkan dari unsur dosen adalah Ferry Dwi Cahyadi, S.Pd., M.Sc, Kukuh Widiyanto, S.Pd., M. Sc dan Novi Sofia Fitriasari, M.T.

            Program Studi Sistem Informasi Kelautan Kampus UPI di Serang yang berdiri pada tahun 2019 merupakan program studi non pendidikan pertama yang ada di Kampus UPI di Serang dan merupakan prodi satu-satunya di Indonesia yang memiliki nama Sistem Informasi Kelautan, hal ini tentunya memberikan tantangan tersendiri untuk mengenalkan program studi di tingkat lokal, nasional dan internasional. Berdirinya program studi ini didasari oleh keinginan untuk mendukung pemerintah di dalam membangun Indonesia menuju Poros Maritim Dunia dengan memanfaatkan kemajuan sistem informasi di era revolusi industri 4.0.
            
            "
            className="   mx-52 mt-5 justify-center "
          />
          <div className=" ml-52 w-full mt-10 mr-5 text-justify ">
            <p className="text-xl font-sans text-black ">
            Pendirian Prodi S1 Sistem Informasi Kelautan yaitu pada tanggal 1 bulan februari tahun 2019, dan SK Prodi UPI BHMN yaitu nomor 4090/UN40/HK/2019. Prodi Sistem Informasi Kelautan(SIK) dibangun oleh pimpinan dan dosen Kampus UPI di Serang yang ditugaskan untuk membuat proposal pendirian. Unsur pimpinan adalah Drs. Herli Salim, M.Ed., Ph. D Sebagai Direktur Kampus UPI di Serang dan Dr Encep Supriatna sebagai wakil Direktur sedangkan dari
             unsur dosen adalah Ferry Dwi Cahyadi, S.Pd., M.Sc, Kukuh Widiyanto, S.Pd., M. Sc dan Novi Sofia Fitriasari, M.T.<br></br> <br></br>
             Program Studi Sistem Informasi Kelautan Kampus UPI di Serang yang berdiri pada tahun 2019 merupakan program studi non pendidikan
              pertama yang ada di Kampus UPI di Serang dan merupakan prodi satu-satunya di Indonesia yang memiliki nama Sistem Informasi Kelautan, hal ini tentunya memberikan tantangan tersendiri untuk mengenalkan program studi di tingkat lokal, nasional dan internasional. Berdirinya program studi ini didasari oleh keinginan untuk mendukung pemerintah di dalam membangun Indonesia menuju Poros Maritim Dunia dengan memanfaatkan kemajuan sistem informasi di era revolusi industri 4.0.


            </p>
          </div>
       
        </div>

        <div className="w-2/4">
        {/* Daftar Tautan */}
        <div className="ml-60 mt-2 mr-20">
            <p className="font-bold">Tentang</p>
            <p className="border-b-8 border-black pb-1">Visi Misi</p>
            <p className="border-b-8 border-black pb-1">Akreditasi</p>
            <p className="border-b-8 border-black pb-1">Dosen</p>
            <p className="border-b-8 border-black pb-1" >Struktur Organisasi</p>
            <p className="border-b-8 border-black pb-1">Kurikulum</p>
        </div>
        </div>

        
 

    </div>
    </main>
);
};

export default Side1;
