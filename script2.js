var body = document.querySelector("body");
const url = "https://rickandmortyapi.com/api/character/";

function showChar() {
  fetch(url + sessionStorage.getItem("id"))
    .then((res) => res.json())
    .then((res) => start(res));
}

function start(res) {
  let card = document.createElement("div");
  let name = document.createElement("h3");
  let pic = document.createElement("img");
  let gender = document.createElement("p");
  let species = document.createElement("p");
  let status = document.createElement("p");

  card.className = "kartica";
  pic.className = "bigpic";
  name.className = "ime";
  gender.className = "pol";
  species.className = "vrsta";
  status.className = "status";

  name.textContent = res.name;
  pic.setAttribute("src", res.image);
  gender.textContent = "Gender: " + res.gender;
  species.textContent = "Species: " + res.species;
  status.textContent = "Status: " + res.status;

  card.appendChild(name);
  card.appendChild(gender);
  card.appendChild(species);
  card.appendChild(status);
  card.appendChild(pic);
  
  body.appendChild(card);
}

window.addEventListener("load", showChar);
