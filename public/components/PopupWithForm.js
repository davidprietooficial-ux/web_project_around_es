import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    form;
    handleFormSubmit;
    inputList;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this.form = this.popupElement.querySelector(".popup__form");
        this.inputList = Array.from(this.form.querySelectorAll(".popup__input"));
    }
    getInputValues() {
        const values = {};
        this.inputList.forEach((input) => values[input.name] = input.value);
        return values;
    }
    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this.getInputValues());
        });
    }
    close() {
        super.close();
        this.form.reset();
    }
}
//# sourceMappingURL=PopupWithForm.js.map