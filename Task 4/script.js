/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    createCarList(data);
  })
  .catch((err) => console.log(err));

function createCarList(data) {
  const output = document.getElementById("output");
  data.forEach((cars) => {
    console.log(cars);
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("list-style");
    output.appendChild(contentDiv);
    const brand = document.createElement("h2");
    brand.textContent = `Automobilis: ${cars.brand}`;
    const models = document.createElement("p");
    models.textContent = `Modeliai: ${cars.models.join(", ")}`;
    contentDiv.appendChild(brand);
    contentDiv.appendChild(models);
  });
}
