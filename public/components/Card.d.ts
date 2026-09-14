import type { CardData } from "../types/types.js";
export declare class Card {
    private name;
    private link;
    private templateSelector;
    private handleCardClick;
    private element;
    constructor(data: CardData, templateSelector: string, handleCardClick: (name: string, link: string) => void);
    private _getTemplate;
    private _setEventListeners;
    generateCard(): HTMLElement;
}
//# sourceMappingURL=Card.d.ts.map