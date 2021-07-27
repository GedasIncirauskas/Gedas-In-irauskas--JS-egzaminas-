/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("btn").addEventListener("click", () => {
      createUsertList(data);
    });
  })
  .catch((err) => console.log(err));

function createUsertList(data) {
  const showUsertText = document.getElementById("message");
  const output = document.getElementById("output");
  if (!showUsertText.lentgh > 0) {
    showUsertText.textContent = "";
  }
  data.forEach((item) => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("list-style");
    output.appendChild(contentDiv);
    const p = document.createElement("p");
    p.textContent = `Username: ${item.login}`;
    const userImg = document.createElement("img");
    userImg.src = `${item.avatar_url}`;
    userImg.alt = `${item.login}`;
    userImg.style.width = "10rem";
    contentDiv.appendChild(p);
    contentDiv.appendChild(userImg);
  });
}
