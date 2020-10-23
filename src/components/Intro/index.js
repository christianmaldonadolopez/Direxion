import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image" 
import { ImageContainer} from "./styled"

const Intro = () => (
    <> 
      <section className="text-center relative w-full max-w-screen-xl m-0-auto min-h-full px-8">
        <ImageContainer>
            <h2 className="inline-block p-3 text-2xl absolute left-0 top-center text-left text-3xl leading-8 font-light z-10">
            TU<br/> PROYECTO<br/> EN LA<br/><b>DIRECCIÓN</b><br/><b> CORRECTA</b>
            </h2> 
            <Image/>
        </ImageContainer>
      </section>
    </> 
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "efecto_xx.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img className="opacity-25 md:opacity-100" fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Intro
