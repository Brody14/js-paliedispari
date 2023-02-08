console.log('Justin Reyes')

//Palindroma


//Chiedere all’utente di inserire una parola

const userWord = prompt('Inserisci una parola').toLowerCase();
console.log(userWord);

const wordList = [];

for(let i = 0; i < userWord.length; i++) {
    let letter = userWord[i];
    wordList.push(letter);
    console.log(wordList)
}

const wordReverseList = [...wordList].reverse();
console.log(wordReverseList);

//Creare una funzione per capire se la parola inserita è palindroma


 let wordListJoined = joined(wordList)
 console.log(wordListJoined);

 let wordReverseListJoined = joined(wordReverseList)
 console.log(wordReverseListJoined);

// //Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no

 if(printResult(userWord)){
     toPrint(`<div>${userWord} è una parola palindroma!</div>`)
 } else toPrint(`<div>${userWord} non è una parola palindroma!</div>`)


// //FUNZIONI

 function joined(list) {
     let join = list.join()
     return join
 }

 function toPrint(print){
     document.getElementById('result').innerHTML += print;
 }

 function printResult(word){

     if(wordListJoined === wordReverseListJoined) {
        return true
     }

 }