console.log("prova");

const ageEl = document.getElementById("age");
const kmEl = document.getElementById("km");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const user_age = ageEl.value;
  const user_km = kmEl.value;
  console.log(user_age);
});

/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
