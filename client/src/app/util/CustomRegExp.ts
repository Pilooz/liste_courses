export class CustomRegExp {

    /**
     * Zip code (5 digits)
     */
    public static readonly ZIPCODE: RegExp = /^[0-9]{5}$/;

    /**
     * Validate an url
     */
    public static readonly URL: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
}