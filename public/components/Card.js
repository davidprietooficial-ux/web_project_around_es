export class Card {
    name;
    link;
    templateSelector;
    handleCardClick;
    element;
    constructor(data, templateSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
    }
    _getTemplate() {
        return document.querySelector(this.templateSelector).content.querySelector(".card").cloneNode(true);
    }
    _setEventListeners() {
        this.element.querySelector(".card__like-button").addEventListener("click", (evt) => evt.target.classList.toggle("card__like-button_is-active"));
        this.element.querySelector(".card__delete-button").addEventListener("click", () => this.element.remove());
        this.element.querySelector(".card__image").addEventListener("click", () => this.handleCardClick(this.name, this.link));
    }
    generateCard() {
        this.element = this._getTemplate();
        const img = this.element.querySelector(".card__image");
        img.src = this.link;
        img.alt = this.name;
        this.element.querySelector(".card__title").textContent = this.name;
        this._setEventListeners();
        return this.element;
    }
}
//# sourceMappingURL=Card.js.map