import { Popup } from "./Popup.js";
export declare class PopupWithForm extends Popup {
    private form;
    private handleFormSubmit;
    private inputList;
    constructor(popupSelector: string, handleFormSubmit: (data: any) => void);
    private getInputValues;
    setEventListeners(): void;
    close(): void;
}
//# sourceMappingURL=PopupWithForm.d.ts.map