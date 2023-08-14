const materias = {
	fisica: [90,6,4,'fisica'],      // % de asistencia,promedio y cantidad TP aprobados
	matematica: [84,8,8,'matematica'],
	logica: [92,8,4,'logica'],
	quimica: [96,8,4,'quimica'],
	calculo: [91,6,3,'calculo'],
	programacion: [79,7,4,'programacion'],
	biologia: [75,9,1,'biologia'],
	bbdd: [98,9,1,'bbdd'],
	algebra: [100,10,4,'algebra']
}

function aprobo (){
	for(materia in materias){

		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		let nomMateria = materias[materia][3];

		if (asistencias>=90){
			console.log(nomMateria);
			console.log("%c   Asistencias en orden","color:green");
		}else{
			console.log(materias[materia][3]);
			console.log("%c   Falta de asistencias","color:red");
		}


		if(promedio>=6){
			console.log("%c   Promedio en orden","color:green");
		}else{
			console.log("%c   Promedio desaprobado","color:red");
		}

		if(trabajos>=3){
			console.log("%c   Trabajos Practicos en orden","color:green");
		}else{
			console.log("%c   Trabajos Practicos desaprobados","color:red");
		}
	}
} 

aprobo();


