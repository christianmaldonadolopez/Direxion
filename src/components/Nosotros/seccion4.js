import React from "react" 

import Image from "./Imagenes/imageNosotrosFases"; 
import nosotrosDireccion1 from "../../images/nosotrosDireccion.png"; 
import nosotrosDireccion2 from "../../images/nosotrosDireccion2.png"; 
import nosotrosDireccion3 from "../../images/nosotrosDireccion3.png"; 
import nosotrosDireccion4 from "../../images/nosotrosDireccion4.png"; 

const AboutUs = () => (
    <>
     <section className="flex flex-col items-center md:flex-row"> 
        <div className="w-full max-w-screen-lg md:pt-16 pt:8 m-0-auto items-center px-8 md:pb-64">  
          <h1 className="text-2xl text-center  tracking-wider w-full md:pb-32 pb-8 max-w-2xl m-0-auto"> FASES DEL PROYECTO </h1>  
            <Image/>  
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row"> 
        <div className="w-full max-w-screen-lg md:pt-16 pt-8 m-0-auto items-center pb-64">  
          <h1 className="text-2xl text-center  tracking-wider w-full md:pb-20 pb-8 max-w-2xl m-0-auto"> DIREXIÓN EN NÚMEROS </h1>  
          <div className="w-1/2 md:w-3/12 sm:w-6/12 px-4 relative float-left md:h-64 my-4 h-70">
            <img
                className="absolute left-4"  
                src={nosotrosDireccion1}
              />
              <p className="text-sm bolderFont leading-5 absolute bottom-0   text-center w-full -m-10-p"> 
              <b>
              Inversión bajo<br/>
              nuestra gestión. 
              </b>
              </p>
          </div>  
          <div className="w-1/2 md:w-3/12 sm:w-6/12 px-4 relative float-left md:h-64 my-4 h-70  ">
            <img
                className="absolute left-4"  
                src={nosotrosDireccion2}
              />
              <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p ">
              <b>
              Construidos bajo<br/>
              nuestra gerencia. 
              </b>
              </p>
          </div>  
          <div className="w-1/2 md:w-3/12 sm:w-6/12 px-4 relative float-left md:h-64 my-4 h-70   ">
            <img
                className="absolute left-4"  
                src={nosotrosDireccion3}
              />
          </div>  
          <div className="w-1/2 md:w-3/12 sm:w-6/12 px-4 relative float-left md:h-64 my-4 h-70    ">
            <img
                className="absolute left-4"  
                src={nosotrosDireccion4}
              />
              <p className="text-sm bolderFont text-justify leading-5 absolute text-nosotros-direccion pl-4">
              <b>
              - Comercial <br/>
              - Corporativos <br/> 
              - Vivienda vertical <br/> 
              - Industral Hotelería  <br/>
              - Turismo<br/>
              </b>
              </p>
          </div>
        </div>
      </section>
    </> 
)
 

export default AboutUs
