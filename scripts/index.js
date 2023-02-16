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

const editModal = document.querySelector("#editModal");

const addModal = document.querySelector("#addModal");

const editButton = document.querySelector("#openEditModal");

const addButton = document.querySelector("#openAddModal");

const closeEditButton = document.querySelector("#closeEditModal");

const closeAddButton = document.querySelector("#closeAddModal");

const nameInput = document.querySelector("#nameInput");

const jobInput = document.querySelector("#descriptionInput");

const profileFormElement = document.querySelector('[name="editForm"]');

const cardsFormElement = document.querySelector('[name="addForm"]');

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

function createCard(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const cardsElementImage = cardsElement.querySelector(".cards__image");
  const cardsElementTitle = cardsElement.querySelector(".cards__title");
  const likeButton = cardsElement.querySelector(".cards__like-button");
  const deleteButton = cardsElement.querySelector(".cards__delete-button");
  cardsElementImage.src = data.link;
  cardsElementImage.alt = data.name;
  cardsElementTitle.textContent = data.name;
  likeButton.addEventListener(
    "click",
    (handleLikeButton = (evt) => {
      evt.target.classList.toggle("cards__like-button_is-active");
    })
  );
  deleteButton.addEventListener(
    "click",
    (handleDeleteCard = (evt) => {
      evt.target.closest(".cards__element").remove();
    })
  );

  cardsElementImage.addEventListener(
    "click",
    (handlePreviewPicture = () => {
      cardPreviewImage.src = data.link;
      cardPreviewImage.alt = data.name;
      cardPreviewCaption.textContent = data.name;
      openModal(cardPreviewModal);
    })
  );

  cardPreviewCloseButton.addEventListener("click", () =>
    closeModal(cardPreviewModal)
  );

  return cardsElement;
}

editButton.addEventListener("click", () => {
  function fillProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
  fillProfileForm();
  openModal(editModal);
});

closeEditButton.addEventListener("click", () => closeModal(editModal));

profileFormElement.addEventListener(
  "submit",
  (handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeModal(editModal);
  })
);

addButton.addEventListener("click", () => openModal(addModal));

closeAddButton.addEventListener("click", () => closeModal(addModal));

cardsFormElement.addEventListener(
  "submit",
  (handleCardsFormSubmit = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const link = evt.target.link.value;
    const createCardElement = createCard({
      name: title,
      link: link,
    });
    cardsList.prepend(createCardElement);
    closeModal(addModal);
    cardsFormElement.reset();
  })
);

initialCards.forEach(function (data) {
  cardsList.prepend(createCard(data));
});
