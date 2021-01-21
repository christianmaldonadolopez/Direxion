import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo4/Banner" 
import Seccion1 from "../components/Catalogo4/seccion1"
import Slider from '../components/Catalogo4/Slider'  
import SeccionControl from '../components/Catalogo4/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="NUEVO ACUARIO, MAZATLAN." />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
