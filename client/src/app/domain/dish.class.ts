import { RecipeClass } from "./recipe.class";

export class DishClass {

    public id: number;
    public name: string;
    public recipeId: number;
    public recipe: RecipeClass;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}