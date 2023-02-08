//console.log("Justin Reyes");

//Palindroma

// //Chiedere all’utente di inserire una parola

const userWord = prompt("Inserisci una parola").toLowerCase();
console.log(userWord);

let wordList = [];

for (let i = 0; i < userWord.length; i++) {
	let letter = userWord[i];
	wordList.push(letter);
	console.log(wordList);
}

let wordReverseList = [];

for (let i = wordList.length - 1; i >= 0; i--) {
	wordReverseList.push(wordList[i]);
	console.log(wordReverseList);
}

let wordString = "";

for (let i = 0; i < wordList.length; i++) {
	let listToString = wordList[i];
	wordString += listToString;
	console.log(wordString);
}

let wordReverseString = "";

for (let i = wordReverseList.length - 1; i >= 0; i--) {
	let listToString = wordList[i];
	wordReverseString += listToString;
	console.log(wordReverseString);
}

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
	if (wordString === wordReverseString) {
		return true;
	}
}
