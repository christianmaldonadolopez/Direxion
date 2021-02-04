import React from "react"   
import BackgroundImage from "./Background/backSeccion9";
 
 
const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion1" id="proyecto9"> 
			<a href="/proyecto9" onMouseOver={(e) => {
										document.getElementById("proyecto9").style.backgroundColor = "transparent";
										document.getElementById("proyectoB9").style.filter = "grayscale(0%)";
									  }} 
									  
									  onMouseOut ={(e) => {
										document.getElementById("proyecto9").style.backgroundColor = "#1c3761d1";
										document.getElementById("proyectoB9").style.filter = "grayscale(100%)";
									  }} >
			<h1 className="text-3xl text-white text-center pb-2"><b>PARQUE INDUSTRIAL AERO-1</b>
				<br/>
				<span className="text-lg text-white text-center pb-4">ver más
				</span>
			</h1> 
			</a>
        </div> 
    </div> 
    </> 
)
 

export default Proyectos
