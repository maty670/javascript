const actualizarHora = ()=>{
	const time = new Date();

	let hora = añadirCeros(time.getHours());
	let minutos = añadirCeros(time.getMinutes());
	let segundos = añadirCeros(time.getSeconds());

	let dia = time.getDate();
	let mes = time.getMonth()+1;
	let año = time.getFullYear();

	document.querySelector(".hora").textContent = `${hora}:`;
	document.querySelector(".min").textContent = `${minutos}:`;
	document.querySelector(".seg").textContent = `${segundos}`;

	document.querySelector(".dia").textContent = `${dia}/`;
	document.querySelector(".mes").textContent = `${mes}/`;
	document.querySelector(".año").textContent = `${año}`;


}


const añadirCeros = (n) =>{
	if (n.toString().length<2)
		return "0".concat(n);
	else
		return n;
}

actualizarHora();
setInterval(actualizarHora,1000);