import type { CardData } from "../types/types.js";

export class Card {
    private name: string;
    private link: string;
    private templateSelector: string;
    private handleCardClick: (name: string, link: string) => void;
    private element!: HTMLElement;

    constructor(
        data: CardData,
        templateSelector: string,
        handleCardClick: (name: string, link: string) => void,
    ) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
    }

    private _getTemplate(): HTMLElement {
        return (document.querySelector(
            this.templateSelector,
        ) as HTMLTemplateElement).content.querySelector(".card")!.cloneNode(
            true,
        ) as HTMLElement;
    }

    private _setEventListeners(): void {
        this.element.querySelector(".card__like-button")!.addEventListener(
            "click",
            (evt) =>
                (evt.target as HTMLElement).classList.toggle(
                    "card__like-button_is-active",
                ),
        );
        this.element.querySelector(".card__delete-button")!.addEventListener(
            "click",
            () => this.element.remove(),
        );
        this.element.querySelector(".card__image")!.addEventListener(
            "click",
            () => this.handleCardClick(this.name, this.link),
        );
    }

    generateCard(): HTMLElement {
        this.element = this._getTemplate();
        const img = this.element.querySelector(
            ".card__image",
        ) as HTMLImageElement;
        img.src = this.link;
        img.alt = this.name;
        this.element.querySelector(".card__title")!.textContent = this.name;
        this._setEventListeners();
        return this.element;
    }
}