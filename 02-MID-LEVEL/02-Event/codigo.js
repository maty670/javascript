
	
	function funcion(parametro){
		alert("Al hacer click ocurre un evento\n" + "parametro: " + parametro);
		boton.removeEventListener("click",funcion);
		alert("Luego se elimina el Event Listener");
	}


	const boton = document.querySelector(".asd");
	boton.addEventListener("click",function(e){
		funcion("mensaje 564");
		this.removeEventListener('click', arguments.callee);
	});








	const botonEvent = document.querySelector(".qwe");
	botonEvent.addEventListener("click",(event)=>{
		console.log(event.target);
	})

	



	





//----------------------------------------------------------------------------











	const rojo = document.getElementById("contenedor_rojo");
	const verde = document.getElementById("contenedor_verde");
	const btn = document.getElementById("boton");

	const rojo2 = document.getElementById("contenedor_rojo2");
	const verde2 = document.getElementById("contenedor_verde2");
	const btn2 = document.getElementById("boton2");

	const rojo3 = document.getElementById("contenedor_rojo3");
	const verde3 = document.getElementById("contenedor_verde3");
	const btn3 = document.getElementById("boton3");




	rojo.addEventListener("click",function(e){
		alert("Click en el contenedor rojo");
	})

	verde.addEventListener("click",function(e){
		alert("Click en el contenedor verde");
	})

	btn.addEventListener("click",function(e){
		alert("Click en el boton");
	})





	rojo2.addEventListener("click",function(e){
		alert("Click en el contenedor rojo");
	},true)

	verde2.addEventListener("click",function(e){
		alert("Click en el contenedor verde");
	},true)

	btn2.addEventListener("click",function(e){
		alert("Click en el boton");
	},false)





	rojo3.addEventListener("click",function(e){
		alert("Click en el contenedor rojo");
		e.stopPropagation();
	})

	verde3.addEventListener("click",function(e){
		alert("Click en el contenedor verde");
		e.stopPropagation();
	})

	btn3.addEventListener("click",function(e){
		alert("Click en el boton");
		e.stopPropagation();
	})
















	//----------------------------------------------------------------------------




	const contenedor_dobleclick = document.getElementById("contenedor_dobleclick");

	contenedor_dobleclick.addEventListener("dblclick",function(e){
		document.getElementById("contador_dblclick").innerHTML++
	})

	const contenedor_contextMenu = document.getElementById("contenedor_contextMenu");

	contenedor_contextMenu.addEventListener("contextmenu",function(e){
		document.getElementById("contador_contextMenu").innerHTML++
	})


	const contenedor_mousemove = document.getElementById("contenedor_mousemove");

	contenedor_mousemove.addEventListener("mousemove",function(e){
		document.getElementById("contador_mousemove").innerHTML++
	})

	const contenedor_mouseup = document.getElementById("contenedor_mouseup");

	contenedor_mouseup.addEventListener("mouseup",function(e){
		document.getElementById("contador_mouseup").innerHTML++
	})



	const contenedor_mouseEnterOver = document.getElementById("contenedor_mouseEnterOver");

	contenedor_mouseEnterOver.addEventListener("mouseover",function(e){
		document.getElementById("contador_mouseover").innerHTML++
	})

	contenedor_mouseEnterOver.addEventListener("mouseenter",function(e){
		document.getElementById("contador_mouseenter").innerHTML++
	})




	const contenedor_mouseLeaveOut = document.getElementById("contenedor_mouseLeaveOut");

	contenedor_mouseLeaveOut.addEventListener("mouseout",function(e){
		document.getElementById("contador_mouseout").innerHTML++
	})

	contenedor_mouseLeaveOut.addEventListener("mouseleave",function(e){
		document.getElementById("contador_mouseleave").innerHTML++
	})







//----------------------------------------------------------------------------






const input_key = document.getElementById("input_key");


input_key.addEventListener("keydown",function(e){
	document.getElementById("keyDown").innerHTML++
	document.getElementById("tecla_presionada").innerHTML = e.key
	console.log(e)
})

input_key.addEventListener("keypress",function(e){
	document.getElementById("keyPress").innerHTML++
})

input_key.addEventListener("keyup",function(e){
	document.getElementById("keyUp").innerHTML++
})












