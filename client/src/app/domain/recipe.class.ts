import { IngredientClass } from "./ingredient.class";

export class RecipeClass {

    public id: number;
    public description: string;
    public ingredients: IngredientClass[];

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}