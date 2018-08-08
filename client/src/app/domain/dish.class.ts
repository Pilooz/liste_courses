export class DishClass {

    public id: number;
    public name: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}