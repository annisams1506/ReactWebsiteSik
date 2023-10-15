import React from "react";

const Akademik = () => {

  return (

    


   
    <div
      className="relative w-full pt-10 h-[450px] mb-4 mt-10 shadow-3xl flex"
        >
      <div className="absolute  brightness-[.35]  bg-diving  bg-fixed w-full h-[450px]"> 
      <p className="border-b-8 border-white pb-3 font-extrabold mt-6 text-3xl ml-10 text-yellow-700">Akademik</p>
      </div>
   

      <div className="relative w-full h-[280px] mb-6 mt-10 shadow-3xl flex justify-around items-center text-2xal">
                
                {/*  1 */}
                <div class="w-1/4" >
                    <p className="font-bold text-white  text-center">SIAK<br></br><span className="font-semibold text-center">Portal SIAK Mahasiswa UPI Terintegrasi ini merupakan layanan akademik untuk mahasiswa UPI yang memuat seluruh aktifitas utama administrasi akademik.</span></p>
                </div>

                {/*  2 */}
                <div class="w-2/6"> <p className="font-bold text-white  text-center">SPOT<br></br><span className="font-semibold text-center">Program aplikasi pembelajaran berbasis online bagi dosen dan mahasiswa UPI.</span></p>
             
                </div>

                {/*  3 */}
                <div class="w-2/6">
                <p className="font-bold text-white  text-center">Kurikulum<br></br><span className="font-semibold text-center">Program Studi Sistem Informasi Kelautan merupakan bagian dari Ilmu Kelautan yang berfokus pada analisis data kelautan
baik numerik maupun spasial.</span></p>
             
                </div>

              
            </div>
      
      
    </div>
  );
};

export default Akademik;
