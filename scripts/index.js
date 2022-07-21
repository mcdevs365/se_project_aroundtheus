const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const modal = document.querySelector(".modal");
const editButton = document.querySelector("#openModal");
const closeButton = document.querySelector("#closeModal");

function openModal() {
  modal.classList.add("modal__opened");
}

function closeModal() {
  modal.classList.remove("modal__opened");
}

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

const profileFormElement = document.querySelector(".modal__form");

const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#descriptionInput");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const cardsTemplate =
  document.querySelector("#cardsTemplate").content.firstElementChild;

const cardsList = document.querySelector(".cards__list");

initialCards.forEach(function getCardsElement(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const cardsElementImage = cardsElement.querySelector(
    ".cards__element__image"
  );
  const cardsElementTitle = cardsElement.querySelector(
    ".cards__element__title"
  );

  cardsElementImage.src = data.link;
  cardsElementImage.alt = data.name;
  cardsElementTitle.textContent = data.name;

  cardsList.appendChild(cardsElement);
});
