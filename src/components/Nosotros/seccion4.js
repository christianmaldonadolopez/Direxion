import React from "react"

import Image from "./Imagenes/imageNosotrosFases";
import nosotrosDireccion1 from "../../images/nosotrosDireccion.png";
import nosotrosDireccion2 from "../../images/nosotrosDireccion2.png";
import nosotrosDireccion3 from "../../images/nosotrosDireccion3.png";
import nosotrosDireccion4 from "../../images/nosotrosDireccion4.png";
import nosotrosDireccion5 from "../../images/nosotrosDireccion5.png";

const AboutUs = () => (
  <>
    <section className="flex flex-col items-center md:flex-row">
      <div className="w-full max-w-screen-lg md:pt-16 pt:8 m-0-auto items-center px-8 md:pb-64">
        <h1 className="text-2xl text-center  tracking-wider w-full md:pb-32 pb-8 max-w-2xl m-0-auto"> FASES DEL PROYECTO </h1>
        <Image />
      </div>
    </section>
    <section className="flex flex-col items-center md:flex-row">
      <div className="w-full max-w-screen-lg md:pt-16 pt-8 m-0-auto items-center pb-64">
        <h1 className="text-2xl text-center  tracking-wider w-full md:pb-20 pb-8 max-w-2xl m-0-auto"> DIREXIÓN EN NÚMEROS </h1>
        <div className="w-full md:w-1/4 px-4 relative md:float-left md:h-64 m-auto h-70 divRombo">
          <img
            className="absolute left-4 rombo"
            src={nosotrosDireccion1}
          />
          <p className="text-sm bolderFont leading-5 absolute bottom-0   text-center w-full -m-10-p rombosText">
            <b>Inversión bajo<br />nuestra gestión</b>
          </p>
        </div>
        <div className="w-full md:w-1/4 sm:w-6/12 px-4 relative  md:float-left md:h-64 m-auto h-70 divRombo ">
          
         <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText2">
            <b>Mas de
              </b>
          </p>
          <img
            className="absolute left-4 rombo"
            src={nosotrosDireccion2}
          />
          <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText">
            <b>
              de construccion
              </b>
          </p>
        </div>
        <div className="w-full md:w-1/4 px-4 relative  md:float-left md:h-64 m-auto h-70  divRombo ">
          <img
            className="absolute left-4  rombo"
            src={nosotrosDireccion3}
          />
        </div>
        <div className="w-full md:w-1/4 px-4 relative  md:float-left md:h-64 m-auto h-70 divRombo   "> 
          <img
            className="absolute left-4 imgnos  rombo"
            src={nosotrosDireccion5}
          />
          <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText3">
            <b>- Industrial</b>
          </p>
        </div>
      </div>
    </section>
  </>
)


export default AboutUs
