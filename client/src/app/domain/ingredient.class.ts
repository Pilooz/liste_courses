export class IngredientClass {

    public id: number;
    public name: string;
    public unit: string;
    public quantity: number;
    public masculine: boolean;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}