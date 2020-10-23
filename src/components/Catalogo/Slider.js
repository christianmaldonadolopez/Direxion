import React from "react";
import Slider from "react-slick";  

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "../../images/galleryProyecto.png";
import gallery2 from "../../images/galleryProyecto2.png";
import gallery3 from "../../images/galleryProyecto3.png";
import gallery4 from "../../images/galleryProyecto4.png";
 
export default () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  };
  
  return (
    <>
      <Slider {...settings}>
        <div className="px-1">
            <img 
                src={gallery}
                alt="gallery"
              />
        </div>
        <div className="px-1">
            <img 
                src={gallery2}
                alt="gallery"
              />
        </div> 
        <div className="px-1"> 
            <img 
                src={gallery3}
                alt="gallery"
              />
        </div> 
        <div className="px-1"> 
            <img 
                src={gallery4}
                alt="gallery"
              />
        </div>   
      </Slider> 
    </>
  )
}
