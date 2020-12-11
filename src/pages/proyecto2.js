import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo2/Banner" 
import Seccion1 from "../components/Catalogo2/seccion1"
import Slider from '../components/Catalogo2/Slider'  
import SeccionControl from '../components/Catalogo2/ControlProyecto'  

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
