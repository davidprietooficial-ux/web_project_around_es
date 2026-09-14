import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { initialCards, validationConfig } from "./utils/constants.js";
const btnEdit = document.querySelector(".profile__edit-button");
const btnAdd = document.querySelector(".profile__add-button");
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    aboutSelector: ".profile__description",
});
const popupImage = new PopupWithImage("#image-popup");
popupImage.setEventListeners();
const editPopup = new PopupWithForm("#edit-popup", (data) => {
    userInfo.setUserInfo({ name: data.name, about: data.description });
    editPopup.close();
});
editPopup.setEventListeners();
const addPopup = new PopupWithForm("#new-card-popup", (data) => {
    cardList.addItem(createCard({ name: data["place-name"], link: data.link }));
    addPopup.close();
});
addPopup.setEventListeners();
const createCard = (data) => {
    return new Card(data, "#cards__template", (n, l) => popupImage.open(n, l))
        .generateCard();
};
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    },
}, ".cards__list");
const editValidator = new FormValidator(validationConfig, document.querySelector("#edit-profile-form"));
const addValidator = new FormValidator(validationConfig, document.querySelector("#new-card-form"));
editValidator.enableValidation();
addValidator.enableValidation();
btnEdit.addEventListener("click", () => {
    const data = userInfo.getUserInfo();
    document.querySelector(".popup__input_type_name")
        .value = data.name;
    document.querySelector(".popup__input_type_description").value = data.about;
    editValidator.resetValidation();
    editPopup.open();
});
btnAdd.addEventListener("click", () => {
    addValidator.resetValidation();
    addPopup.open();
});
cardList.renderItems();
//# sourceMappingURL=index.js.map