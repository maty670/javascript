const zona = document.querySelector(".zona_arrastre");
const barra_carga = document.querySelector(".barra_carga");
const progreso = document.querySelector(".progreso");
const porcentaje = document.querySelector(".porcentaje");


zona.addEventListener("dragover",(e)=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#1c2f64");
})

zona.addEventListener("dragleave",(e)=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#5172ce");
})

zona.addEventListener("drop",(e)=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#5172ce");
	cargarArchivo(e.dataTransfer.files[0]);
})


const changeStyle = (obj,color)=>{
	obj.style.color = color;
	obj.style.borderColor =`${color}`;
}



const cargarArchivo = (ar)=>{
	const reader = new FileReader();
	if(ar.type.includes("text")){
		reader.readAsText(ar);
		reader.addEventListener("load",(e)=>{
			document.querySelector(".resultado").textContent = e.currentTarget.result;
		})
	}else if(ar.type.includes("image")){
		reader.readAsDataURL(ar);
		reader.addEventListener("load",(e)=>{
			let url = e.currentTarget.result
			let img = `<img src=${url}>`;
			document.querySelector(".resultado").innerHTML = img;
		})
	}else if(ar.type.includes("video")){
		reader.readAsArrayBuffer(ar);



		//Barra de Carga
		reader.addEventListener("progress",(e)=>{
			pesoTotal = ar.size
			cargado = e.loaded
			let carga = Math.round((cargado / pesoTotal) * 100);

			progreso.style.width = `${carga}%`;
			porcentaje.innerHTML = `${carga}%`;
			
		})


		reader.addEventListener("load",(e)=>{
			let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:"video/mp4"});
			let url = URL.createObjectURL(video);
			let vd = document.createElement("VIDEO");
			vd.setAttribute("src",url);
			document.querySelector(".resultado").appendChild(vd);
			vd.play();
		})
	}
}