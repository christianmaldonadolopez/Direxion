import React from 'react'
import { graphql, StaticQuery } from 'gatsby' 

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "08_TORRE_MITT/04.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          fluid={imageData} 
		  id="proyectoB8"
          className="flex min-h-screen items-center flex-row tracking-wider backgroundGray"
        >
           {children}
        </BackgroundImage>
      )
    }}
  />
)
 
export default BackgroundSection