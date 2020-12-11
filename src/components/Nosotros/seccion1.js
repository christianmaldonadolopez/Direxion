import React from "react"  
 
import Image1 from "./Imagenes/imageNosotros"; 

const AboutUs = () => (
    <>
    <section className="flex flex-col items-center md:flex-row tracking-wider">  
      <div className="w-full md:w-6/12 md:pr-8 float-left">  
        <Image1/> 
      </div>
      <div className="md:w-6/12 px-8 float-left">
        <div className="md:w-7/12 max-w-screen-sm">
          <h1 className="text-2xl pb-8 pt-8 md:pt-0">
            <b>¿ QUIENES SOMOS ? </b>
          </h1>
          <h3 className="text-lg text-blue pb-4">
            <b>EXPERIENCIA  </b>
          </h3>
          <p className="text-sm bolderFont text-justify pb-8 leading-5 tracking-wider">
          Somos una empresa joven que nace en el 2014 con una solida experiencia de más de 15 años de nuestro fundador. 
          Durante este tiempo nos hemos especializado en la administración de proyectos de construcción y un alto nivel de entendimiento 
          del modelo de negocio inmobiliario.
          </p>
          <h3 className="text-lg text-blue pb-4">
            <b>¿QUE ES DIREXION?  </b>
          </h3> 
          <p className="text-sm bolderFont text-justify leading-5 tracking-wider">
          Somos una empresa especializada en la administración profesional de proyectos de construcción. 
          A través de nuestra metodología gestionamos los proyectos con un estricto control, obteniendo como resultados; 
          alta eficiencia presupuestal y proyectos entregados a tiempo con la más alta calidad.
          </p>
        </div> 
      </div> 
    </section>
    </> 
)
 

export default AboutUs
