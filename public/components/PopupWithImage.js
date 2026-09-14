import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    image;
    caption;
    constructor(popupSelector) {
        super(popupSelector);
        this.image = this.popupElement.querySelector(".popup__image");
        this.caption = this.popupElement.querySelector(".popup__caption");
    }
    open(name, link) {
        this.image.src = link;
        this.image.alt = name;
        this.caption.textContent = name;
        super.open();
    }
}
//# sourceMappingURL=PopupWithImage.js.map