/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formValidation = document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    calculateValues(inputValue);
  });

function calculateValues(values) {
  const lb = (values * 2.2046).toFixed(2);
  const g = (values / 0.001).toFixed(2);
  const oz = (values * 35.274).toFixed(2);
  const selectOutPut = document.getElementById("output");
  const p = document.createElement("p");
  p.style.color = "rgb(255,255,255)";
  p.style.fontSize = "2rem";
  p.textContent = `Svarai: ${lb} Gramai: ${g} Uncijos: ${oz}`;
  selectOutPut.appendChild(p);
}
