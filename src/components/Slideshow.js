import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import image2 from './image2.jpg';
import image3 from './../Sejarah/upi.jpg';
import sik from './sik.jpg';

function Slideshow(){
  const slides = [
    {
      url: sik,
      text: "SISTEM INFORMASI KELAUTAN",
      subtext: "Universitas Pendidikan Indonesia Kampus Serang",
    },
    {
      url: image2,
      text2:"PELOPOR DAN UNGGUL",
      subtext2:"Ilmiah | Edukatif | Religius",
    },
    {
      url: image3,
      text3: "Berprestasi Dan Berinovasi di Masa Pandemi",
      subtext3:"Pandemi",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full h-[500px]  m-auto relative  '>
      <div className="absolute  top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-extrabold text-3xl">
        {slides[currentIndex].text}
      </div>  

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] text-black text-lg font-normal">
        {slides[currentIndex].subtext}
      </div>

      <div className="absolute top-[45%]  -translate-x-0 translate-y-[-50%] left-20  text-white text-3xl font-extrabold">
        {slides[currentIndex].text2}
      </div>

      <div className="absolute top-[58%]  -translate-x-0 translate-y-[-50%] left-20  text-white text-xl font-bold">
        {slides[currentIndex].subtext2}
      </div>

      <div className="absolute top-[45%]  -translate-x-0 translate-y-[-50%] left-20  text-black text-3xl font-bold">
        {slides[currentIndex].text3}
      </div>

      <div className="absolute top-[58%]  -translate-x-0 translate-y-[-50%] left-20  text-black text-3xl font-bold">
        {slides[currentIndex].subtext3}
      </div>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>

      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Slideshow;
