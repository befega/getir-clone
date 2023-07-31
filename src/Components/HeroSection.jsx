import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  const [selected, setSelected] = useState("TR");

  const phones = {
    TR: "+90",
    US: "+1",
    DE: "+49",
    FR: "+33",
    IT: "+39",
    GB: "+44",
    ES: "+50",
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="img/getir-mainpage-1.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="img/getir-mainpage-2.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="img/getir-mainpage-3.jpg"
            alt="getir"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="img/getir-logo.svg" alt="" />
          <h3 className="text-white mt-4 text-4xl">
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap ya da Kayıt Ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none text-sm pt-2 peer"
                />
                <span className="absolute flex items-center top-0 left-0 h-full px-4 text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color rounded-md hover:bg-primary-brand-color hover:text-brand-yellow transition-colors flex w-full h-12 justify-center items-center text-sm font-semibold ">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-500 my-1" />
            <button className="bg-blue-900 bg-opacity-10 text-blue-700 text-opacity-80 rounded-md hover:bg-blue-700 hover:bg-opacity-90 hover:text-white transition-colors flex w-full px-4 h-12 items-center text-sm font-semibold ">
              <FaFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
