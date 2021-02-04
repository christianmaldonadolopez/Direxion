import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo/Banner" 
import Seccion1 from "../components/Catalogo/seccion1"
import Slider from '../components/Catalogo/Slider'  
import SeccionControl from '../components/Catalogo/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="OFICINAS CORPORATIVAS HAUS" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
