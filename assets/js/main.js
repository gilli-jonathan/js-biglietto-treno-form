console.log("prova");

//TASK 1

const ageEl = document.getElementById("age");
const kmEl = document.getElementById("km");
const btnEl = document.getElementById("btn");

const sconto_minori = 0.2;
const sconto_anziani = 0.4;

btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const user_age = ageEl.value;
  const user_km = kmEl.value;
  console.log(user_age);
  console.log(user_km);

  const price = user_km * 0.21;
  let final_price = 0;

  if (user_age < 18) {
    //calcolo prezzo per mocciosi
    final_price = (price - price * sconto_minori).toFixed(2);
    console.log(final_price);
  } else if (user_age > 65) {
    //calcolo prezzo per nonnetti
    final_price = (price - price * sconto_anziani).toFixed(2);
    console.log(final_price);
  } else {
    //prezzo pieno
    final_price = price;
    final_price = final_price.toFixed(2);
    console.log(final_price);
  }

  //parte della task 2
  priceEl.innerText = `ma cosa più importante preparati a pagare: ${final_price} $ ;-)`;
  infoEL.innerText = `ciao viaggiatore, complimenti per come porti i tuoi ${user_age} anni, prepara un cuscino per fare questi ${user_km} km`;
});

/*
MILESTONE 2:
realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//TASK 2

const priceEl = document.getElementById("price_html");
const infoEL = document.getElementById("info_recap");
