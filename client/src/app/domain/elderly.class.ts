export class ElderlyClass {

    public id: number;
    public firstname: string;
    public lastname: string;
    public birthdate: Date;
    public address: string;
    public postalCode: string;
    public city: string;
    public phone: string;
    public mobile: string;
    public maritalStatus: string;
    public homeStatus: string;
    public weight: number;
    public size: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}