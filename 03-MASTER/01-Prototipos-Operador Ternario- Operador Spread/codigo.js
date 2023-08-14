//------------------------------------------------Prototipos--------------------------------------
class Objeto {
	constructor(){};

	hablar(){
		console.log("asd");
	}

}

const objeto = new Objeto();


let arr = [];

arr.__proto__ = objeto;

objeto.hablar();
arr.hablar();















objeto.__proto__.hablar = ()=>{
	console.log("hablando desde afuera");
}



objeto.hablar();
arr.hablar();









console.log("--------------------------------------------------------------");








//---------------Operador ternario-------------------------------------------------------


let edad = Math.floor(Math.random() * 30);

console.log("Tiene: " + edad + " años");

(edad > 18) ? ( 
				console.log("Es mayor de edad"),
			    console.log("Puede pasar")
			   )
			:   console.log("Es menor de edad");






console.log("---------------------------------------------");




//---------------Operador Spread-------------------------------------------------------
//  ...arr = arr[0] arr[1] arr[2] ......

let array1 = ["manzana","pera","naranja"];
let array2 = ["sandia","kiwi","durazno"];
let array3;

array3 = [...array1,...array2];

console.log(array3);

console.log("-----------------");


const sumar = (...num)=>{
	let resultado = 0;
	for(i=0;i<num.length;i++)
		resultado+=num[i];
	console.log(resultado);
}

sumar(5,6,9,2,7,3);


