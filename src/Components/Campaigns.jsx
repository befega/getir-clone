import React from "react";
import banners from "../api/banners.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArw({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function PrevArw({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const Campaigns = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextArw />,
    prevArrow: <PrevArw />,
  };
  return (
    <div className="container mx-auto my-4">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id} className="px-2">
              <img src={banner.image} className="rounded-lg" alt="getir" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
