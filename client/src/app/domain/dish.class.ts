import { IngredientClass } from "./ingredient.class";
import * as _ from 'lodash';

export class DishClass {

    public id: number;
    public name: string;
    public description: string;
    public ingredients: IngredientClass[];

    constructor(obj?: any) {
        Object.assign(this, obj, {
            ingredients: obj.ingredients ? _.map(obj.ingredients, ingredient => new IngredientClass(ingredient)): new Array()
        });
    }
}