import type { UserInfoData } from "../types/types.js";

export class UserInfo {
    private nameElement: HTMLElement;
    private aboutElement: HTMLElement;

    constructor(
        { nameSelector, aboutSelector }: {
            nameSelector: string;
            aboutSelector: string;
        },
    ) {
        this.nameElement = document.querySelector(nameSelector) as HTMLElement;
        this.aboutElement = document.querySelector(
            aboutSelector,
        ) as HTMLElement;
    }

    public getUserInfo(): UserInfoData {
        return {
            name: this.nameElement.textContent || "",
            about: this.aboutElement.textContent || "",
        };
    }

    public setUserInfo({ name, about }: UserInfoData): void {
        this.nameElement.textContent = name;
        this.aboutElement.textContent = about;
    }
}