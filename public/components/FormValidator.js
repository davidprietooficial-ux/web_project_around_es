export class FormValidator {
    config;
    formElement;
    inputList;
    buttonElement;
    constructor(config, formElement) {
        this.config = config;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
        this.buttonElement = this.formElement.querySelector(this.config.submitButtonSelector);
    }
    _showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this.config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.config.errorClass);
    }
    hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this.config.inputErrorClass);
        errorElement.classList.remove(this.config.errorClass);
        errorElement.textContent = "";
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        }
        else
            this.hideInputError(inputElement);
    }
    toggleButtonState() {
        const hasInvalid = this.inputList.some((inputElement) => !inputElement.validity.valid);
        if (hasInvalid) {
            this.buttonElement.classList.add(this.config.inactiveButtonClass);
            this.buttonElement.disabled = true;
        }
        else {
            this.buttonElement.classList.remove(this.config.inactiveButtonClass);
            this.buttonElement.disabled = false;
        }
    }
    enableValidation() {
        this.formElement.addEventListener("submit", (e) => e.preventDefault());
        this.inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this.checkInputValidity(input);
                this.toggleButtonState();
            });
        });
    }
    resetValidation() {
        this.inputList.forEach((input) => this.hideInputError(input));
        this.toggleButtonState();
    }
}
//# sourceMappingURL=FormValidator.js.map