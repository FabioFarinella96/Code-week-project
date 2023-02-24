import { cE, qS } from "./utils.js";
import { GET } from "./api.js";

let countries;

GET().then((data) => {
  countries = data;
});

const addToList = (data) => {
  const container = cE("div");
  const card = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");

  container.className = "container";
  card.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 250)}...`;

  card.append(imageEl, titleEl, descriptionEl);
  container.appendChild(card);

  return container;
};

const inputEl = qS("#input");
const addToListBtn = qS("#add-to-list-btn");
const clearListBtn = qS("#clear-list-btn");

let input;

addToListBtn.addEventListener("click", () => {
  input = inputEl.value;

  const filteredCountries = countries.filter((country) => {
    if (input === country.name.toLowerCase()) {
      return country.name;
    } else if (input === country.country.name.toLowerCase()) {
      return country.country.name;
    }
  });

  filteredCountries.map((country) => {
    document.body.appendChild(addToList(country));
  });

  inputEl.value = "";

  localStorage.setItem("countries", filteredCountries);

  clearListBtn.addEventListener("click", () => {
    if (qS(".container")) {
      const container = qS(".container");
      container.remove();
    }

    localStorage.clear("countries", filteredCountries);
  });
});

// bottone back-to-top

const backToTopEl = qS(".comeback");

backToTopEl.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
