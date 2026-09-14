export class Popup {
    popupElement;
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.handleEscClose = this.handleEscClose.bind(this);
    }
    open(...args) {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    handleEscClose(evt) {
        if (evt.key === "Escape")
            this.close();
    }
    setEventListeners() {
        this.popupElement.addEventListener("mousedown", (evt) => {
            if (evt.target === this.popupElement ||
                evt.target.classList.contains("popup__close"))
                this.close();
        });
    }
}
//# sourceMappingURL=Popup.js.map