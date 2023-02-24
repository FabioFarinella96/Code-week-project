import {
  italyCardGen,
  franceCardGen,
  spainCardGen,
  portugalCardGen,
  greeceCardGen,
  germanyCardGen,
  cE,
  qS,
} from "./utils.js";
import { GET } from "./api.js";

// dati filtrati

GET().then((data) => {
  const italyDataFiltered = data.filter((country) => country.country.id === 82);
  italyDataFiltered.pop();
  italyDataFiltered.map((element) =>
    document.body.appendChild(italyCardGen(element))
  );
});

GET().then((data) => {
  const dataFiltered = data.filter((country) => country.country.id === 60);

  dataFiltered.map((element) =>
    document.body.appendChild(franceCardGen(element))
  );
});

GET().then((data) => {
  const spainDataFiltered = data.filter(
    (country) => country.country.id === 161
  );
  spainDataFiltered.pop();
  spainDataFiltered.map((element) =>
    document.body.appendChild(spainCardGen(element))
  );
});

GET().then((data) => {
  const dataFiltered = data.filter((country) => country.country.id === 139);
  dataFiltered.map((element) =>
    document.body.appendChild(portugalCardGen(element))
  );
});

GET().then((data) => {
  const dataFiltered = data.filter((country) => country.country.id === 66);
  dataFiltered.map((element) =>
    document.body.appendChild(greeceCardGen(element))
  );
});

GET().then((data) => {
  const dataFiltered = data.filter((country) => country.country.id === 64);
  dataFiltered.map((element) =>
    document.body.appendChild(germanyCardGen(element))
  );
});

// ricerca nazioni e città

const mainSection = qS(".main-section");
let countries;

GET().then((data) => {
  countries = data;
});

const researchResult = (data) => {
  mainSection.innerHTML = "";
  const researchContainer = cE("div");
  const researchCard = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  researchContainer.className = "research-container";
  researchCard.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 250)}...`;
  buttonEl.textContent = "Scopri di più";

  researchCard.append(imageEl, titleEl, descriptionEl, buttonEl);
  researchContainer.appendChild(researchCard);
  return researchContainer;
};

const inputEl = qS("#input");
const searchButton = qS(".searchButton");

let input;

searchButton.addEventListener("click", () => {
  input = inputEl.value;

  if (qS(".research-container")) {
    const researchContainer = qS(".research-container");
    researchContainer.remove();
  }

  const filteredCountries = countries.filter((country) => {
    if (input === country.name.toLowerCase()) {
      return country.name;
    } else if (input === country.country.name.toLowerCase()) {
      return country.country.name;
    }
  });

  filteredCountries.map((country) => {
    document.body.appendChild(researchResult(country));
  });

  inputEl.value = "";

  console.log(filteredCountries);
});

// bottone back-to-top

const backToTopEl = qS(".comeback");

backToTopEl.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

export { researchResult };
