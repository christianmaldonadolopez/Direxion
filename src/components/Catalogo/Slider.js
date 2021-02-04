import React from "react";
import Slider from "react-slick";  

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "../../images/04_OFICINA_HAUS/HAUZ_01.jpg";
import gallery2 from "../../images/04_OFICINA_HAUS/HAUZ_02.jpg";
import gallery3 from "../../images/04_OFICINA_HAUS/HAUZ_03.jpg";
import gallery4 from "../../images/04_OFICINA_HAUS/HAUZ_04.jpg";
import gallery5 from "../../images/04_OFICINA_HAUS/DSCN2147.jpg";
import gallery6 from "../../images/04_OFICINA_HAUS/DSCN2149.jpg";
import gallery7 from "../../images/04_OFICINA_HAUS/DSCN2153.jpg";
 
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
        <div className="px-1"> 
            <img 
                src={gallery5}
                alt="gallery"
              />
        </div> 
        <div className="px-1"> 
            <img 
                src={gallery6}
                alt="gallery"
              />
        </div> 
        <div className="px-1"> 
            <img 
                src={gallery7}
                alt="gallery"
              />
        </div>   
      </Slider> 
    </>
  )
}
