import React from "react"   
import BackgroundImage from "./Background/backSeccion2";
 
 

const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion2" id="proyecto2"> 
			<a href="/proyecto2" onMouseOver={(e) => { 
								document.getElementById("proyecto2").style.backgroundColor = "transparent";
								document.getElementById("proyectoB2").style.filter = "grayscale(0%)";
							  }}
							  
							  onMouseOut ={(e) => {
								document.getElementById("proyecto2").style.backgroundColor = "#465a73b8";
								document.getElementById("proyectoB2").style.filter = "grayscale(100%)";
							  }}>
			<h1 className="text-3xl text-white text-center pb-2"><b>NUEVO ACUARIO MAZATLAN</b> 
				<br/>
				<span className="text-lg text-white text-center pb-4">
					ver más
				</span>
			</h1>
			</a>
        </div> 
    </div> 
    </> 
)
 

export default Proyectos
