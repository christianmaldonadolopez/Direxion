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
 .contactoH{ 
     top:-10rem;
}
.Contact--Details { 
  
  max-width: 24rem!important;
  margin: 0px auto;
  margin-top: 10rem;
  }
  
  .Contact--Details--Item {
    display: flex;
    padding: 2rem 0;
    border-top: 1px solid var(--lightGrey);
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;
  }
  
  .Contact--Details--Item:hover,
  .Contact--Details--Item:focus {
    color: var(--primary);
  }
  
  .Contact--Details--Item svg {
    margin-right: 1.5rem;
    color: var(--primary);
  }
  
    
`
