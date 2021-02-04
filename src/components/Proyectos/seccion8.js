import React from "react"   
import BackgroundImage from "./Background/backSeccion8";
 
 

const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion2" id="proyecto8"> 
			<a href="/proyecto8" onMouseOver={(e) => { 
								document.getElementById("proyecto8").style.backgroundColor = "transparent";
								document.getElementById("proyectoB8").style.filter = "grayscale(0%)";
							  }}
							  
							  onMouseOut ={(e) => {
								document.getElementById("proyecto8").style.backgroundColor = "#465a73b8";
								document.getElementById("proyectoB8").style.filter = "grayscale(100%)";
							  }}>
			<h1 className="text-3xl text-white text-center pb-2"><b>TORRE MITT</b>
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
