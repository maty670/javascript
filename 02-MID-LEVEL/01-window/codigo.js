
const ventanaEstado = document.getElementById("ventanaEstado");

	function abrirVentana(){
		ventana = window.open("https://youtube.com");
		ventanaEstado.innerHTML = "Ventana cerrada? : " + ventana.closed;        //window.closes devuelve true si la ventana esta cerrada y false si esta abierta
	}

	function cerrarVentana(){
		if(confirm("Cerrar la ventana?")){
		ventana.close();
		ventanaEstado.innerHTML = "Ventana cerrada? : " + ventana.closed;
		}
	}











	function posicionVentana(){
		const scrollX = window.scrollX;
		const scrollY = window.scrollY;
		alert(`Distancia en pixeles horizontal: ${scrollX}\nDistancia en pixeles vertical: ${scrollY}`);
	}



	


	function scrollPantalla(){
		window.scrollTo(1000,1500);
	}


	function scrollFinal(){
	window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);   // scrollHeight: Atributo unicamente de lectura es la medida de la altura del contenido de un elemento
	}
























	function Location(){
		
		const href = window.location.href;  // Url de la pagina actual 
		const hostname = window.location.hostname;
		const pathname = window.location.pathname;// Ruta y nombre de archivo de la pagina actual
	

		alert("URL: " + href +"\n\n" + "hostname (Dominio): " + hostname +"\n\n" + "pathname (Ruta): " + pathname)    


		//       			|  https://youtube.com/CHANNEL/OD9FNDAIC |
		//					<---------------------------------------->
		//							        href (URL)
		//
		//
		//
		//         		|  https   |       | youtube.com |         | /CHANNEL/OD)FNDAIC |
		//         		| protocol |       | hostname    |         |     pathname       |
		//
		//		  
	}