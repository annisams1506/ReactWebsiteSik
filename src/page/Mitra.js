import React from "react";
import kemenag  from './kemenag.png';
import aruna from './../IMG/aruna.png';
import bmkg from './bmkg.png';
import unbaja from './unbaja.png';
import lontar from './lontar.png';
const Mitra = () => {
    return (
        <main className="pt-[50px] bg-slate-200">
            <div className="relative w-full h-[300px] mb-6 mt-10 shadow-3xl flex justify-around items-center">
                
                {/* Logo 1 */}
                <div class="logo">
                    <img src={kemenag} alt="Logo 1" className="border-1 border-black rounded-full h-auto w-36 mx-auto" /> <span className="font-bold text-black text-center">Kementrian Agama</span>
                </div>

                {/* Logo 2 */}
                <div class="logo">
                    <img src={aruna} alt="Logo 2" className="border-1 border-black rounded-full h-auto w-36 mx-auto" /> <span className="font-bold text-black text-center">Aruna</span>
                </div>

                {/* Logo 3 */}
                <div class="logo">
                    <img src={bmkg} alt="Logo 3" className="border-1 border-black rounded-full h-auto w-36 mx-auto" /> <span className="font-bold text-black text-center">BMKG</span>
                </div>

                {/* Logo 4 */}
                <div class="logo">
                    <img src={unbaja} alt="Logo 4" className="border-1 border-black rounded-full h-auto w-36 mx-auto" /> <span className="font-bold text-black text-center">Universitas Banten Jaya</span>
                </div>

                {/* Logo 5 */}
                <div class="logo">
                    <img src={lontar} alt="Logo 5" className="border-1 border-black rounded-full h-auto w-36 mx-auto" /><span className="font-bold text-black text-center">Desa Lontar</span>
                </div>
            </div>
        </main>
    );
};

export default Mitra;
