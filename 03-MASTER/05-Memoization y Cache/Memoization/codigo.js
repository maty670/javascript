const hacerAlgo = num =>{
	const a = 20;
	const b = 12;
	let c = 0;
	for (let i = 0; i <= num; i++) {
		for (let j = 0; j <= num; j++) {
			c += a*b;
		}
	}
	return c;
}





// ---------------------------Sin utilizar el Memoization------------------------------------
console.log("Sin Memoization")

const tiempo1 = new Date();
hacerAlgo(60000);
console.log(new Date() - tiempo1 + " segundos");


const tiempo2 = new Date();
hacerAlgo(60000);
console.log(new Date() - tiempo2 + " segundos");



const tiempo3 = new Date();
hacerAlgo(60000);
console.log(new Date() - tiempo3 + " segundos");



const tiempo4 = new Date();
hacerAlgo(60000);
console.log(new Date() - tiempo4 + " segundos");

console.log("------------------------")

//----------------------------------------------------------------------------------------------





// ---------------------------Con el Memoization------------------------------------------------

let cache = [];

const memoizer = func =>{
	return e =>{
		const index = e.toString();
		if(cache[index] == undefined){
			cache[index] = func(e);
		}
		return cache[index];
	}
}


const memo = memoizer(hacerAlgo);


console.log("Con Memoization")

const tiempo5 = new Date();
memo(60000);
console.log(new Date() - tiempo5 + " segundos");


const tiempo6 = new Date();
memo(60000);
console.log(new Date() - tiempo6 + " segundos");



const tiempo7 = new Date();
memo(60000);
console.log(new Date() - tiempo7 + " segundos");



const tiempo8 = new Date();
memo(60000);
console.log(new Date() - tiempo8 + " segundos");

console.log("------------------------")