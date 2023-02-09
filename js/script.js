//console.log("Justin Reyes");

//Palindroma

// //Chiedere all’utente di inserire una parola

const userWord = prompt("Inserisci una parola").toLowerCase();
console.log(userWord);


// Creare una funzione per capire se la parola inserita è palindroma

// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no

if (printResult(userWord)) {
	toPrint(`<div>${userWord} è una parola palindroma!</div>`);
} else toPrint(`<div>${userWord} non è una parola palindroma!</div>`);

//FUNZIONI

function toPrint(print) {
	document.getElementById("result").innerHTML += print;
}

function printResult(word) {

	let wordReverse = ''

	for (let i = word.length - 1; i >= 0; i--) {
		const reverse = word.charAt(i);
		wordReverse += reverse
		console.log(reverse, wordReverse)
	}
	
	const result = word === wordReverse
	return result
	
}
