import React from "react"   
import BackgroundImage from "./Background/backSeccion";
 
 

const Proyectos = () => (
    
    <>
    <div className="relative">  
		<BackgroundImage>   
		  <div className=" w-full px-8 letter-spacing">  
		  </div> 
		</BackgroundImage> 
		<div className=" w-full px-8 letter-spacing absolute top-0 h-full seccion1" id="proyecto1"> 
			<h1 className="text-3xl text-white text-center pb-2">
				
					<a href="/proyecto" onMouseOver={(e) => { 
										document.getElementById("proyecto1").style.backgroundColor = "transparent";
										document.getElementById("proyectoB1").style.filter = "grayscale(0%)";
									  }}
									  
									  onMouseOut ={(e) => {
										document.getElementById("proyecto1").style.backgroundColor = "#1c3761d1";
										document.getElementById("proyectoB1").style.filter = "grayscale(100%)";
									  }}><b>OFICINAS CORPORATIVAS HAUS</b></a>
				<br/>
				<span className="text-lg text-white text-center pb-4">
					<a href="/proyecto" onMouseOver={(e) => { 
										document.getElementById("proyecto1").style.backgroundColor = "transparent";
										document.getElementById("proyectoB1").style.filter = "grayscale(0%)";
									  }}
									  
									  onMouseOut ={(e) => {
										document.getElementById("proyecto1").style.backgroundColor = "#1c3761d1";
										document.getElementById("proyectoB1").style.filter = "grayscale(100%)";
									  }}>ver más</a>
				</span>
			</h1>  
        </div> 
    </div>
    </> 
)
 

export default Proyectos
