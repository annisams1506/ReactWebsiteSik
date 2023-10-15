import React from "react";
import { Link } from "react-router-dom";
import logoupi from "./logoupi.png";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="h-15 py-2 bg-white w-full flex items-center top-2px">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="">
              <img src={logoupi} alt="Logo" className="h-30 w-auto" />
            </div>

            <div className="hidden md:block">
              <ul className="flex flex-col w-full space-y-5  lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-20">
                <li>
                  <Link to="/beranda" className="flex px-6 py-2 font-medium text-blue-950 rounded-md  hover:text-yellow-400">Beranda</Link>
                </li>

                <li className="flex px-6 py-2 font-medium text-blue-950 rounded-md  hover:text-yellow-400 relative group"> 
                  <Link to="/profile" className="cursor-pointer">Profile</Link>

                  <ul className="absolute bg-white  top-10 left-0 rounded-md hidden group-hover:block w-full z-50">
                    <li className="px-1 py-1">
                      <Link to="/sejarah" className="flex p-1 text-blue-950 rounded-md  hover:bg-slate-500 hover:text-white">Sejarah</Link>
                    </li>
                    <li className="px-1 py-1">
                      <Link to="/visimisi" className="flex p-1 text-blue-950 rounded-md hover:bg-slate-500  hover:text-white">Visi Misi</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/faq" className="flex px-6 py-2 font-medium text-blue-950 rounded-md   hover:text-yellow-400">FAQ</Link>
                </li>
                <li>
                  <Link to="/tempat" className="flex px-6 py-2 font-medium text-blue-950 rounded-md  hover:text-yellow-400">Fasilitas</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
