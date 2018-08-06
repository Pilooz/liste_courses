import { CookingImplicationType } from "../enum/cooking-implication-type.enum";

export class ElderlyClass {

    public id: number;
    public address: string;
    public allergies: string;
    public birthdate: Date;
    public city: string;
    public cookingImplication: CookingImplicationType;
    public dislikes: string;
    public firstname: string;
    public habits: string;
    public homeStatus: string;
    public lastname: string;
    public likes: string;
    public maritalStatus: string;
    public mobile: string;
    public phone: string;
    public postalCode: string;
    public restrictions: string;
    public size: number;
    public weight: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}