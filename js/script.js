// @qui Ciao ragazze e ciao ragazzi!
// Esercizio di oggi: :dado_da_gioco: Palindroma e Pari e dispari :dado_da_gioco:
// nome repo: js-paliedispari
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// PARI E DISPARI

let numberInputUser = parseInt(prompt("Inserisci un numero tra 1 e 5"));

if((numberInputUser > 5) && (numberInputUser < 1)){
    console.log("Hai inserito un numero maggiore di 5 o minore di 1 inserisci un numero valido")
}
else{
    console.log("hai inserito un numero rispettando il range richiesto");
}
let sum = 0;


function isNumberRandom (checkRangeNumber){

    let numberRandom = Math.floor(Math.random() * 5 + 1);

    return checkRangeNumber === numberRandom;
}









////////////////////////////////////*

// PAROLA PALINDROMA


// let inputNameUser = prompt("inserisci una parola");

// if(isTheWordPalindrom (inputNameUser)){
//     console.log("la parola inserita è palindroma");
// }
// else{
//     console.log("la parola inserita non è palindroma");
// }




// function isTheWordPalindrom(checkPalindromWord){
//     let parolaInversa = '';
  
//     let i = checkPalindromWord.length - 1;
  
//     while (i >= 0) {
//       parolaInversa += checkPalindromWord[i];
//       i--;
//     }

//     return parolaInversa === checkPalindromWord;
  
//   }

////////////////////////////////////*