import { BaseModel } from "../base/Base.model.ts";

export class Collision extends BaseModel{

    location: string;
    ksi: boolean;
    secretCodeThatNobodyShouldSee: string;

    constructor(id: number, location: string, ksi: boolean) {
        super();
        this.id = id;
        this.secretCodeThatNobodyShouldSee = '42';
        this.location = location;
        this.ksi = ksi;
        this.modifiedBy = "system";
        this.modifiedDatetime = new Date();
    }
}