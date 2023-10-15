import React from "react";
import penerimaan from './pmb.jpg';

const Pmb = () => {
    return (
        <div className="relative w-full pt-10 h-[500px] mb-6 mt-10 shadow-3xl flex" >
            <div className="absolute  brightness-[.35]  bg-bgupi bg-fixed w-full h-[500px]"></div>
            <div className="ml-24  mt-24 mb-20   relative w-full flex justify-around items-center ">
                <div className="fotopmb">
                    <img src={penerimaan} alt="Logo 1" className="border-1 border-black rounded h-auto w-11/12  mx-auto" />
                </div>
                <div className="ml-20  mr-20 w-2/4">
                    <p className="font-bold text-xl text-white text-center">
                        Penerimaan Mahasiswa Baru<br></br><span className="font-semibold justify-center text-lg"> Universitas Pendidikan Indonesia (UPI) sebagai salah satu Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH) di Indonesia merupakan universitas dengan jati diri kependidikan. Sebagai PTN maka penerimaan mahasiswa baru setiap tahunnya melalui jalur Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN), Seleksi Bersama Masuk Perguruan Tinggi Negeri (SBMPTN), Seleksi Mandiri, dan Prestasi Istimewa.

                        </span>   </p>
                </div>
            </div>
        </div>
    );
};

export default Pmb;
