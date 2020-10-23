import React from 'react'
import { graphql, StaticQuery } from 'gatsby' 

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Seccion1.png" }) {
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
          className="flex min-h-screen items-center flex-row tracking-wider"
        >
           {children}
        </BackgroundImage>
      )
    }}
  />
)
 
export default BackgroundSection