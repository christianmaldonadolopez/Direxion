import React from "react"  

import Image from "./Imagenes/imageNosotros2"; 

const AboutUs = () => (
    <>
    <section id="quehacemos" className="flex flex-col items-center md:flex-row">
        <div className="w-full  md:w-6/12 px-8">
          <div className="w-full md:w-8/12 md:float-right md:max-w-md  tracking-wider">
            <h1 className="text-2xl py-8">
              <b>¿QUE HACEMOS? </b>
            </h1>
            <h3 className="text-lg text-blue  pb-4">
              <b>NUESTRO VALOR AGREGADO  </b>
            </h3>
            <p className="text-sm bolderFont text-justify pb-8 leading-5 tracking-wider">
            Aportamos a la industria de la construcción, una planeación que permite 
            la organización y control total del proyecto en todas sus etapas, generando 
            eficiencia presupuestal y puntualidad de entrega con los más altos estándares 
            de calidad. Todos nuestros procesos se rigen por la metodología Project Management Institute (PMI®) 
            y Lean Construction® Asi como un alto nivel de entendimiento del modelo de negocio inmobiliario 
            coordinando todas las etapas del desarrollo con esta visión aportando nuestra experiencia 
            para garantizar el éxito comercial del proyecto asi como su máxima rentabilidad y eficiencia.
            </p>
            <h3 className="text-lg text-blue pb-4">
              <b>NUESTROS SERVICIOS</b>
            </h3> 
            <p className="text-sm bolderFont text-justify leading-5">
            • Dirección de Proyectos
            </p>
            <p className="text-sm bolderFont text-justify leading-5">
            • Due Delligence
            </p>
            <p className="text-sm bolderFont text-justify leading-5">
            • Owners Representative
            </p>
            <p className="text-sm bolderFont text-justify leading-5">
            • Soluciones integrales en Lean Construction
            </p>
          </div> 
        </div> 
        <div className="w-full md:w-6/12 md:pl-8 pt-16  pb-16">  
          <Image/> 
        </div>
      </section>
    </> 
)
 

export default AboutUs
