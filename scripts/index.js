// ==========================================
// DATOS INICIALES DE LAS TARJETAS
// ==========================================
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

// ==========================================
// REFERENCIAS AL DOM: PERFIL / POPUP DE EDICIÓN
// ==========================================
const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const profileCloseBtn = editProfileModal.querySelector(".popup__close");
const formElement = editProfileModal.querySelector("#edit-profile-form");

// ==========================================
// REFERENCIAS AL DOM: LISTA Y PLANTILLA DE TARJETA
// ==========================================
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

// ==========================================
// REFERENCIAS AL DOM: POPUP "AGREGAR TARJETA"
// ==========================================
const newCardPopup = document.querySelector("#new-card-popup");
const newCardCloseBtn = newCardPopup.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const placeNameInput = newCardForm.querySelector(
  ".popup__input_type_card-name",
);
const placeLinkInput = newCardForm.querySelector(".popup__input_type_url");

// ==========================================
// REFERENCIAS AL DOM: POPUP DE IMAGEN AMPLIADA
// ==========================================
const imagePopup = document.querySelector("#image-popup");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");

// ==========================================
// FUNCIONES GENÉRICAS PARA ABRIR/CERRAR MODALES
// ==========================================
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// ==========================================
// LÓGICA DEL POPUP DE EDICIÓN DE PERFIL
// ==========================================

// Precarga los inputs con los datos actuales
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

// Abre el modal de edición ya con los campos precargados
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

// Toma los valores del formulario y actualiza el perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = editProfileModal.querySelector(".popup__input_type_name");
  const jobInput = editProfileModal.querySelector(
    ".popup__input_type_description",
  );

  const newNameValue = nameInput.value;
  const newDescriptionValue = jobInput.value;

  const nameValue = document.querySelector(".profile__title");
  const descriptionValue = document.querySelector(".profile__description");

  nameValue.textContent = newNameValue;
  descriptionValue.textContent = newDescriptionValue;

  closeModal(editProfileModal);
}

// Listeners del popup de edición de perfil
profileEditBtn.addEventListener("click", function () {
  handleOpenEditModal();
});
profileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});
formElement.addEventListener("submit", handleProfileFormSubmit);

// ==========================================
// LÓGICA DE TARJETAS (crear y renderizar)
// ==========================================

// Construye el elemento de una tarjeta a partir de la plantilla
function getCardElement(name, link) {
  const cardElement = cardTemplate.querySelector(`.card`).cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.alt = name;
  cardImage.src = link;

  likeButton.addEventListener("click", handleLikeButtonClick);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  cardImage.addEventListener("click", function () {
    handleCardImageClick(name, link);
  });

  return cardElement;
}

// Crea una tarjeta y la agrega al contenedor indicado
function renderCard(name, link, cardContainer) {
  const cardElement = getCardElement(name, link);
  cardContainer.prepend(cardElement);
}

// ==========================================
// LÓGICA DEL POPUP "AGREGAR TARJETA"
// ==========================================

// Abre el popup de nueva tarjeta reutilizando openModal
function handleOpenNewCardModal() {
  openModal(newCardPopup);
}

// Crea la tarjeta a partir de los inputs del formulario y cierra el popup
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeNameInput.value, placeLinkInput.value, cardsList);
  newCardForm.reset();
  closeModal(newCardPopup);
}

// Listeners del popup "Agregar tarjeta"
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", handleOpenNewCardModal);
newCardCloseBtn.addEventListener("click", function () {
  closeModal(newCardPopup);
});
newCardForm.addEventListener("submit", handleCardFormSubmit);

// ==========================================
// INICIALIZACIÓN: renderiza las tarjetas iniciales
// ==========================================
initialCards.forEach(function ({ name, link }) {
  renderCard(name, link, cardsList);
});

// ==========================================
// LÓGICA DE BOTÓN "ME GUSTA"
// ==========================================

function handleLikeButtonClick(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle("card__like-button_active");
}

// ==========================================
// LÓGICA DE BOTÓN "ELIMINAR"
// ==========================================

function handleDeleteButtonClick(evt) {
  const deleteButton = evt.target;
  const cardElement = deleteButton.closest(".card");
  cardElement.remove();
}

// ==========================================
// LÓGICA DE POPUP DE IMAGEN AMPLIADA
// ==========================================

function handleCardImageClick(name, link) {
  imagePopupImage.src = link;
  imagePopupImage.alt = name;
  imagePopupCaption.textContent = name;

  openModal(imagePopup);
}

// ==========================================
// LÓGICA DE CIERRE DEL POPUP DE IMAGEN AMPLIADA
// ==========================================

imagePopupCloseBtn.addEventListener("click", function () {
  closeModal(imagePopup);
});
