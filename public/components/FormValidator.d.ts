import type { FormConfig } from "../types/types.js";
export declare class FormValidator {
    private config;
    private formElement;
    private inputList;
    private buttonElement;
    constructor(config: FormConfig, formElement: HTMLFormElement);
    private _showInputError;
    private hideInputError;
    private checkInputValidity;
    private toggleButtonState;
    enableValidation(): void;
    resetValidation(): void;
}
//# sourceMappingURL=FormValidator.d.ts.map