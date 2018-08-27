export class CaregiverClass {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    postalCode: string;
    phone: string;
    email: string;
    shopping_frequency_once: number;
    shopping_frequency_per: number;
    shopping_frequency_week_day: number;
    remarks: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}