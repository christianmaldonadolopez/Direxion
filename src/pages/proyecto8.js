import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo8/Banner" 
import Seccion1 from "../components/Catalogo8/seccion1"
import Slider from '../components/Catalogo8/Slider'  
import SeccionControl from '../components/Catalogo8/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="NEXXUS NAVE INDUSTRIAL" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
