import React from 'react'
import { graphql, StaticQuery } from 'gatsby' 
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Banner = ({children}) => (
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
          className="flex flex-col banner-height items-center md:flex-row tracking-wider"
        >
           {children}
        </BackgroundImage>
      )
    }}
  />
)
 
const StyledBanner = styled(Banner)`
width: 100%;
background-position: bottom center;
background-repeat: repeat-y;
background-size: cover;
`
export default StyledBanner