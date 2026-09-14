import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    private form: HTMLFormElement;
    private handleFormSubmit: (data: any) => void;
    private inputList: HTMLInputElement[];

    constructor(popupSelector: string, handleFormSubmit: (data: any) => void) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this.form = this.popupElement.querySelector(
            ".popup__form",
        ) as HTMLFormElement;
        this.inputList = Array.from(
            this.form.querySelectorAll(".popup__input"),
        );
    }

    private getInputValues() {
        const values: any = {};
        this.inputList.forEach((input) => values[input.name] = input.value);
        return values;
    }

    public setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this.getInputValues());
        });
    }

    public close() {
        super.close();
        this.form.reset();
    }
}