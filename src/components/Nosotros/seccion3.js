import React from "react"  

import nosotrosIcon1 from "../../images/nosotros/nosotrosIcon3.png"; 
import nosotrosIcon2 from "../../images/nosotros/nosotrosIcon4.png"; 
import nosotrosIcon3 from "../../images/nosotros/nosotrosIcon2.png"; 
import nosotrosIcon4 from "../../images/nosotros/nosotrosIcon1.png"; 

const AboutUs = () => (
    <>
    <section className="flex flex-col items-center md:flex-row"> 
        <div className="w-full max-w-screen-lg pt-16 md:pb-20 pb-8 m-0-auto items-center ">  
          <h1 className="text-2xl pb-4  text-center  tracking-wider w-full md:max-w-2xl m-0-auto"><b>¿POR QUÉ ES DIFERENTE DIREXIÓN A OTRAS EMPRESAS DE PROJECT MANAGEMENT?</b></h1>
          <div className="w-full md:w-6/12 md:pl-0 pl-8 pr-8 pt-8  pb-8 md:float-left">  
            <p className="text-sm bolderFont text-justify pb-8 leading-5  md:max-w-md md:float-right tracking-wider">Nuestro enfoque hace posible que los proyectos inmobiliarios obtengan una planeación eficiente. 
              Mediante nuestra metodología, aplicando en todas las etapas del proyecto las herramientas correctas 
              logramos un alto nivel de organización y control de los los proyectos, generando una alta eficiencia 
              presupuestal, proyectos entregados en tiempo con la más alta calidad y la mayor eficiencia.<br/><br/>
              Diseñamos un método de trabajo único para cada cliente/ proyecto de acuerdo a sus características y necesidades 
              integrando en una sola formula la metodología que establece el Project Management Institute (PMI®) y Lean Construction® 
              la experiencia de un equipo multidisciplinario con un alto nivel de entendimiento del modelo de negocio de cada proyecto.<br/><br/>
              Administración y control de los recursos como propios generando un frente de trabajo único con el mismo 
              objetivo: Garantizar el éxito del proyecto en todas sus etapas de desarrollo.
            </p> 
          </div>
          <div className="w-full md:w-6/12 pl-8 pt-8 pb-8 float-left"> 
          
          <h3 className="text-base text-blue leading-5 pb-4 mb-12">
            <img
                className="float-left  mr-16 -m-4 w-16"  
                src={nosotrosIcon1}
                alt="icon"
              />
              <b>REDUCCIÓN <br className="md:block hidden"/>DE PÉRDIDAS</b>
            </h3>
            
            <h3 className="text-base text-blue leading-5 pb-4 mb-12">
            <img
                className="float-left  mr-16 -m-4 w-16"  
                src={nosotrosIcon2}
                alt="icon"
              />
              <b>AGILIZAR LA <br className="md:block hidden"/>PLANIFICACIÓN</b>
            </h3>
            
            <h3 className="text-base text-blue leading-5 pb-4 mb-12">
            <img
                className="float-left  mr-16 -m-4 w-16"  
                src={nosotrosIcon3}
                alt="icon"
              />
              <b>APROVECHAMIENTO <br className="md:block hidden"/>DE RECURSOS</b>
            </h3>
            
            <h3 className="text-base text-blue leading-5 pb-4 mb-12">
            <img
                className="float-left  mr-16 -m-4 w-16"  
                src={nosotrosIcon4}
                alt="icon"
              />
              <b>MAXIMIZAR <br className="md:block hidden" />RENTABILIDAD</b>
            </h3>
          </div>

        </div>
      </section>
    </> 
)
 

export default AboutUs
