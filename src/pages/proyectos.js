import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Seccion1 from "../components/Proyectos/seccion1"
import Seccion2 from "../components/Proyectos/seccion2"
import Seccion3 from "../components/Proyectos/seccion3" 

const Proyectos = () => (
  <Layout>
    <SEO title="Proyectos" />
    <Seccion1/> 
    <Seccion2/> 
    <Seccion3/> 
  </Layout>
)

export default Proyectos
