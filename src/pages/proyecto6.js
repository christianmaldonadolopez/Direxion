import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Catalogo6/Banner" 
import Seccion1 from "../components/Catalogo6/seccion1"
import Slider from '../components/Catalogo6/Slider'  
import SeccionControl from '../components/Catalogo6/ControlProyecto'  

const Proyecto = () => (
  <Layout>
    <SEO title="TORRE NAVOLTA" />
    <Banner/> 
    <Seccion1/>  
    <Slider /> 
    <SeccionControl /> 
    
  </Layout>
)

export default Proyecto
