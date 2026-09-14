export class Popup {
    protected popupElement: HTMLElement;

    constructor(popupSelector: string) {
        this.popupElement = document.querySelector(
            popupSelector,
        ) as HTMLElement;
        this.handleEscClose = this.handleEscClose.bind(this);
    }

    public open(...args: any[]): void {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }

    public close(): void {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }

    private handleEscClose(evt: KeyboardEvent): void {
        if (evt.key === "Escape") this.close();
    }

    public setEventListeners(): void {
        this.popupElement.addEventListener("mousedown", (evt) => {
            if (
                evt.target === this.popupElement ||
                (evt.target as HTMLElement).classList.contains("popup__close")
            ) this.close();
        });
    }
}