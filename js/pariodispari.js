// PARI O DISPARI
//L’utente sceglie pari o dispari

let userChoice;

do {
	userChoice = prompt("Scegli pari o dispari").toLowerCase();
	console.log(userChoice);
} while (userChoice != "pari" && userChoice != "dispari");

//e inserisce un numero da 1 a 5.

let userNumber;

do {
	userNumber = parseInt(prompt("Inerisci un numero da 1 a 5"));
	console.log(userNumber);
} while (isNaN(userNumber) || userNumber > 5);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const pcNumber = randomNumber();
console.log(pcNumber);

//Sommiamo i due numeri

const sum = userNumber + pcNumber;
console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Comunichiamo all’utente chi ha vinto. (decidete voi come)

if (
	(evenOddCheck(sum) && userChoice === "pari") ||
	(evenOddCheck(sum) === false && userChoice === "dispari")
) {
	toPrint(`<div>HAI VINTO!</div>`);
} else {
	toPrint(`<div>HAI PERSO!</div>`);
}

//FUNZIONI

function randomNumber() {
	const number = Math.floor(Math.random() * 5 + 1);
	return number;
}

function evenOddCheck(total) {
	let resto = total % 2;
	return resto === 0;
}

function toPrint(print) {
	document.getElementById("result").innerHTML += print;
}
