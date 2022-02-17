// https://rickandmortyapi.com/api
let brojac = 1;
const url = "https://rickandmortyapi.com/api/character/?page=";
const container = document.querySelector(".container");
const pagination = document.querySelector(".pagination");

function fetchData() {
  fetch(url + brojac)
    .then((res) => res.json())
    .then((res) => createLayout(res));
}

function createLayout(res) {
  let buttonManje = document.createElement("button");
  let buttonVece = document.createElement("button");
  let card = document.createElement("div");
  let vidljivaPaginacija = [];

  buttonManje.textContent = "<";
  buttonVece.textContent = ">";

  buttonManje.className = "buttonManje";
  buttonVece.className = "buttonVece";

  buttonVece.addEventListener("click", () => {
    brojac += 1;
    fetchData();
  });

  console.log(res);

  card.appendChild(buttonManje);
  for (let i = 0; i < 6; i++) {
    let dugme = document.createElement("button");
    vidljivaPaginacija.push(dugme);
    dugme.textContent = "";
    card.appendChild(vidljivaPaginacija[i]);
  }
  card.appendChild(buttonVece);

  pagination.appendChild(card);

  res.results.map((e) => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let pic = document.createElement("img");
    let button = document.createElement("button");

    card.className = "kartice";
    button.className = "subjectinfo";
    button.textContent = "SUBJECT INFO";
    name.textContent = e.name;
    pic.setAttribute("src", e.image);

    button.addEventListener("click", () => {
      sessionStorage.setItem("id", e.id);
      window.open("./index2.html");
    });

    card.appendChild(pic);
    card.appendChild(name);
    card.appendChild(button);

    container.appendChild(card);
  });
}

window.addEventListener("load", fetchData);
