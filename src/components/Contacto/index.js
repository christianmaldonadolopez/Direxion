import React from "react"
import { MapPin, Smartphone, Mail } from 'react-feather'
import { ImageContainer } from "./styled"

const Intro = () => (
  <>
    <section className="text-center relative w-full max-w-screen-xl m-0-auto min-h-full px-8"> 
      <div className="mt-64 Contact--Details w-full">
        <a
          className="Contact--Details--Item  flex "
          href=""
          target="_blank"
        >
          <MapPin  className="mr-4" />   Ave. Inventada #123 Col. Inventada C.P. 12345
              </a>
        <a className="Contact--Details--Item  flex mt-4" href='' >
          <Smartphone  className="mr-4"/> Tel.(686) 123 4567 / Cel.(686) 123 4567
              </a>
        <a className="Contact--Details--Item flex mt-4" href=''>
          <Mail className="mr-4" /> info@direccion.com / contacto@direccion.com
              </a>
      </div>
    </section>
  </>
)
export default Intro
