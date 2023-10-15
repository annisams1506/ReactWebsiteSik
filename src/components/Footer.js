import React from "react";
import logoupi from './logoupi.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex-1">
          <div className="flex items-center">
            <img src={logoupi} alt="Logo" className="h-8 w-8 mr-2" />
            </div>
            <span className="text-lg font-bold">Kontak</span>
          
          <p>(0254) 200277</p>
          <p>sik_kdserang@upi.edu</p>
          <p>Jl. Ciracas No.38, Serang, Kec. Serang, Kota Serang, Banten 42116</p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a href="[URL_LINK_1]" className="hover:text-white">SIAK UPI</a>
            <a href="[URL_LINK_2]" className="hover:text-white">SIAS UPI</a>
            <a href="[URL_LINK_3]" className="hover:text-white">SPOT UPI</a>
            <a href="[URL_LINK_4]" className="hover:text-white">UPI Bandung</a>
            <a href="[URL_LINK_5]" className="hover:text-white">Kampus UPI Serang</a>
            <a href="[URL_LINK_6]" className="hover:text-white">Portal Sistem Informasi UPI</a>
          </div>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.090052996548!2d106.14800911476968!3d-6.116194395579204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f23d69c62f57%3A0x120758a277ba0e9a!2sJl.%20Ciracas%2C%20Serang%2C%20Kec.%20Serang%2C%20Kota%20Serang%2C%20Banten!5e0!3m2!1sen!2sid!4v1634483351491!5m2!1sen!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <p className="text-center">Hubungi Kami</p>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Nama"
            className="w-full bg-gray-700 text-white p-2 mb-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-700 text-white p-2 mb-2 rounded"
          />
          <textarea
            placeholder="Pesan"
            className="w-full bg-gray-700 text-white p-2 mb-2 rounded"
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Kirim
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
