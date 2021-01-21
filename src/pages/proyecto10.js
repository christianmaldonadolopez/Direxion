import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo10/Banner" 
import Seccion1 from "../components/Catalogo10/seccion1"
import Slider from '../components/Catalogo10/Slider'  
import SeccionControl from '../components/Catalogo10/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="PARQUE INDUSTRIAL AERO 1" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