//----------------------------------------------------------------------------










	const contenedor_imagenes = document.querySelector(".contenedor_imagenes");
	var links = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5abc0ea-489b-4e4d-bb26-e367ca90c553/d3ivq6v-3b0dd68f-4350-4c4a-9bfb-f250bb5c78e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1YWJjMGVhLTQ4OWItNGU0ZC1iYjI2LWUzNjdjYTkwYzU1M1wvZDNpdnE2di0zYjBkZDY4Zi00MzUwLTRjNGEtOWJmYi1mMjUwYmI1Yzc4ZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.881PWvh8dRCsljOCUS9YVz8ckU769jrQ3ydthVckLIE",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677b7403-76bf-4871-b1eb-996331c62c03/d3e7fkg-dbaa126a-4c73-46af-8bb3-75a0a5cfaa33.png/v1/fill/w_800,h_1077,strp/colored_009___vegeta_003_by_vicdbz_d3e7fkg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NyIsInBhdGgiOiJcL2ZcLzY3N2I3NDAzLTc2YmYtNDg3MS1iMWViLTk5NjMzMWM2MmMwM1wvZDNlN2ZrZy1kYmFhMTI2YS00YzczLTQ2YWYtOGJiMy03NWEwYTVjZmFhMzMucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eYYIOqXyaVGe2PHq9-4e5os2cXzex50eOHl8xNzHKZo",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/daziw2g-96be0117-a74c-4116-895f-20b1ae4d2091.png/v1/fill/w_1024,h_889,strp/gohan__2___2017_by_saodvd_daziw2g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg5IiwicGF0aCI6IlwvZlwvM2ViNzBjY2MtZTdhZC00ZTFhLTg3ZmEtZjk3ZGY5ZWYxYzUyXC9kYXppdzJnLTk2YmUwMTE3LWE3NGMtNDExNi04OTVmLTIwYjFhZTRkMjA5MS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HpasD5vvdYOESu3oqq2Jbauc7qCkCJkNPYgqdolUwSI",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e809759b-e635-4f04-9900-bd3f58c59e88/d68yn84-1377629f-8e1d-4b55-a44b-ceb8ba37d335.png/v1/fill/w_1024,h_1182,strp/frieza_final_form_by_maffo1989_d68yn84-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4MiIsInBhdGgiOiJcL2ZcL2U4MDk3NTliLWU2MzUtNGYwNC05OTAwLWJkM2Y1OGM1OWU4OFwvZDY4eW44NC0xMzc3NjI5Zi04ZTFkLTRiNTUtYTQ0Yi1jZWI4YmEzN2QzMzUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ojD7CFM6-miREBTso5kebkK-ST--DrfhV4WVLP9ur6E",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7653b070-2a78-43b1-9d7a-c8ba3c069af8/d3dpe0b-71f35d81-1f22-40ab-b9cb-e9ff84a35832.png/v1/fill/w_1280,h_2990,strp/trunks_2010_ova_by_boscha196_d3dpe0b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjk5MCIsInBhdGgiOiJcL2ZcLzc2NTNiMDcwLTJhNzgtNDNiMS05ZDdhLWM4YmEzYzA2OWFmOFwvZDNkcGUwYi03MWYzNWQ4MS0xZjIyLTQwYWItYjljYi1lOWZmODRhMzU4MzIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Kc6iyOO7GKu6uKf_MmuND3SRNlHhWa6aEWWqMyLoeUE",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7349ae7a-95fb-48b3-a00b-b7cbced55724/d9rmt77-ae616dd8-894f-49cc-926a-b0691750e500.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNDlhZTdhLTk1ZmItNDhiMy1hMDBiLWI3Y2JjZWQ1NTcyNFwvZDlybXQ3Ny1hZTYxNmRkOC04OTRmLTQ5Y2MtOTI2YS1iMDY5MTc1MGU1MDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iyKHVPWjKayjLTt5-FrWUWuoNxDdtjP4eeyl8-5Sd8M",
				 "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af8f5e85-15e8-48a5-9de9-f278eee8f36a/d6i4mol-de36729b-4c4e-4f68-a865-500a9671f271.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmOGY1ZTg1LTE1ZTgtNDhhNS05ZGU5LWYyNzhlZWU4ZjM2YVwvZDZpNG1vbC1kZTM2NzI5Yi00YzRlLTRmNjgtYTg2NS01MDBhOTY3MWYyNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4d9tW11DacNNKt7BXVBRDsUGUyTNC5gK4QwH_sBsaKs"];



	const fragmento = document.createDocumentFragment();




		for(i=0;i<links.length;i++){
			const img = document.createElement('img');
			img.classList.add(`imagen`);
			img.setAttribute('src',links[i]);
			fragmento.appendChild(img);
		}

		contenedor_imagenes.appendChild(fragmento);

		window.addEventListener("load",()=>{
			alert("Se termino de cargar la pagina")
		})







		const beforeunload = document.getElementById("unload");

		addEventListener("beforeunload",()=>{
			console.log("Saliendo hacia otra pagina");
		})



		addEventListener("resize",()=>{
			console.log("Se ha actualizado la resolucion")
		})


		addEventListener("scroll",()=>{
			console.log("Se ha scrolleado")
		})




		const contenido_seleccionado = document.getElementById("contenido_seleccionado");

		contenido_seleccionado.addEventListener("select",function(e){
			let start = e.target.selectionStart
			let end = e.target.selectionEnd
			texto = contenido_seleccionado.value.substring(start,end)								// contenido_seleccionado.value :  Valor que tiene al escribir en el input
			alert("Se seleciono: " + texto);
		})














		//----------------------------------------------------------------------------







		const boton_setTimeout = document.getElementById("setTimeout")
		const tiempo = document.getElementById("tiempo");
		const mensaje = document.getElementById("mensaje");
		const mensajeMostrar = document.getElementById("mensajeMostrar")

		boton_setTimeout.addEventListener("click",(e)=>{
			setTimeout(function(e) {
				    mensajeMostrar.textContent = mensaje.value;
				}, tiempo.value * 1000)
		})




		const boton_setInterval = document.getElementById("setInterval")
		const boton_clearInterval = document.getElementById("clearInterval")
		const intervalo = document.getElementById("intervalo");
		const mensajeIntervalo = document.getElementById("mensajeIntervalo");

		boton_setInterval.addEventListener("click",(e)=>{
			unIntervalo = setInterval(function(e) {
				    mensajeMostrar.textContent += mensajeIntervalo.value;
				}, intervalo.value * 1000)
		})


		boton_clearInterval.addEventListener("click",(e)=>{
			clearInterval(unIntervalo);
		})





