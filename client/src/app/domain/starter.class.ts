import { IngredientClass } from "./ingredient.class";

export class StarterClass {

    public id: number;
    public name: string;
    public description: string;
    public ingredients: IngredientClass[];

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}