import React from "react"   
import BackgroundImage from "./Background/backSeccion5";
 
 

const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion1" id="proyecto5"> 
			<h1 className="text-3xl text-white text-center pb-2">
					<a href="/proyecto5" onMouseOver={(e) => { 
										document.getElementById("proyecto5").style.backgroundColor = "transparent";
										document.getElementById("proyectoB5").style.filter = "grayscale(0%)";
									  }}
									  
									  onMouseOut ={(e) => {
										document.getElementById("proyecto5").style.backgroundColor = "#1c3761d1";
										document.getElementById("proyectoB5").style.filter = "grayscale(100%)";
									  }}><b>PLAZA CITADINA CORREGIDORA QRO.</b></a>
				<br/>
				<span className="text-lg text-white text-center pb-4">
					<a href="/proyecto5" onMouseOver={(e) => { 
										document.getElementById("proyecto5").style.backgroundColor = "transparent";
										document.getElementById("proyectoB5").style.filter = "grayscale(0%)";
									  }}
									  
									  onMouseOut ={(e) => {
										document.getElementById("proyecto5").style.backgroundColor = "#1c3761d1";
										document.getElementById("proyectoB5").style.filter = "grayscale(100%)";
									  }}>ver más</a>
				</span>
			</h1>   
        </div> 
    </div>  
    </> 
)
 

export default Proyectos
