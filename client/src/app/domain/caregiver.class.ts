export class CaregiverClass {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    postalCode: string;
    city: string;
    phone: string;
    email: string;
    shoppingFrequency: string;
    remarks: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}