import React from "react";
import Slider from "react-slick";  

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "../../images/08_TORRE_MITT/01.jpeg";
import gallery2 from "../../images/08_TORRE_MITT/02.jpg"; 
import gallery3 from "../../images/08_TORRE_MITT/03.jpg"; 
import gallery4 from "../../images/08_TORRE_MITT/04.jpg"; 
 
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
