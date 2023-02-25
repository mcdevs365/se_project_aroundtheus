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

const editProfileModal = document.querySelector("#editProfileModal");

const addCardModal = document.querySelector("#addCardModal");

const editProfileButton = document.querySelector("#openEditProfileModal");

const addCardButton = document.querySelector("#openAddCardModal");

const closeEditProfileButton = document.querySelector("#closeEditProfileModal");

const closeAddCardButton = document.querySelector("#closeAddCardModal");

const profileNameInput = document.querySelector("#profileNameInput");

const profileJobInput = document.querySelector("#profileDescriptionInput");

const profileFormElement = document.querySelector('[name="editProfileForm"]');

const cardFormElement = document.querySelector('[name="addCardForm"]');

const profileName = document.querySelector(".profile__title");

const profileJob = document.querySelector(".profile__description");

const cardsTemplate =
  document.querySelector("#cardsTemplate").content.firstElementChild;

const cardsList = document.querySelector(".cards__list");

const cardPreviewImage = document.querySelector(".preview__image");

const cardPreviewCaption = document.querySelector(".preview__caption");

const cardPreviewModal = document.querySelector("#previewModal");

const cardPreviewCloseButton = cardPreviewModal.querySelector(
  ".preview__exit-button"
);

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleLikeButton(evt) {
  evt.target.classList.toggle("cards__like-button_is-active");
}

function handleDeleteCard(evt) {
  evt.target.closest(".cards__element").remove();
}

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closeModal(editProfileModal);
}

function handleCardsFormSubmit(evt) {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const cardElement = createCard({
    name: title,
    link: link,
  });
  cardsList.prepend(cardElement);
  closeModal(addCardModal);
  cardFormElement.reset();
}

function createCard(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const cardsElementImage = cardsElement.querySelector(".cards__image");
  const cardsElementTitle = cardsElement.querySelector(".cards__title");
  const likeButton = cardsElement.querySelector(".cards__like-button");
  const deleteButton = cardsElement.querySelector(".cards__delete-button");
  cardsElementImage.src = data.link;
  cardsElementImage.alt = data.name;
  cardsElementTitle.textContent = data.name;
  likeButton.addEventListener("click", handleLikeButton);
  deleteButton.addEventListener("click", handleDeleteCard);

  cardsElementImage.addEventListener("click", () => {
    cardPreviewImage.src = data.link;
    cardPreviewImage.alt = data.name;
    cardPreviewCaption.textContent = data.name;
    openModal(cardPreviewModal);
  });

  return cardsElement;
}

cardPreviewCloseButton.addEventListener("click", () =>
  closeModal(cardPreviewModal)
);

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  openModal(editProfileModal);
});

closeEditProfileButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

addCardButton.addEventListener("click", () => openModal(addCardModal));

closeAddCardButton.addEventListener("click", () => closeModal(addCardModal));

cardFormElement.addEventListener("submit", handleCardsFormSubmit);

initialCards.forEach((data) => {
  cardsList.prepend(createCard(data));
});
