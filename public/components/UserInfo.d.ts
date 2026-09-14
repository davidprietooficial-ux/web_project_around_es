import type { UserInfoData } from "../types/types.js";
export declare class UserInfo {
    private nameElement;
    private aboutElement;
    constructor({ nameSelector, aboutSelector }: {
        nameSelector: string;
        aboutSelector: string;
    });
    getUserInfo(): UserInfoData;
    setUserInfo({ name, about }: UserInfoData): void;
}
//# sourceMappingURL=UserInfo.d.ts.map