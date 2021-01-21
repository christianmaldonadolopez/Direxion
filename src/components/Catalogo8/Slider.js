import React from "react";
import Slider from "react-slick";  

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "../../images/07_NEXXUS_NAVE_INDUSTRIAL/01.jpg";
import gallery2 from "../../images/07_NEXXUS_NAVE_INDUSTRIAL/02.jpg"; 
import gallery3 from "../../images/07_NEXXUS_NAVE_INDUSTRIAL/03.jpg"; 
 
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
      </Slider> 
    </>
  )
}
