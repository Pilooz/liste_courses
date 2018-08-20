import { IngredientClass } from "./ingredient.class";

export class ShoppingListClass {

    public id: number;
    public startDate: Date;
    public endDate: Date;
    public elderlyId: number;
    public ingredients: IngredientClass[];

    constructor(obj?: any) {
        Object.assign(this, obj);
        this.ingredients = obj && obj.ingredients ? obj.ingredients : new Array<IngredientClass>();
    }
}