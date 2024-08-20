/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 20;
const num2 = 30;
let numMax;

if (num1 > num2) {
  numMax = num1;
  console.log(numMax);
} else if (num2 > num1) {
  numMax = num2;
  console.log(numMax);
} else {
  console.log("num1:" + "[" + num1 + "]" + " è uguale a num2:[" + num2 + "]");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const int = 6;

if (int !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const dividendo = 195;

if (dividendo % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num3 = 10;
const num4 = 2;

if (num3 === 8 || num4 === 8) {
  console.log("il valore di uno dei 2 numeri è 8");
} else if (num3 + num4 === 8) {
  console.log("la somma dei due numeri è 8");
} else if (num3 - num4 === 8) {
  console.log("la differenza della const num3 con la const num4 è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const saldoProd1 = 30;
const saldoProd2 = 30;
const totalShoppingCart = saldoProd1 + saldoProd2;
if (totalShoppingCart > 50) {
  console.log("la spedizione è gratuita");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA  */
const shoppingCartPrices = [50, 50];
let tot = 0;
shoppingCartPrices.forEach((price) => {
  tot += price; //l' ho fatto con un array che rappresenta il carrello per renderlo più divertente
});

const totalShoppingCart2 = tot * (1 - 0.2); //sono abituato ad usate i prezzi in centesimi ma l' esercizio specifica 50 quindi...
console.log(totalShoppingCart2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 30;
const num6 = 50;
const num7 = 60;

if (num5 >= num6 && num5 >= num7 && num6 >= num7) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num5, num6, num7");
} else if (num5 >= num6 && num5 >= num7 && num7 >= num6) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num5, num7, num6");
} else if (num6 >= num5 && num6 >= num7 && num5 >= num7) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num6, num5, num7");
} else if (num6 >= num5 && num6 >= num7 && num7 >= num5) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num6, num7, num5");
} else if (num7 >= num5 && num7 >= num6 && num5 >= num6) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num7, num5, num6");
} else if (num7 >= num5 && num7 >= num6 && num6 >= num5) {
  console.log("L'ordine delle 3 variabili in ordine decrescente del loro valore è: num7, num6, num5");
} // so uscito pazzo

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const variabile = "qwerty";

if (typeof variabile === "number") {
  console.log("La variabile è un numero.");
} else {
  console.log("La variabile non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num8 = 31;

if (num8 % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newArr = [];
for (let index = 0; index < 10; index++) {
  newArr.push(index + 1);
}
console.log(newArr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

newArr[newArr.length - 1] = 100;
console.log(newArr);
