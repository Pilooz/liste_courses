import { MealType } from "../enum/meal-type.enum";

export class MealClass {

    public id: number;
    public date: Date;
    public type: MealType;
    public elderlyId: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}