import { CookingImplicationType } from "../enum/cooking-implication-type.enum";
import { SkillClass } from "./skill.class";

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
    public skills: SkillClass[] = [];
    public weight: number;

    constructor(obj?: any) {
        Object.assign(this, obj, {
            skills: obj && obj.skills ? obj.skills.map(skill => new SkillClass(skill)) : []
        });
    }
}