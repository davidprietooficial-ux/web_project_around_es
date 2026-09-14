import type { FormConfig } from "../types/types.js";

export class FormValidator {
    private config: FormConfig;
    private formElement: HTMLFormElement;
    private inputList: HTMLInputElement[];
    private buttonElement: HTMLButtonElement;

    constructor(config: FormConfig, formElement: HTMLFormElement) {
        this.config = config;
        this.formElement = formElement;
        this.inputList = Array.from(
            this.formElement.querySelectorAll(this.config.inputSelector),
        );
        this.buttonElement = this.formElement.querySelector(
            this.config.submitButtonSelector,
        ) as HTMLButtonElement;
    }

    private _showInputError(
        inputElement: HTMLInputElement,
        errorMessage: string,
    ) {
        const errorElement = this.formElement.querySelector(
            `#${inputElement.id}-error`,
        ) as HTMLElement;
        inputElement.classList.add(this.config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.config.errorClass);
    }

    private hideInputError(inputElement: HTMLInputElement) {
        const errorElement = this.formElement.querySelector(
            `#${inputElement.id}-error`,
        ) as HTMLElement;
        inputElement.classList.remove(this.config.inputErrorClass);
        errorElement.classList.remove(this.config.errorClass);
        errorElement.textContent = "";
    }

    private checkInputValidity(inputElement: HTMLInputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else this.hideInputError(inputElement);
    }

    private toggleButtonState() {
        const hasInvalid = this.inputList.some((inputElement) =>
            !inputElement.validity.valid
        );
        if (hasInvalid) {
            this.buttonElement.classList.add(this.config.inactiveButtonClass);
            this.buttonElement.disabled = true;
        } else {
            this.buttonElement.classList.remove(
                this.config.inactiveButtonClass,
            );
            this.buttonElement.disabled = false;
        }
    }

    public enableValidation() {
        this.formElement.addEventListener("submit", (e) => e.preventDefault());
        this.inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this.checkInputValidity(input);
                this.toggleButtonState();
            });
        });
    }

    public resetValidation() {
        this.inputList.forEach((input) => this.hideInputError(input));
        this.toggleButtonState();
    }
}