import { MealType } from "../enum/meal-type.enum";
import { DishClass } from "./dish.class";
import { StarterClass } from "./starter.class";

export class MealClass {

    public id: number;
    public date: Date;
    public type: MealType;
    public elderlyId: number;
    public starterId: number;
    public dishId: number;
    public starter: StarterClass;
    public dish: DishClass;

    constructor(obj?: any) {
        Object.assign(this, obj, {
            date: obj && obj.date ? new Date(obj.date) : null,
            starter: obj && obj.starter ? new StarterClass(obj.starter) : null,
            dish: obj && obj.dish ? new DishClass(obj.dish) : null,
        });
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

    getTypeName() {
        switch (this.type) {
            case MealType.BREAKFAST:
                return 'Petit déjeuner';
            case MealType.LUNCH:
                return 'Déjeuner';
            case MealType.DINNER:
                return 'Dîner';
        }
    }
}