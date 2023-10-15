import React from "react";
import annisa from './../IMG/annisa.jpg';

function Header (){
    return(
        <div className="Header">
            <nav className="bg-sky-950">
                <div className="container mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <span className="text-white text-md mr-6 font-semibold">(0254) 2002777</span>
                        <span className="text-white text-md font-semibold">sik_kdserang@upi.edu</span>
                    </div>
                    <div className="flex items-center">
                        <p className="h-8 mx-2">©Annisa Maulana Sabilla</p>
                        <p className="h-8 mx-2">2023</p>
                        <img src= {annisa} alt="" className="h-8 mx-2"></img>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;