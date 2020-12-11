import styled from "styled-components" 
 
export const ImageContainer = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 100%;
    float: right;
    max-width: 65rem;
 
    .gatsby-image-wrapper{ 
        -moz-object-fit: cover;
        max-width: 55rem;
        float: right;
        width: 100%;
        -webkit-object-fit: cover;
        -ms-object-fit: cover;
        object-fit: cover;
        -moz-object-position: center;
        -webkit-object-position: center;
        -ms-object-position: center;
        object-position: center;
    }
 
    
`
 