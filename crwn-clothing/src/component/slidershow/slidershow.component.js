
import React from "react";
import Slider from "react-slick";

const PerfumeSlider = ({ perfumes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };

  return (
    <div className="perfume-slider" style={{ margin: '40px' }}>
      <Slider {...settings}>
        {perfumes.map((perfume, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <img 
              src={perfume.imageUrl} 
              alt={perfume.name} 
              style={{ width: '100%', borderRadius: '12px' }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PerfumeSlider;
