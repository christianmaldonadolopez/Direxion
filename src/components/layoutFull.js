import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";
import facebook from "../images/fb-icon.png"; 
import instagram from "../images/insta-icon.png";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-ull mx-auto">
        {children}
      </main>

      <footer className="footer-half">
        <nav className="flex justify-between max-w-screen-xl px-4 py-8 mx-auto text-sm ">
          <div className="float-left text-white w-1/2">
            <div className="float-left text-white w-1/2">
              <p className="font-xs footer1"><b>ENVìANOS UN MENSAJE</b></p>
              <p className="text-xs  "><b>Contacto:</b></p>
              <p className="text-xs ">Tel.(686) 123 4567 / Cel.(686) 123 4567</p>
              <p className="text-xs ">info@direccion.com / contacto@direccion.com</p>
            </div> 
            <div className="float-left text-white w-1/2 px-4">
              <div className="float-left text-white w-1/2  pr-3 ">
                <input
                  className="w-full mb-2 form-input h-8 text-xs"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  type="text"
                /> 
                <input
                  className="w-full form-input h-8 text-xs"
                  id="mail"
                  name="mail"
                  placeholder="Correo"
                  type="text"
                /> 
              </div> 
              <textarea
                className="w-1/2 float-left form-textarea h-21 text-xs"
                id="message"
                name="message"
                placeholder="Mensaje"
                rows="8"
              />  
              <button className="float-right py-1 px-4 rounded third-color  text-white mt-3" type="submit">Enviar</button>
            </div>  
          </div>
          <div className="w-1/2"> 
            <div className="float-left text-white w-1/2 px-4">
              <p className="font-md font-normal leading-4 pb-4">BUSCANOS EN<br/> GOOGLE MAPS</p>
              <p className="text-xs font-normal leading-3">Direccion:</p>
              <p className="text-xs font-thin leading-3">Ave. Inventada #123 Col. Inventada C.P. 12345</p>  
              <Link to="#">
                <img className="w-5 mt-2 mr-2 float-left" src={facebook}/> 
              </Link> 
              <Link to="#">
                <img className="w-5 mt-2 mr-2 float-left" src={instagram}/>  
              </Link> 
            </div> 
            <div className="float-left text-white w-1/2">
              <iframe title="map" className="contactMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.3904994566515!2d-115.33559028482111!3d32.64905108101081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d773a7a8805695%3A0x50408883e9f49b0!2sTransportes%20Internacionales%20Escoboza!5e0!3m2!1sen!2smx!4v1602264224035!5m2!1sen!2smx"/>
						</div>  
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
