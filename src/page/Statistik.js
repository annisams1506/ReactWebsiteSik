import React from "react";

const Statistik = () => {
    return (
        <main className="pt-[10px] bg-black">
            <div className="relative w-full h-[280px] mb-6 mt-10 shadow-3xl flex justify-around items-center text-2xl">
            <p className=" border-b-8 border-white pb-3 font-extrabold mt-6 text-3xl ml-10 text-yellow-700">Statistik</p>
                {/*  1 */}
                <div class="">
                    <p className="font-bold text-white  text-center">180<br></br><span className="font-semibold text-center">Mahasiswa</span></p>
                </div>

                {/*  2 */}
                <div class=""> <p className="font-bold text-white  text-center">15<br></br><span className="font-semibold text-center">Alummni</span></p>
             
                </div>

                {/*  3 */}
                <div class="">
                <p className="font-bold text-white  text-center">46<br></br><span className="font-semibold text-center">Mahasiswa MBKM</span></p>
             
                </div>

                {/*  4 */}
                <div class=""> <p className="font-bold text-white  text-center">139<br></br><span className="font-semibold text-center">Jumlah Mata Kuliah</span></p>
             
                </div>

                {/*  5 */}
                <div class=""> <p className="font-bold text-white  text-center">7<br></br><span className="font-semibold text-center">Jumlah Dosen</span></p>
             
               </div> 
            </div>
        </main>
    );
};

export default Statistik;
