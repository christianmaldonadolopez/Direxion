import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image" 
import { ImageContainer} from "./styled"

const Intro = () => (
    <> 
      <section className="text-center relative w-full max-w-screen-xl m-0-auto min-h-full px-8">
        <ImageContainer>
            <h2 className="inline-block p-3 text-2xl absolute left-0 text-left text-3xl leading-8 font-light z-10">
            TU<br/> PROYECTO<br/> EN LA<br/><b>DIREXIÓN</b><br/><b> CORRECTA</b>
            </h2>  
        </ImageContainer>
      </section>
    </> 
) 
export default Intro
