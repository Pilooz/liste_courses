import { MealType } from "../enum/meal-type.enum";

export class MealClass {

    public id: number;
    public date: Date;
    public type: MealType;
    public elderlyId: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    isBreakfast() {
        return this.type === MealType.BREAKFAST;
    }

    isLunch() {
        return this.type === MealType.LUNCH;
    }

    isDinner() {
        return this.type === MealType.DINNER;
    }
}