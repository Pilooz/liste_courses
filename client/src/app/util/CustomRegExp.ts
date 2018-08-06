export class CustomRegExp {

    /**
     * Zip code (5 digits)
     */
    public static readonly ZIPCODE: RegExp = /^[0-9]{5}$/;

    /**
     * Phone (0 followed by 9 digits)
     */
    public static readonly PHONE: RegExp = /^0[0-9]{9}$/;

    /**
     * Validate an url
     */
    public static readonly URL: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
}