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
