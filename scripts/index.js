const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];

const modal = document.querySelector(".modal");

const editButton = document.querySelector("#openModal");

const closeButton = document.querySelector("#closeModal");

const nameInput = document.querySelector("#nameInput");

const jobInput = document.querySelector("#descriptionInput");

const profileFormElement = document.querySelector(".modal__form");

const profileName = document.querySelector(".profile__title");

const profileJob = document.querySelector(".profile__description");

const cardsTemplate =
  document.querySelector("#cardsTemplate").content.firstElementChild;

const cardsList = document.querySelector(".cards__list");

function openModal() {
  modal.classList.add("modal_opened");
}

function closeModal() {
  modal.classList.remove("modal_opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

editButton.addEventListener("click", () => {
  fillProfileForm();
  openModal();
});

closeButton.addEventListener("click", closeModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function createCard(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const cardsElementImage = cardsElement.querySelector(".card__image");
  const cardsElementTitle = cardsElement.querySelector(".card__title");

  cardsElementImage.src = data.link;
  cardsElementImage.alt = data.name;
  cardsElementTitle.textContent = data.name;

  return cardsElement;
}

function renderCard(data) {
  const cardsRender = createCard(data);
  cardsList.prepend(cardsRender);
}

initialCards.forEach(renderCard);
