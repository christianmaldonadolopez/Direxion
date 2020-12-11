import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo3/Banner" 
import Seccion1 from "../components/Catalogo3/seccion1"
import Slider from '../components/Catalogo3/Slider'  
import SeccionControl from '../components/Catalogo3/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="PLAZA CITADINA CORREGIDORA, QRO." />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
