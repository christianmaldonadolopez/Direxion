import React from "react"   
import BackgroundImage from "./Background/backSeccion7";
 
 

const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion3" id="proyecto7"> 
			<a href="/proyecto7" onMouseOver={(e) => { 
								document.getElementById("proyecto7").style.backgroundColor = "transparent";
								document.getElementById("proyectoB7").style.filter = "grayscale(0%)";
							  }}
							  
							  onMouseOut ={(e) => {
								document.getElementById("proyecto7").style.backgroundColor = "#494949d9";
								document.getElementById("proyectoB7").style.filter = "grayscale(100%)";
							  }}>
			<h1 className="text-3xl text-white text-center pb-2"><b>NAVE INDUSTRIAL NEXXUS</b>
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
