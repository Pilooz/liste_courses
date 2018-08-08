export class StarterClass {

    public id: number;
    public name: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}