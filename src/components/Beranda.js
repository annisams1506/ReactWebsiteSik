import React from "react";
import Slideshow from "./Slideshow";
import Aside from "./Aside";
import Pmb from "../page/Pmb";
import Berita from "../page/Berita";
import Akademik from "../page/Akademik";
import Statistik from "../page/Statistik";
import TestimoniMahasiswa from "../page/TestimoniMahasiswa";

const Beranda  = () => {
    return(
        <div className="">
        <Slideshow/>
        <Aside/>
        <Pmb/>
        <Berita/>
        <Akademik/>
        <Statistik/>
        <TestimoniMahasiswa/>
        </div>
    );
       
    };
    export default Beranda;