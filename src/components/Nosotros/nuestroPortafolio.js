import React from "react"
import { Link } from "gatsby";

const nuestroPortafolio = () => {
  return (
  <section className="flex flex-col items-center md:flex-row"> 
    <div className="w-full max-w-screen-lg pt-16 m-0-auto items-center pb-48">  
      <h1 className="text-2xl  text-center  tracking-wider w-full pb-4 max-w-2xl m-0-auto"><b>CONÓCE NUESTRO PORTAFOLIO</b></h1> 
      <Link to="proyectos" className="text-lg text-center  tracking-wider w-full pb-32 max-w-2xl m-0-auto block btn-blue" to="/proyectos">VER PROYECTOS</Link>
    </div>
  </section>
  )
}

export default nuestroPortafolio