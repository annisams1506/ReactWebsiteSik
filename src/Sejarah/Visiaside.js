import React from "react";
import Gambar from "./upi.jpg";

const Visiside = () => {
  return (
    <main className="pt-10 bg-white  w-full   h-[800px] ">
      <div className="flex items-center justify-center">
        <div className=" w-96 h-1/2 ml-20 bg-blue-800">
          <img src={Gambar} alt="Deskripsi Gambar" className=" w-96 h-1/2 " />
        </div>
        <div className=" w-96  h-1/2 p-4 bg-blue-950">
            
          <h2 className="text-2xl text-sky-500 font-semibold mb-4">
            Program Studi Sistem Informasi Kelautan
          </h2>
          <h3 className="font-semibold text-white">Visi</h3>
          <p>
            Mengembangkan dan mengimplementasikan sistem informasi untuk
            mendukung perkembangan teknologi pada bidang kelautan dan
            menghasilkan lulusan yang berdayasaing serta ahli dalam pengolahan
            data numerik maupun spatial.
          </p>
          <h3 className="font-semibold text-white mt-4">Misi<br></br><br></br></h3>
          <ol className="list-decimal list-inside  text-sm">
            <li>
              Menyelenggarakan layanan pendidikan dan pengajaran berstandar
              nasional bidang keahlian sistem informasi kelautan,<br></br><br></br>
            </li>
            <li>
              Melaksanakan penelitian di bidang sistem informasi kelautan dan
              inovasinya dalam upaya mengembangkan potensi sumberdaya hayati
              pesisir dan laut di daerah dan nasional,<br></br> <br></br>
            </li>
            <li>
              Menerapkan teknologi informasi kelautan yang terpadu, produktif
              dan terukur dalam pendidikan, penelitian, dan pengabdian serta
              pemberdayaan kepada masyarakat berbasis hasil penelitian.<br></br> <br></br>
            </li>
            <li>
              Mengembangkan dan menyebarluaskan keilmuan dan teknologi bidang
              kelautan yang berbasis pada kebutuhan masyarakat dan industri.
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Visiside;
