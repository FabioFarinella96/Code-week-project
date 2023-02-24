const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const italyCardGen = (data) => {
  const mainSection = qS(".main-section");
  const italySection = qS(".italy-section");
  const cardsContainer = qS(".italy-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  italySection.appendChild(cardsContainer);
  mainSection.appendChild(italySection);
  return mainSection;
};

const franceCardGen = (data) => {
  const mainSection = qS(".main-section");
  const franceSection = qS(".france-section");
  const cardsContainer = qS(".france-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  franceSection.appendChild(cardsContainer);
  mainSection.appendChild(franceSection);
  return mainSection;
};

const spainCardGen = (data) => {
  const mainSection = qS(".main-section");
  const spainSection = qS(".spain-section");
  const cardsContainer = qS(".spain-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  spainSection.appendChild(cardsContainer);
  mainSection.appendChild(spainSection);
  return mainSection;
};

const greeceCardGen = (data) => {
  const mainSection = qS(".main-section");
  const greeceSection = qS(".greece-section");
  const cardsContainer = qS(".greece-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  greeceSection.appendChild(cardsContainer);
  mainSection.appendChild(greeceSection);
  return mainSection;
};

const portugalCardGen = (data) => {
  const mainSection = qS(".main-section");
  const portugalSection = qS(".portugal-section");
  const cardsContainer = qS(".portugal-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  portugalSection.appendChild(cardsContainer);
  mainSection.appendChild(portugalSection);
  return mainSection;
};

const germanyCardGen = (data) => {
  const mainSection = qS(".main-section");
  const germanySection = qS(".germany-section");
  const cardsContainer = qS(".germany-container");
  const cardEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h4");
  const descriptionEl = cE("p");
  const buttonEl = cE("button");

  cardEl.className = "card";
  imageEl.className = "card-image";
  titleEl.className = "card-title";
  descriptionEl.className = "card-description";
  buttonEl.className = "card-button";

  imageEl.src = data.cover_image_url;
  titleEl.textContent = data.name;
  descriptionEl.textContent = `${data.content.substring(0, 150)}...`;
  buttonEl.textContent = "Scopri di più";

  cardEl.append(imageEl, titleEl, descriptionEl, buttonEl);
  cardsContainer.append(cardEl);
  germanySection.appendChild(cardsContainer);
  mainSection.appendChild(germanySection);
  return mainSection;
};

export {
  cE,
  qS,
  italyCardGen,
  franceCardGen,
  spainCardGen,
  greeceCardGen,
  portugalCardGen,
  germanyCardGen,
};
