import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo5/Banner" 
import Seccion1 from "../components/Catalogo5/seccion1"
import Slider from '../components/Catalogo5/Slider'  
import SeccionControl from '../components/Catalogo5/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="PLAZA CITADINA CORREGIDORA QRO" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
