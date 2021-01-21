import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo7/Banner" 
import Seccion1 from "../components/Catalogo7/seccion1"
import Slider from '../components/Catalogo7/Slider'  
import SeccionControl from '../components/Catalogo7/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="HOTEL POSADAS" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
