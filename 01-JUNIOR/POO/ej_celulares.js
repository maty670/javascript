class Celular{
	constructor(color,peso,resPant,resCam,ram){
		this.color=color;
		this.peso=peso;
		this.resolucionPantalla=resPant;
		this.resolucionCamara=resCam;
		this.memoriaRam=ram;
		this.encendido=false;
	}

	botonEncendido(){
		if(this.encendido==false){
			alert("Celular prendido");
			this.encendido=true;
		}else if(this.encendido==true){
			alert("Celular apagado");
			this.encendido=false;	
		}
	}

	reiniciar(){
		if(this.encendido==true){
			alert("Reiniciando...");
		}else{
			alert("No se puede reiniciar, el celular esta apagado");
		}
	}

	tomarFoto(){
		if (this.encendido==true) {
		alert(`Tomando foto en resolucion ${this.resolucionCamara}`);
		}else{
			alert("No se puede tomar foto porque el celular esta apagado");
		}
		
	}


	get getColor(){
		return this.color;
	}

	get getPeso(){
		return this.peso;
	}

	get getResPant(){
		return this.resolucionPantalla;
	}

	get getResCam(){
		return this.resolucionCamara;
	}

	get getMem(){
		return this.memoriaRam;
	}

	get getEncendido(){
		return this.encendido;
	}

	get mostrarInfo(){
		return `
		<br> Color: <b>${this.color} </b><br>
		<br> Peso: <b>${this.peso} </b><br>
		<br> Resolucion de Pantalla: <b>${this.resolucionPantalla} </b><br>
		<br> Resolucion de Camara: <b>${this.resolucionCamara} </b><br>
		<br> Memoria Ram: <b>${this.memoriaRam} </b><br>
		`;		
	}


}

class CelularAltaGama extends Celular{
	constructor(color,peso,resPant,resCam,ram,resCamExt){
		super(color,peso,resPant,resCam,ram);
		this.resolucionCamaraExtra=resCamExt;
	}

	grabarCamaraLenta(){
		alert("Grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Iniciando el reconocimiento facial");
	}

		get mostrarInfo(){
		return `
		<br> Color: <b>${this.color} </b><br>
		<br> Peso: <b>${this.peso} </b><br>
		<br> Resolucion de Pantalla: <b>${this.resolucionPantalla} </b><br>
		<br> Resolucion de Camara: <b>${this.resolucionCamara} </b><br>
		<br> Memoria Ram: <b>${this.memoriaRam} </b><br>
		<br> Resolucion de Camara Extra: <b>${this.resolucionCamaraExtra} </b><br>
		`;		
	}
}


















celular1 = new Celular("rojo","150g","5'","full hd","2GB");
celular2 = new CelularAltaGama("blanco","200g","5.5'","4K","4GB","hd")

/*
celular1.botonEncendido();
celular1.botonEncendido();
celular1.botonEncendido();
celular1.reiniciar();
celular1.tomarFoto();

celular2.botonEncendido();
celular2.botonEncendido();
celular2.botonEncendido();
celular2.reiniciar();
celular2.tomarFoto();

celular2.reconocimientoFacial();

*/



document.write(`<u>Celular 1</u><br> ${celular1.mostrarInfo} <br><br><br>`);
document.write(`<u>Celular 2</u><br>${celular2.mostrarInfo}`);   //Si no estuviera definido el mostrarInfo en CelularAltaGama, iria al metodo de la clase superior


//5:01:30//