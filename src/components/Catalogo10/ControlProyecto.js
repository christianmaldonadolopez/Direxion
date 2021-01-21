import React from "react"  
 
import izquierda from "../../images/flechaIzquierda.png";
import derecha from "../../images/flechaDerecha.png";

const seccionControl = () => (
    <>
    <section className="md:flex block flex-col items-center md:flex-row md:py-32  md:px-32">  
          <div className="w-6/12 float-left  md:w-6/12  pr-8 pl-8 md:pl-0 pt-8  pb-8 "> 
                <a href="/proyecto9" className="float-left"> 
                    <img className="float-left mr-16 mb-16 md:mb-0 "  src={izquierda} alt="icon" />PROYECTO ANTERIOR
                </a>
          </div>
          <div className="w-6/12 md:w-6/12 pl-8 pr-8 md:pr-0 pt-8 pb-8 float-right  "> 
                <a href="/proyecto" className="float-right"> 
                    <img className="float-right ml-16 mb-16 md:mb-0"  src={derecha} alt="icon" />SIGUIENTE PROYECTO
                </a>
          </div> 
      </section>
    </> 
)
 

export default seccionControl
