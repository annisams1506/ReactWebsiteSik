    import React from "react";

    const Aside = () => {
    return (
        <main className="pt-[50px] bg-white">
        <div className="relative w-full h-[400px] mb-6 mt-10 shadow-3xl flex">
            <div className='absolute brightness-[.35] bg-coral2 bg-fixed w-full h-[400px]'></div>
            <div className="ml-10 w-1/3 relative">
            <h1 className="translate-y-[-30%] text-xl text-sky-950 font-bold pl-4">SISTEM INFORMASI<span className="w-6 mx-2 border-t-2 border-black mr-4"></span>KELAUTAN</h1>
            
            {/* Konten YouTube */}
            <iframe
                width="350"
                height="350"
                src="https://www.youtube.com/embed/uSpL9GR0QaI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            
            </div>
<div className="ml-20 mt-12 mr-56 w-2/3">
    <p className="text-semibold text-justify ">Program Studi Sistem Informasi Sistem Kelautan merupakan bagian dari Ilmu Kelautan
         yang fokus pada analisis data kelautan baik numerik maupun spasial untuk kemudian
          diintegrasikan berbasis sistem informasi yang dikembangkan sebagai dasar pengambilan keputusan.</p>
</div>
<div className="w-2/4">
  {/* Daftar Tautan */}
  <div className="ml-1 mr-20">
    <p className="border-b-8 font-bold text-xl pb-5">Tautan Cepat</p>
    <p className="border-b-4 border-black pb-3">Kampus UPI Serang</p>
    <p className="border-b-4 border-black pb-3">Leaflet SIK [2019]</p>
    <p className="border-b-4 border-black pb-3">Company Profile</p>
    <p className="border-b-4 border-black pb-3">Jurnal</p>
    <p className="border-b-4 border-black pb-3">Sistem Informasi Akademik</p>
    <p className="border-b-4 border-black pb-3">Pilmapres SIK [2021]</p>
    <p className="border-b-4 border-black pb-3">Video Company Profile [2021]</p>
    <p className="border-b-4 border-black pb-3">Info Beasiswa</p>
  </div>
</div>

        </div>
        </main>
    );
    };

    export default Aside;
