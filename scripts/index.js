const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (card) {
  console.log(card.name);
});

const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const profileCloseBtn = editProfileModal.querySelector(".popup__close");

profileEditBtn.addEventListener("click", function () {
  handleOpenEditModal();
});
profileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  const name = document.querySelector(".profile__title");
  const description = document.querySelector(".profile__description");
  const editName = document.querySelector(".popup__input_type_name");
  const editDescription = document.querySelector(
    ".popup__input_type_description",
  );
  editName.value = name.textContent;
  editDescription.value = description.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

let formElement = editProfileModal.querySelector("#edit-profile-form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = editProfileModal.querySelector(".popup__input_type_name");
  let jobInput = editProfileModal.querySelector(
    ".popup__input_type_description",
  );

  let newNameValue = nameInput.value;
  let newDescriptionValue = jobInput.value;

  let nameValue = document.querySelector(".profile__title");
  let descriptionValue = document.querySelector(".profile__description");

  nameValue.textContent = newNameValue;
  descriptionValue.textContent = newDescriptionValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
