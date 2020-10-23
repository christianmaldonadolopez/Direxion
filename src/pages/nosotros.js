import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Seccion1 from "../components/Nosotros/seccion1"
import Seccion2 from "../components/Nosotros/seccion2"
import Seccion3 from "../components/Nosotros/seccion3"
import Seccion4 from "../components/Nosotros/seccion4"
import Portafolio from "../components/Nosotros/nuestroPortafolio"

const AboutPage = () => (
  <Layout>
    <SEO title="Nosotros" />
    <Seccion1/>
    <Seccion2/>
    <Seccion3/>
    <Seccion4/>
    <Portafolio/>
  </Layout>
)

export default AboutPage
