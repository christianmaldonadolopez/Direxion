import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo9/Banner" 
import Seccion1 from "../components/Catalogo9/seccion1"
import Slider from '../components/Catalogo9/Slider'  
import SeccionControl from '../components/Catalogo9/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="TORRE MITT" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
