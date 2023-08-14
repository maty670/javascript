class Animal{
	constructor(especie,edad,color){
		this.especie=especie;
		this.edad=edad;
		this.color=color;
	}

	get getEspecie(){
		return this.especie;
	}
	get getEdad(){
		return this.edad;
	}
	get getColor(){
		return this.color;
	}

	get getInfo(){
		return `Soy un ${this.especie},
		de ${this.edad} años, de color ${this.color} <br>`;
	}

}


class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);  //Heredar los atributos de su clase superior
		this.raza=raza;
	}
	static ladrar(){    //Con el static no es necesario crear al objeto con el constructor y todos sus atributos para poder usar el metodo ladrar
		alert("waw");
	}

	get getRaza(){
		return this.raza;
	}

	set setRaza(Nuevaraza){
		this.raza=Nuevaraza;
	}
}


const perro = new Perro("perro",5,"marron","doberman");


document.write(`${perro.getInfo} y de raza ${perro.getRaza} <br><br>`);





perro.setRaza = "caniche";
document.write(`${perro.getInfo} y de raza ${perro.getRaza} <br>`);


//Perro.ladrar();