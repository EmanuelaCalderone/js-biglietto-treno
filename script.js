//ISTRUZIONI

/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

//Input:
// Il programma chiede i km
// Il programma l'età

//Calcolo del prezzo:
// Prezzo al km
// 20% se età < 18
// 20% se età > 65

//Output:
// prezzo finale con due decimali (toFixed(2))

let km = prompt("Inserire km");
let eta = prompt("Inserire età");

let prezzoIntero = 0.21 * km;

let sconto20 = (prezzoIntero * 0.20); 
let sconto40 = (prezzoIntero * 0.40);

let prezzoMinorenni = (prezzoIntero - sconto20);
let prezzoOver65 = (prezzoIntero - sconto40);

let prezzoFinale;

if (eta < 18) {
    prezzoFinale = prezzoMinorenni; 
}

else if (eta >= 18 && eta < 65) {
    prezzoFinale = prezzoIntero;
}
    
else if (eta >= 65) {
    prezzoFinale = prezzoOver65;
}

console.log("Il prezzo del tuo biglietto è di: € " + prezzoFinale.toFixed(2));

